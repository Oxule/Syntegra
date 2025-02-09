import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AuthData = {
    token: string;
    tokenUntil: string;
    credentials?: any;
};

export class AuthConfig {
    storeName: string = "_auth";
    headerFunction: (token: string) => any = (token) => ({
        Authorization: "Bearer " + token,
    });
}

export class AuthManager {
    config: AuthConfig;
    authData: AuthData | null;
    private listeners: Array<() => void> = [];

    constructor(config: AuthConfig) {
        this.config = config;
        this.authData = this.loadAuth();
    }

    private loadAuth(): AuthData | null {
        const dataStr = localStorage.getItem(this.config.storeName);
        if (!dataStr) return null;
        try {
            const data: AuthData = JSON.parse(dataStr);
            if (this.isTokenExpired(data.tokenUntil)) {
                this.logout();
                return null;
            }
            return data;
        } catch {
            return null;
        }
    }

    private saveAuth(data: AuthData | null) {
        if (data) {
            localStorage.setItem(this.config.storeName, JSON.stringify(data));
        } else {
            localStorage.removeItem(this.config.storeName);
        }
    }

    private notifyListeners() {
        this.listeners.forEach((listener) => listener());
    }

    private isTokenExpired(tokenUntil: string): boolean {
        return new Date(tokenUntil) <= new Date();
    }

    private validateAuth() {
        if (this.authData && this.isTokenExpired(this.authData.tokenUntil)) {
            this.logout();
        }
    }

    addListener(listener: () => void) {
        this.listeners.push(listener);
    }

    removeListener(listener: () => void) {
        this.listeners = this.listeners.filter((l) => l !== listener);
    }

    login(token: string, tokenUntil: string | Date, credentials?: any) {
        const tokenUntilStr =
            tokenUntil instanceof Date ? tokenUntil.toISOString() : tokenUntil;
        const data: AuthData = { token, tokenUntil: tokenUntilStr, credentials };
        this.saveAuth(data);
        this.authData = data;
        this.notifyListeners();
    }

    logout() {
        this.authData = null;
        this.saveAuth(null);
        this.notifyListeners();
    }

    isAuthenticated(): boolean {
        this.validateAuth();
        return this.authData !== null;
    }

    getHeader() {
        this.validateAuth();
        return this.authData ? this.config.headerFunction(this.authData.token) : null;
    }

    getCredentials() {
        this.validateAuth();
        return this.authData ? this.authData.credentials : null;
    }
}

const AuthContext = createContext<AuthManager | null>(null);

type AuthProviderProps = {
    config: AuthConfig;
    children: ReactNode;
};

export function AuthProvider({ config, children }: AuthProviderProps) {
    const [authManager] = useState(() => new AuthManager(config));

    return (
        <AuthContext.Provider value={authManager}>
            {children}
        </AuthContext.Provider>
    );
}

export function useLogin() {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error("useLogin must be used within AuthProvider");
    }

    return (token: string, tokenUntil: string | Date, credentials?: any) => {
        auth.login(token, tokenUntil, credentials);
    };
}

export function useLogout() {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error("useLogout must be used within AuthProvider");
    }

    return () => {
        auth.logout();
    };
}

export function useAuth(): [boolean, any, any] {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    const [, setVersion] = useState(0);

    useEffect(() => {
        const listener = () => setVersion((v) => v + 1);
        auth.addListener(listener);
        return () => {
            auth.removeListener(listener);
        };
    }, [auth]);

    return [auth.isAuthenticated(), auth.getHeader(), auth.getCredentials()];
}

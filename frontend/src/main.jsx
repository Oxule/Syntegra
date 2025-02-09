import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router"
import './index.css'
import './buttons.css'
import Login from "./Login.jsx";
import Projects from "./Projects.jsx";
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import {Navbar} from "./Navbar/Navbar.jsx";
import {AuthConfig, AuthProvider} from "./Auth.tsx";
import {Test} from "./Test.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MantineProvider defaultColorScheme="dark">
          <AuthProvider config={new AuthConfig()}>
              <BrowserRouter>
                  <Navbar/>
                  <Routes>
                      <Route path={"/login"} element={<Login/>}/>
                      <Route path={"/"} element={<Projects/>}/>
                      <Route path={"/test"} element={<Test/>}/>
                  </Routes>
              </BrowserRouter>
          </AuthProvider>
      </MantineProvider>
  </StrictMode>,
)

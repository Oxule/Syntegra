import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router"
import './index.css'
import './buttons.css'
import './overflow.css'
import "./Scheme/SchemeHighlight.js";
import '@mantine/code-highlight/styles.css';
import Login from "./Login.jsx";
import Projects from "./Projects.jsx";
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import {Navbar} from "./Navbar/Navbar.jsx";
import {AuthConfig, AuthProvider} from "./Auth.tsx";
import {Test} from "./Test.jsx";
import {AutoAlt} from "./AutoAlt.jsx";
import {Project} from "./Project/Project.jsx";
import {SchemesTest} from "./SchemesTest.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AutoAlt/>
      <MantineProvider defaultColorScheme="dark">
          <AuthProvider config={new AuthConfig()}>
              <BrowserRouter>
                  <Navbar/>
                  <div className={"body"}>
                      <Routes>
                          <Route path={"/login"} element={<Login/>}/>
                          <Route path={"/"} element={<Projects/>}/>
                          <Route path={"/:id"} element={<Project/>}/>
                          <Route path={"/test"} element={<Test/>}/>
                          <Route path={"/test/schemes"} element={<SchemesTest/>}/>
                      </Routes>
                  </div>
              </BrowserRouter>
          </AuthProvider>
      </MantineProvider>
  </StrictMode>,
)

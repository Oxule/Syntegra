import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router"
import './index.css'
import Login from "./Login.jsx";
import Projects from "./Projects.jsx";
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MantineProvider defaultColorScheme="dark">
          <BrowserRouter>
              <Routes>
                  <Route path={"/test"} element={<h1>Test</h1>}/>
                  <Route path={"/login"} element={<Login/>}/>
                  <Route path={"/"} element={<Projects/>}/>
              </Routes>
          </BrowserRouter>
      </MantineProvider>
  </StrictMode>,
)

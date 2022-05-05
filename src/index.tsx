import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";
import {themeOptions} from "./theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme(themeOptions)
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ThemeProvider>

  </React.StrictMode>
);

reportWebVitals();

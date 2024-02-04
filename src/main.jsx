import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.jsx';
import Sobremim from './pages/sobremim.jsx';
import Projetos from './pages/projetos.jsx';
import MeAche from './pages/ondemeachar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobremim",
        element: <Sobremim />
      },
      {
        path: "/projetos",
        element: <Projetos />
      },
      {
        path: "/meache",
        element: <MeAche />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './compents/Home/Home'
import About from './compents/About/About'
import Portfolio from './compents/Portfolio/Portfolio'
import Contact from './compents/Contact/Contact'
import Layout from './compents/Layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
 
}

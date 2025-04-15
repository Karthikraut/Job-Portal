import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
const appRouter = createBrowserRouter([
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/jobs',
        element:<Jobs/>
      },
      {
        path: '/browse',
        element: <Browse/>
      }
]);

function App() {
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App;

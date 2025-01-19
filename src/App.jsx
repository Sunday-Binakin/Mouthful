import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Order from './pages/Order'
 

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path:"orders",
      element:<Order/>
    }
     
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App

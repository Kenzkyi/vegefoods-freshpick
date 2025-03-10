import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import MainHolder from "./routes/MainHolder";
import Home from './pages/Home';
import Forgetpassword from './auth/Forgetpassword';
import Resetpassword from  './auth/Resetpassword';
import ProductDetails from './components/ProductDetails';


const routes = createBrowserRouter([
    {path:'login',element:<Login/>},
    {path:'sign-up',element:<Signup/>},
    {path:'forget-password',element:<Forgetpassword/>},
    {path:'reset-password',element:<Resetpassword/>},
    {element:<MainHolder/>,children:[
        {path:'',element:<Home/>},
        {path:'cart',element:<Cart/>},
        {path:'checkout',element:<Checkout/>},
        {path:'profile',element:<Profile/>},
        {path:'shop',element:<Shop/>},
        {path:'shop/:productId',element:<ProductDetails/>},
    ]}
])

const App = () => {
  return <RouterProvider router={routes} />
}

export default App

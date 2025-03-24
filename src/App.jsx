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
import VerifyEmail from './auth/VerifyEmail';
import ResendVerification from './auth/ResendVerification';
import PrivateRoute from './routes/PrivateRoute';
import ContactUs from './pages/Contactus';
import About from './pages/About';


const routes = createBrowserRouter([
    {path:'login',element:<Login/>},
    {path:'sign-up',element:<Signup/>},
    {path:'resend-verification',element:<ResendVerification/>},
    {path:'verify-email/:token',element:<VerifyEmail/>},
    {element:<PrivateRoute/>,children:[
      {path:'profile',element:<Profile/>},
    ]},
    {path:'forget-password',element:<Forgetpassword/>},
    {path:'reset-password/:token',element:<Resetpassword/>},
    {element:<MainHolder/>,children:[
      {path:'',element:<Home/>},
      {path:'/contact-us',element:< ContactUs/>},
      {path:'/about-us',element:< About />},
      {path:'cart',element:<Cart/>},
      {element:<PrivateRoute/>,children:[
          {path:'checkout',element:<Checkout/>}
        ]},
        {path:'shop',element:<Shop/>},
        {path:'shop/:productName',element:<ProductDetails/>},
    ]}
])

const App = () => {
  return <RouterProvider router={routes} />
}

export default App

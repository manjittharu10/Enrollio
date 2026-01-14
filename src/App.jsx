import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Pricing from "./Components/pricing";
import Contact from "./Components/Contact";
import Header from './Components/pages/Header';
function App() {
  const Router = createBrowserRouter([{
    path:"/",
    element:<><Navbar/><Home/></>
  },{ path:"/about",
    element:<><Navbar/><About/></>
  },
{ path:"/features",
    element:<><Navbar/><Features/></>
  },
  { path:"/pricing",
    element:<><Navbar/><Pricing/></>
  },
{ path:"/contact",
    element:<><Navbar/><Contact/></>
  }])
 return(
  <>
  <RouterProvider router={Router}></RouterProvider>
  
  </>
 )

}

export default App;

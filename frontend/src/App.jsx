import "./App.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Inbox from "./Component/Inbox";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body";
import Mail from "./Component/Mail";
import SendEmail from "./Component/SendEmail";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Inbox/>
      },
      {
        path:"/mail/:id",
        element: <Mail/>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/Signup",
    element:<Signup/>
  }
])

function App() {
  
  return (
    <div>
      
      <RouterProvider router={appRouter}/>
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail/>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;

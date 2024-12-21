import "react-quill/dist/quill.snow.css"
import './index.css'
import { useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "./Redux/actions/authAction";

function App() {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem('dark-mode') === "true"
  )

  console.log("AUTHENTICATED ??", isAuthenticated)

  useEffect( () => {
    const getTokenFromCookie = () => Cookies.get('token');
    const token = getTokenFromCookie();
    if (token) {
      dispatch(setIsAuthenticated(true))
    }else{
      dispatch(setIsAuthenticated(false))
    }
  }, [])


  useEffect(() =>{
    const root = window.document.documentElement
    if (darkmode){
      root.classList.add('dark')
    }else{
      root.classList.remove('dark')
    }

    //save dark-mode preference
    localStorage.setItem("dark-mode", darkmode);
  }, [darkmode])


  return (
    <>
      <Toaster position={'top-right'} />
      <div className=" h-fit max-w-[150rem] p-2 relative dark:bg-deep_black_red dark:text-white" >
        <button className=' absolute right-[20px] flex rounded-xl text-[10px] ring-2 ring-black dark:ring-white px-1 self-end ' onClick={() => { 
            setDarkmode(!darkmode)
        }} >
          👾
        </button>
        <RouterProvider router={Router} />
      </div>
    </>
  );
}

export default App;

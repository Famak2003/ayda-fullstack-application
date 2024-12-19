import "react-quill/dist/quill.snow.css"
import './index.css'
import { useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector(state => state.auth);
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem('dark-mode') === "true"
  )

  console.log("AUTHENTICATED ??", isAuthenticated)

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
        <button className=' absolute right-[20px] flex rounded-xl ring-2 ring-black dark:ring-white p-3 self-end ' onClick={() => { 
            setDarkmode(!darkmode)
        }} >
          dark mode 👾
        </button>
        <RouterProvider router={Router} />
      </div>
    </>
  );
}

export default App;

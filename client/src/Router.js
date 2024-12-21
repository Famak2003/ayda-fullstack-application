import { createBrowserRouter, Navigate } from "react-router-dom";
import Public from "./Public";
import Admin from "./Admin";
import * as AdminPages from './Admin/Pages'
import * as AuthPages from './Admin/Auth'
import * as PublicPages from './Public/Pages'
import ProtectedRoute from "./ProtectedRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Public />,
        children:[
            {
                index: true,
                element: <PublicPages.Home />,
            },
            {
                path: 'about-us',
                element: <PublicPages.Aboutus/>
            },
            {
                path: 'treatments',
                element: <PublicPages.Treatments/>
            },
            {
                path: 'trip',
                element: <PublicPages.Trip/>
            },
            {
                path: 'FAQ',
                element: <PublicPages.FAQ/>
            },
            {
                path: 'communication',
                element: <PublicPages.Communication/>
            },
            
        ]
    },
    {
        path: "admin/auth",
        element: <AuthPages.Auth/>,
        children: [
            {
                index: true,
                element: <AuthPages.Login/>
            },
            {
                path: 'ResetPassword',
                element: <AuthPages.ResetPassword/>
            }
        ]
    },
    {
        path: "admin/dashboard",
        element: <AdminPages.Dashboard/>,
        children: [
            {
                index: true,
                element: <AdminPages.Home/>
            },
            {
                path: 'home',
                element: <Navigate to={'admin/dashboard'}/>
            },
            {
                path: 'about-us',
                element: <AdminPages.Aboutus/>
            },
            {
                path: 'treatments',
                element: <AdminPages.Treatments/>
            },
            {
                path: 'trip',
                element: <AdminPages.Trip/>
            },
            {
                path: 'FAQ',
                element: <AdminPages.FAQ/>
            },
            {
                path: 'communication',
                element: <AdminPages.Communication/>
            },
        ]
    }
        
  ]);
  
  export default Router;
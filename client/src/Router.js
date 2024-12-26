import { createBrowserRouter, Navigate } from "react-router-dom";
import Public from "./Public";
import * as AdminPages from './Admin/Pages'
import * as AuthPages from './Admin/Auth'
import * as PublicPages from './Public/Pages'
import NotFound from "./GeneralComp/NotFound";

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
                path: 'nedenbiz',
                element: <PublicPages.Whyus/>
            },
            {
                path: 'takimimiz',
                element: <PublicPages.OurTeam/>
            },
            {
                path: 'fiyatlarimiz',
                element: <PublicPages.OurPrices/>
            },
            {
                path: 'basarioranlari',
                element: <PublicPages.OurSuccessRates/>
            },
            {
                path: 'tupbebekivf',
                element: <PublicPages.IVF/>
            },
            {
                path: 'yumurtadonasyonu',
                element: <PublicPages.EggDonation/>
            },
            {
                path: 'spermdonasyonu',
                element: <PublicPages.SpermDonr/>
            },
            {
                path: 'embriyodonasyonu',
                element: <PublicPages.EmbryoDonr/>
            },
            {
                path: 'yumurtadondurma',
                element: <PublicPages.EggFreezing/>
            },
            {
                path: 'ovarianprp',
                element: <PublicPages.Ovarian/>
            },
            {
                path: 'akupunktur',
                element: <PublicPages.Acupuncture/>
            },
            {
                path: 'seyahat',
                element: <PublicPages.Trip/>
            },
            {
                path: 'sss',
                element: <PublicPages.FAQ/>
            },
            {
                path: 'iletisim',
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
        path: "admin",
        element: <Navigate to={'/admin/dashboard'}/>
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
                element: <Navigate to={'/admin/dashboard'}/>
            },
            {    path: 'nedenbiz',
                element: <AdminPages.Whyus/>
            },
            {
                path: 'takimimiz',
                element: <AdminPages.OurTeam/>
            },
            {
                path: 'fiyatlarimiz',
                element: <AdminPages.OurPrices/>
            },
            {
                path: 'basarioranlari',
                element: <AdminPages.OurSuccessRates/>
            },
            {
                path: 'tupbebekivf',
                element: <AdminPages.IVF/>
            },
            {
                path: 'spermdonasyonu',
                element: <AdminPages.SpermDonr/>
            },
            {
                path: 'embriyodonasyonu',
                element: <AdminPages.EmbryoDonr/>
            },
            {
                path: 'yumurtadonasyonu',
                element: <AdminPages.EggDonation/>
            },
            {
                path: 'yumurtadondurma',
                element: <AdminPages.EggFreezing/>
            },
            {
                path: 'ovarianprp',
                element: <AdminPages.Ovarian/>
            },
            {
                path: 'akupunktur',
                element: <AdminPages.Acupuncture/>
            },
            {
                path: 'seyahat',
                element: <AdminPages.Trip/>
            },
            {
                path: 'sss',
                element: <AdminPages.FAQ/>
            },
            {
                path: 'iletisim',
                element: <AdminPages.Communication/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
        
  ]);
  
  export default Router;
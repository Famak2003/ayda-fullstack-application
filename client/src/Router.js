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
                // element: <PublicPages.Body/>
            },
            {
                path: 'about-us',
                children: [
                    {
                        path: 'whyus',
                        element: <PublicPages.Whyus/>
                    },
                    {
                        path: 'ourteam',
                        element: <PublicPages.OurTeam/>
                    },
                    {
                        path: 'ourteam',
                        element: <PublicPages.OurTeam/>
                    },
                    {
                        path: 'ourprices',
                        element: <PublicPages.OurPrices/>
                    },
                    {
                        path: 'oursuccessrate',
                        element: <PublicPages.OurSuccessRates/>
                    }
                ]
            },
            {
                path: 'treatments',
                children: [
                    {
                        path: 'ivf',
                        element: <PublicPages.IVF/>
                    },
                    {
                        path: 'eggdonation',
                        element: <PublicPages.EggDonation/>
                    },
                    {
                        path: 'spermdonation',
                        element: <PublicPages.SpermDonr/>
                    },
                    {
                        path: 'embryodonation',
                        element: <PublicPages.EmbryoDonr/>
                    },
                    {
                        path: 'eggfreezing',
                        element: <PublicPages.EggDonation/>
                    },
                    {
                        path: 'ovarianprp',
                        element: <PublicPages.Ovarian/>
                    },
                    {
                        path: 'acupuncture',
                        element: <PublicPages.Acupuncture/>
                    }
                ]
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
            {
                path: 'about-us',
                children: [
                    {
                        path: 'whyus',
                        element: <AdminPages.Whyus/>
                    },
                    {
                        path: 'ourteam',
                        element: <AdminPages.OurTeam/>
                    },
                    {
                        path: 'ourteam',
                        element: <AdminPages.OurTeam/>
                    },
                    {
                        path: 'ourprices',
                        element: <AdminPages.OurPrices/>
                    },
                    {
                        path: 'oursuccessrate',
                        element: <AdminPages.OurSuccessRates/>
                    }
                ]
            },
            {
                path: 'treatments',
                children: [
                    {
                        path: 'ivf',
                        element: <AdminPages.IVF/>
                    },
                    {
                        path: 'eggdonation',
                        element: <AdminPages.EggDonation/>
                    },
                    {
                        path: 'spermdonation',
                        element: <AdminPages.SpermDonr/>
                    },
                    {
                        path: 'embryodonation',
                        element: <AdminPages.EmbryoDonr/>
                    },
                    {
                        path: 'eggfreezing',
                        element: <AdminPages.EggDonation/>
                    },
                    {
                        path: 'ovarianprp',
                        element: <AdminPages.Ovarian/>
                    },
                    {
                        path: 'acupuncture',
                        element: <AdminPages.Acupuncture/>
                    }
                ]
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
    },
    {
        path: "*",
        element: <NotFound/>
    }
        
  ]);
  
  export default Router;
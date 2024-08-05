import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar.js"
import Home from "./pages/Home";
import Titlebar from "./Component/TitbleBar";
import Grocery from "./pages/Grocery";
import Fashion from "./pages/Fashion";
import Electronics from "./pages/Electronics";
import Mobile from "./pages/Mobile";
import Appliances from "./pages/Appliances";
import MobileListComponent from './Component/mobiles/MobileListComponent.js';
import ItemComponent from './Component/mobiles/ItemComponent.js'
import { SignUpComponent } from './Component/buyer/SignUpComponent.js'
import { SignInComponent } from "./Component/buyer/SignInComponent.js"

import  SellersNavbar  from "./Component/seller/Navbar.js"
import  SellersDashBoard from './pages/sellers/DashBoard.js'
import { SellerSignUpComponent } from "./Component/seller/SellerSignUpComponent.js";
import { SellerSignInComponent } from "./Component/seller/SellerSignInComponent.js";
import ProductManagement from "./Component/seller/ProductManagementComponent.js";
import ProductCategory from "./Component/seller/ProductCategoryComponent.js";
import AddMobile from "./Component/seller/moblies/AddMobile.js";
import AddFashion from "./Component/seller/moblies/AddShirt.js";


import { useParams } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./Store.js";
import AuthLoader from "./AuthLoader.js";

export default function App() {
  


  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {

          element: <Navbar />,
          children:
            [
              {
                index: true,
                element: <Home />,
              },

              {
                path: "buyer",
                children:
                  [
                    {

                      path: "signup",
                      element: <SignUpComponent />
                    },
                    {
                      path: "signin",
                      element: <SignInComponent />
                    }
                  ],
              },

              {
                path: "/",
                element: <Titlebar />,
                children: [
                  {
                    path: "Grocery",
                    element: <Grocery />,
                  },
                  {
                    path: "Mobile",
                    children:
                      [
                        {
                          index: true,
                          element: <Mobile />,

                        },
                        {
                          path: ":id",
                          element: <ItemComponent />
                        },
                        {
                          path: "MobileDetails",
                          children:
                          [
                            {

                              path: ":companyName",
                              element: <MobileListComponent />
                            }
                          ],
                        },
                      ]
                  },
                  {
                    path: "Fashion",
                    element: <Fashion />,
                  },
                  {
                    path: "Electronics",
                    element: <Electronics />,
                  },
                  {
                    path: "Appliances",
                    element: <Appliances />,
                  },

                  {
                    path: "Mobile/MobileDetails",
                    element: <MobileListComponent />
                  },
                  {
                    path: "Appliances/AppliancesDetails",
                    element: <MobileListComponent />
                  },
                  {
                    path: "Electronics/ElectronicsDetails",
                    element: <MobileListComponent />
                  },
                  {
                    path: "Fashion/FashionDetails",
                    element: <MobileListComponent />
                  },


                ],
              },
            ]

        },

        {
          path: "seller",
          element: <SellersNavbar />,
          children:
            [
              {
                path: "dashboard",
                element:<SellersDashBoard/>
              },
              {
                path: "signup",
                element: <SellerSignUpComponent />
              },
              {
                path: "signin",
                element: <SellerSignInComponent />
              },
              {
                path: "productManagement",
                element:<ProductManagement/>,
              },
              {
                path: "catergory",
                element:<ProductCategory/>
              },
              {
                path: "addmobile",
                element:<AddMobile/>
              },
              {
                path: "addfashions",
                element:<AddFashion/>
              },
            ],
          },
      ],
    },
  ]);

  return (
    <>
     <Provider store={store}>
      <AuthLoader/>
    <RouterProvider router={router} />

     </Provider>
    </>
  );
}



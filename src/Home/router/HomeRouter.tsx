import { Navigate, Outlet,RouteObject, useLocation } from "react-router-dom"

import { NavHome } from "@/components"
import { HomePage, InformationPage } from "../pages"
import { NavInscripcion } from "@/components/NavInscripcion"

export const homeRouterChildren: Array<RouteObject> = [
  {
    index: true,
    element: <Navigate to="home"/>
  }, 
  {
    path: "home",
    element: <HomePage/>
  },
  {
    path: "information",
    element: <InformationPage/>
  }
]

export const HomeRouter = () => {
  const location = useLocation();
  return (
    <>
      <NavHome/>
      {
        (location.pathname === "/home") && (
          <NavInscripcion />
        )
      }
      <div className='p-5 h-auto xl:min-w-full xl:flex xl:justify-center'>
        <Outlet/>
      </div>
    </>
  )
}

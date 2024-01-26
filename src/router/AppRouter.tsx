import {homeRouterChildren,HomeRouter} from '@/Home/router'
import {InscriptionRouter,inscriptionRouterChildren} from '@/Inscription/router'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRouter/>,
      children: homeRouterChildren,
    },
    {
      path: "inscription",
      element: <InscriptionRouter/>,
      children: inscriptionRouterChildren
    }
  ])

  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}



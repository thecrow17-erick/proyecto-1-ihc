import { Navigate, Outlet, RouteObject} from 'react-router-dom'
import {HeaderInscription} from '../ui/components'
import { FormInscription } from '../pages'


export const inscriptionRouterChildren:Array<RouteObject> = [
  {
    index: true,
    element: <Navigate to="/inscription/form"/>
  },
  {
    path: 'form',
    element: <FormInscription/>
  }
]

export const InscriptionRouter = () => {
  return (
    <>
      <HeaderInscription/>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

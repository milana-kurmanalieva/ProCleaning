import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import { LoaderPage } from '@pages/LoaderPage/LoaderPage'

const App = () => {
  return <RouterProvider router={router} fallbackElement={<LoaderPage/>}/>
}

export default App


import { Footer } from '@modules/Footer/Footer'
import { Header } from '@modules/Header/Header'
import { LoaderPage } from '@pages/LoaderPage/LoaderPage'
import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'


export const Layout = () => {
  const { pathname } = useLocation()

  useEffect( () => {
    window.scrollTo( 0, 0 )
  }, [ pathname ] )
  return (
    <>
      <Header />
      <Suspense fallback={<LoaderPage />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}
import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

export const useScrollPosition = () => {
  const location = useLocation()

  useLayoutEffect( () => {
    const handleScroll = () => {
      sessionStorage.setItem( `scrollPosition-${location.key}`, window.scrollY )
    }
    const savedPosition = sessionStorage.getItem( `scrollPosition-${location.key}` )
    
    if ( savedPosition ) {
      window.scrollTo( 0, parseInt( savedPosition, 10 ) )
    } 

    window.addEventListener( 'scroll', handleScroll )
    return () => {
      window.removeEventListener( 'scroll', handleScroll )
    }
  },[ location.key ] )
}

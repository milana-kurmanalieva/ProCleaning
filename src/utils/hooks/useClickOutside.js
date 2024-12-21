import { useEffect, useRef } from 'react'

export const useClickOutside = ( handler, delay = 0 ) => {
  const ref = useRef()

  useEffect( () => {
    const handleClickOutside = ( event ) => {
      if ( ref.current && !ref.current.contains( event.target ) ) {
        if ( delay > 0 ) {
          setTimeout( () => handler( event ), delay )
        } else {
          handler( event )
        }
      }
    }

    document.addEventListener( 'mousedown', handleClickOutside )
    return () => {
      document.removeEventListener( 'mousedown', handleClickOutside )
    }
  }, [ handler, delay ] )

  return ref
}


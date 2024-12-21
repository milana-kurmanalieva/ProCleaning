import React from 'react'

export const importNamedComponent = ( importFunction, namedExport ) => {
  return React.lazy( () => 
    importFunction().then( ( module ) => ( { default: module[namedExport] } ) ),
  )
}

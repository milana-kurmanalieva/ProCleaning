import { requester } from '@utils/requester/requester'
import { create } from 'zustand'


export const useOtherProduct = create( ( set ) => ( {
  productItem: {}, 
  loader: false,

  getOtherProduct: async( id ) => {
    set( { loader: true } ) 
    try {
      const response = await requester.get( `other-machines/${id}/` )
      set( { productItem: response.data } ) 
    } catch ( error ) {
      set( { loader: false, productItem: {} } )
    }
  },
} ) )

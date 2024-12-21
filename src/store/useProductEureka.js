import { requester } from '@utils/requester/requester'
import { create } from 'zustand'


export const useProductEureka = create( ( set ) => ( {
  product: {}, 
  loading: false,

  getProduct: async( id, productId ) => {
    set( { loading: true } ) 
    try {
      const response = await requester.get( `eureka/categories/${id}/machines/${productId}/` )
      set( { product: response.data } ) 
    } catch ( error ) {
      set( { loading: false, product: {} } )
    }
  },
} ) )

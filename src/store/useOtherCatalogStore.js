import { requester } from '@utils/requester/requester'
import { create } from 'zustand'


export const useOtherCatalogStore = create( ( set ) => ( {
  catalog: [], 
  loading: false,

  getCatalog: async( ) => {
    set( { loading: true } ) 
    try {
      const response = await requester.get( 'other-machines/' )
      set( { catalog: response.data } ) 
    } catch ( error ) {
      set( { loading: false, catalog: [] } )
    }
  },
} ) )
import { requester } from '@utils/requester/requester'
import { create } from 'zustand'


export const useMainStore = create( ( set ) => ( {
  clients: [], 
  loading: false,

  getClients: async() => {
    set( { loading: true } ) 
    try {
      const response = await requester.get( 'main/' )
      set( { clients: response.data } ) 
    } catch ( error ) {
      set( { loading: false, clients: [] } )
    }
  },
} ) )

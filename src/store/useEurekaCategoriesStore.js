import { requester } from '@utils/requester/requester'
import { create } from 'zustand'


export const useEurekaCategoriesStore = create( ( set ) => ( {
  categories: [], 
  loading: false,

  getCategories: async() => {
    set( { loading: true } ) 
    try {
      const response = await requester.get( 'eureka/categories/' )
      set( { categories: response.data } ) 
    } catch ( error ) {
      set( { loading: false, categories: [] } )
    }
  },
} ) )

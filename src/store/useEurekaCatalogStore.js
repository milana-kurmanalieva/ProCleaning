import { requester } from '@utils/requester/requester'
import { create } from 'zustand'


export const useEurekaCatalogStore = create( ( set ) => ( {
  catalog: [],
  loading: false,
  error: null,

  getCatalog: async( categoriesId ) => {
    set( { loading: true, error: null } ) 
    try {
      const response = await requester.get( `eureka/categories/${categoriesId}/machines/` )
      if ( response.data?.detail ) {
        set( { loading: false, catalog: [], error: response.data.detail } )
      } else {
        set( { catalog: response.data, loading: false } )
      }
    } catch ( error ) {
      set( { loading: false, catalog: [], error: 'Произошла ошибка при загрузке данных.' } )
    }
  },
} ) )


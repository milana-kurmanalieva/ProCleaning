import { Layout } from '@app/Layout/Layout'
import { Path } from '@utils/constants/constants'
import { importNamedComponent } from '@utils/helpers/helpers'
import { createBrowserRouter } from 'react-router-dom'

const NotFoundPage = importNamedComponent( () => import( '@pages/NotFoundPage/NotFoundPage' ), 'NotFoundPage' )
const MainPage = importNamedComponent( () => import( '@pages/MainPage/MainPage' ), 'MainPage' )
const CategoriesPage = importNamedComponent( () => import( '@pages/CategoriesPage/CategoriesPage' ), 'CategoriesPage' )
const CatalogEurekaPage = importNamedComponent( () => import( '@pages/CatalogEurekaPage/CatalogEurekaPage' ), 'CatalogEurekaPage' )
const CatalogOtherPage = importNamedComponent( () => import( '@pages/CatalogOtherPage/CatalogOtherPage' ), 'CatalogOtherPage' )
const ProductPage = importNamedComponent( () => import( '@pages/ProductPage/ProductPage' ), 'ProductPage' )
const EurekaProductsPage = importNamedComponent( () => import( '@pages/EurekaProductsPage/EurekaProductsPage' ), 'EurekaProductsPage' )
const OtherProductPage = importNamedComponent( () => import( '@pages/OtherProductPage/OtherProductPage' ), 'OtherProductPage' )



export const router = createBrowserRouter( [
  {
    element: <Layout />,
    children: [
      {
        path: Path.main,
        element: <MainPage />,
      },
      {
        path: Path.categories,
        element: <CategoriesPage />,
      },
      {
        path: Path.eureka,
        element: <CatalogEurekaPage />,
      },
      {
        path: Path.other,
        element: <CatalogOtherPage />,
      },
      {
        path: Path.eurekaProduct,
        element: <ProductPage />,
      },
      {
        path: Path.otherProduct,
        element: <OtherProductPage />,
      },
      {
        path: Path.eurekaCatalog,
        element: <EurekaProductsPage />,
      },
      {
        path: '/*',
        element: <NotFoundPage />,
      },
    ],
  },
] )

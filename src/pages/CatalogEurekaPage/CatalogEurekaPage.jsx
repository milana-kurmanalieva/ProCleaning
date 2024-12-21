import { CatalogEurekaModule } from '@modules/CatalogEurekaModule/CatalogEurekaModule'
import { Helmet } from 'react-helmet-async'

export const CatalogEurekaPage = () => {
  return (
    <main>
      <Helmet>
        <title>Оборудование Eureka - Pro Cleaning</title>
      </Helmet>
      <CatalogEurekaModule/>
    </main>
  )
}
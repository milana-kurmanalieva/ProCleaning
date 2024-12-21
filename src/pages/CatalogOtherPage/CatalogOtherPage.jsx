import { CatalogOther } from '@modules/CatalogOther/CatalogOther'
import { Helmet } from 'react-helmet-async'

export const CatalogOtherPage = () => {
  return (
    <main>
      <Helmet>
        <title>Другое оборудование - Pro Cleaning</title>
      </Helmet>
      <CatalogOther/>
    </main>
  )
}


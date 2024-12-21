import { Categories } from '@modules/Categories/Categories'
import { Helmet } from 'react-helmet-async'

export const CategoriesPage = () => {
  return (
    <main>
      <Helmet>
        <title>Категории - Pro Cleaning</title>
      </Helmet>
      <Categories/>
    </main>
  )
}


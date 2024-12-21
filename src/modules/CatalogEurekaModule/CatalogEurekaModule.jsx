import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import classes from './CatalogEurekaModule.module.scss'
import { Typography } from '@ui/Typography/Typography'
import { SubCategoriesCard } from '@ui/SubCategoriesCard/SubCategoriesCard'
import { useEurekaCategoriesStore } from '@store/useEurekaCategoriesStore'
import { useEffect } from 'react'


export const CatalogEurekaModule = () => {
  const { categories, loading, getCategories } = useEurekaCategoriesStore()

  useEffect( () => {
    getCategories()
  }, [ getCategories ] )

  if ( !loading ) return

  return (
    <section className={classes.catalogEurekaModule}>
      <MultiContainer>
        <Typography variant='h2'>Оборудование от EUREKA</Typography>
        <div className={classes.subCategories}>
          {categories ? (
            categories.map( ( category, index ) => (
              <SubCategoriesCard
                key={index}
                title={category.title}
                image={category.picture}
                id={category.id}
              />
            ) )
          ) : (
            <Typography variant='h2'>Пока что ничего нет</Typography>
          )  }
        </div>
      </MultiContainer>
    </section>
  )
}


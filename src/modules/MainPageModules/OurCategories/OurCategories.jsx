import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import classes from './OurCategories.module.scss'
import { CategoriesCard } from '@ui/CategoriesCard/CategoriesCard'
import { Path } from '@utils/constants/constants'
import EurekaCategories from '@assets/Images/EurekaCategory.webp'
import OtherCategories from '@assets/Images/OtherCategory.webp'


export const OurCategories = () => {

  const categories = [
    {
      title: 'Оборудование от EUREKA',
      description: 'Профессиональное оборудование от ведущего итальянского производителя',
      link: Path.eureka,
      image: EurekaCategories
    },{
      title: 'Другое оборудование',
      description: 'Широкий выбор клинингового оборудования различных брендов',
      link: Path.other,
      image: OtherCategories
    }
  ]

  return (
    <section className={classes.ourCategories}>
      <MultiContainer className={classes.ourCategoriesContainer}>
        <h2>Наши категории продукции</h2>
        <div className={classes.categories}>
          {categories && categories.map( ( category ) => (
            <CategoriesCard
              key={category.title}
              title={category.title} 
              description={category.description}
              link={category.link} 
              image={category.image} 
            />
          ) )}
        </div>
      </MultiContainer>
    </section>
  )
}
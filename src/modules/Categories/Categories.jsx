import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import classes from './Categories.module.scss'
import { Typography } from '@ui/Typography/Typography'
import { categories } from '@utils/constants/constants'
import { Link } from 'react-router-dom'
import classNames from 'classnames'


export const Categories = () => {
  return (
    <section className={classes.categories}>
      <MultiContainer>
        <Typography variant='h2'>Каталог продукции</Typography>
        <div className={classes.categoriesWrapper}>
          {categories && categories.map( ( category, index ) => (
            <div key={index} className={classNames( classes.category, classes[`${category.class}`] )}>
              <div className={classes.categoryImage}>
                <img src={category.image} alt={category.title} />
              </div>
              <div className={classes.categoryInfo}>
                <Typography variant='h3'>{category.title}</Typography>
                <Typography variant='bodyText'>{category.description}</Typography>
                <Link to={`${category.href}`}>
                  <Typography variant='h4'>
                    Перейти к подкатегориям
                  </Typography>
                </Link>
              </div>
            </div>
          ) )}
        </div>
      </MultiContainer>
    </section>
  )
}
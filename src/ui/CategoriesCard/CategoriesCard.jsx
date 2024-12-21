import { Typography } from '@ui/Typography/Typography'
import classes from './CategoriesCard.module.scss'
import { Link } from 'react-router-dom'
import { ArrowNext } from '@assets/Icons/ArrowNext'


export const CategoriesCard = ( props ) => {
  const { title, description, link, image } = props
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={classes.categoriesCard}>
      <div className={classes.content}>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='bodyText'>{description}</Typography>
        <Link to={`${link}`}>
          <button>
            <span>Подробнее</span>
            <ArrowNext/>
          </button>
        </Link>
      </div>
    </div>
  )
}

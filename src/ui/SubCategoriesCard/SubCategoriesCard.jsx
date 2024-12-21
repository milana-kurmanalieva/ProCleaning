import { Typography } from '@ui/Typography/Typography'
import classes from './SubCategoriesCard.module.scss'
import { Link } from 'react-router-dom'

export const SubCategoriesCard = ( props ) => {

  const { title, image, description, id } = props

  return (
    <div className={classes.subCategoriesCard}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.info}>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='bodyText'>{description}</Typography>
        <Link to={`eureka-catalog/${id}`}>
          <Typography variant='h4'>Перейти к каталогу</Typography>
        </Link>
      </div>
    </div>
  )
}
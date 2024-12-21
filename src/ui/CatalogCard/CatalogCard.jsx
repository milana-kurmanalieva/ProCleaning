import { Typography } from '@ui/Typography/Typography'
import { motion } from 'framer-motion'
import classes from './CatalogCard.module.scss'
import { Link } from 'react-router-dom'
import DefaultImage from '@assets/Images/defaultImage.webp'

export const CatalogCard = ( props ) => {
  const { image, title, idProduct, isEureka } = props

  const imageUrl = image && image.length > 0 ? image[0].photo : DefaultImage


  return (
    <motion.div
      className={classes.catalogCard}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={classes.image}>
        <img src={imageUrl} alt={title} onError={( e ) => { e.target.src = DefaultImage }}/>
      </div>
      <div className={classes.info}>
        <Typography variant='h3'>{title}</Typography>
        <Link to={isEureka ? `machines/${idProduct}` : `${idProduct}`}>
          <Typography variant='h4'>Подробнее</Typography>
        </Link>
      </div>
    </motion.div>
  )
}
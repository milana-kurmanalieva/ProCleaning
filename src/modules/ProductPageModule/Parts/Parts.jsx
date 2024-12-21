import { Typography } from '@ui/Typography/Typography'
import classes from './Parts.module.scss'

export const Parts = ( props ) => {

  const { parts, title } = props

  return (
    <div className={classes.parts}>
      <Typography variant='h2'>Запчасти для {title}</Typography>
      <div className={classes.listParts}>
        {parts && parts.map( ( item ) => (
          <div key={item.id} className={classes.listPart}>
            <Typography variant='h4'>{item.title}</Typography>
          </div>
        ) )}
      </div>
    </div>
  )
}
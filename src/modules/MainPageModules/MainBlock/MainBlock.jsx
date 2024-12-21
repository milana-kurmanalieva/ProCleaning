import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import { Typography } from '@ui/Typography/Typography'
import classes from './MainBlock.module.scss'


export const MainBlock = () => {
  const handleScrollToInnovation = ( e ) => {
    e.preventDefault()
    const element = document.getElementById( 'innovation' )
    if ( element ) {
      element.scrollIntoView( { behavior: 'smooth', block: 'start' } )
    }
  }

  return (
    <section className={classes.mainBlock}>
      <MultiContainer className={classes.mainBlockContainer}>
        <Typography variant='h1'>
          ProCleaning - Официальный дистрибьютор EUREKA в Кыргызстане
        </Typography>
        <Typography className={classes.mainDescription}>
          Мы предлагаем профессиональное клининговое оборудование итальянского производства для эффективной уборки любых помещений и территорий.
        </Typography>
        <a href='#innovation' onClick={handleScrollToInnovation}>
          <Typography variant='h3'>О EUREKA</Typography>
        </a>
      </MultiContainer>
    </section>
  )
}

import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import { Typography } from '@ui/Typography/Typography'
import classes from './Innovation.module.scss'
import Eureka from '@assets/Images/eureka.webp'

export const Innovation = () => {
  return (
    <section className={classes.innovation} id='innovation' >
      <MultiContainer className={classes.innovationContainer}>
        <div className={classes.innovationInfo}>
          <Typography variant='h2'>
            Eureka - Инновации в клининге
          </Typography>
          <Typography variant='bodyText'>
            Компания Eureka является мировым лидером в производстве профессионального клинингового оборудования. Их продукция сочетает инновационные технологии, высокую эффективность и надежность, обеспечивая отличный результат с минимальными затратами. Eureka предлагает широкий ассортимент оборудования, включая поломоечные машины и устройства для специфических нужд, таких как очистка эскалаторов, с акцентом на экологичность и экономию ресурсов.
          </Typography>
        </div>
        <div className={classes.innovationImage}>
          <img
            src={Eureka}
            alt='Eureka'
          />
        </div>
      </MultiContainer>
    </section>
  )
}

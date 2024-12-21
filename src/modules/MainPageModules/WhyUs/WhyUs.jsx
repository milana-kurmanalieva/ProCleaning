import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import classes from './WhyUs.module.scss'
import { Typography } from '@ui/Typography/Typography'
import { reasons } from '@utils/constants/constants'


export const WhyUs = () => {
  return (
    <section className={classes.whyUs}>
      <MultiContainer>
        <Typography variant='h2'>
            Почему выбирают нас
        </Typography>
        <div className={classes.cards}>
          {reasons && reasons.map( ( card, index ) => (
            <div key={index} className={classes.card}>
              {card.image}
              <Typography variant='bodyText'>
                {card.description}
              </Typography>
            </div>
          ) )}
        </div>
      </MultiContainer>
    </section>
  )
}

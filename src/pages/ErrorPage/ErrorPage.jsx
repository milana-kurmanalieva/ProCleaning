import { Typography } from '@ui/Typography/Typography'
import styles from './Error.module.scss'
import errorImg from '@assets/Images/Error.svg'
import { t } from 'i18next'
import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
export const ErrorPage = ( { error } ) => {
  return (
    <main>
      <section>
        <MultiContainer className={styles.errorPage}>
          <div className={styles.image}>
            <img src={errorImg} alt='unexpectedErrorImage' />
          </div>
          <Typography
            variant='h1'
            color='primaryDark'
            className={styles.title}
          >
            {t( 'notAvailable' )}
          </Typography>
          <Typography
            variant='bodyText'
            color='secondary'
          >
            {t( 'error' )} : {error}
          </Typography>
        </MultiContainer>
      </section>
    </main>
  )
}

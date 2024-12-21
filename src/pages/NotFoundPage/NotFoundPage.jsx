import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import { Typography } from '@ui/Typography/Typography'
import classes from './NotFound.module.scss'
import { Link } from 'react-router-dom'


export const NotFoundPage = () => {
  return (
    <main>
      <section className={classes.section}>
        <MultiContainer className={classes.center}>
          <h1 className={classes.title}>404</h1>
          <p>Страница не найдена</p>
          <Link href='/'>
            <Typography variant='h4'>Вернуться на главную</Typography>
          </Link>
        </MultiContainer>
      </section>
    </main>
  )
}
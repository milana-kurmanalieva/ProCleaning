import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import classes from './AboutUs.module.scss'
import { Typography } from '@ui/Typography/Typography'


export const AboutUs = () => {
  return (
    <section className={classes.aboutUs} id='aboutUs'>
      <MultiContainer className={classes.aboutUsContainer}>
        <Typography  variant='h2'>
            О нас и наши преимущества
        </Typography>
        <div className={classes.aboutUsContent}>
          <div className={classes.aboutUsCard}>
            <Typography variant='h3'>Кто мы</Typography>
            <Typography variant='bodyText' className={classes.aboutUsText}>
            ProCleaning - ведущий поставщик профессионального клинингового оборудования в Кыргызстане. Мы являемся официальным дистрибьютором итальянской компании EUREKA, что позволяет нам предлагать нашим клиентам высококачественную технику мирового уровня.
            </Typography>
            <Typography variant='bodyText'>
            Наша миссия - обеспечить предприятия и организации Кыргызстана самым современным и эффективным оборудованием для уборки, способствуя повышению стандартов чистоты и гигиены в стране.
            </Typography>
          </div>
          <div className={classes.aboutUsCard}>
            <Typography variant='h3'>Наш опыт</Typography>
            <Typography variant='bodyText' className={classes.aboutUsText}>
            С 2019 года мы активно занимаемся клининговым оборудованием, предоставляя решения для уборки и поддержания чистоты. С 2021 года мы стали официально предлагать продукцию от компании Eureka, одного из ведущих мировых производителей клинингового оборудования. За это время мы заслужили доверие множества компаний и организаций по всему Кыргызстану, включая крупные промышленные предприятия, государственные учреждения и частные бизнесы.
            </Typography>
            <Typography variant='bodyText'>
            Мы гордимся тем, что за годы работы смогли завоевать доверие сотен клиентов по всему Кыргызстану - от небольших компаний до крупных промышленных предприятий и государственных учреждений.
            </Typography>
          </div>
          
        </div>
      </MultiContainer>
    </section>
  )
}


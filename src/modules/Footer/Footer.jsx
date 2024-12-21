import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import classes from './Footer.module.scss'
import { Typography } from '@ui/Typography/Typography'
import { footerNav } from '@utils/constants/constants'
import { Link } from 'react-router-dom'
export const Footer = () => {

  return (
    <footer className={classes.footer} id='footer'>
      <MultiContainer>
        <div>
          <div className={classes.footerNav}>
            <ul className={classes.footerNavList}>
              <li>
                <Link to={'/'}>
                  <Typography variant='bodyText' className={classes.footerNavName}>{footerNav.name}</Typography>
                </Link>
              </li>
              <li>
                <Typography variant='bodyText' className={classes.footerNavDescription}>{footerNav.description}</Typography>
              </li>
            </ul>
            <ul className={classes.footerNavList}>
              <li>
                <Typography variant='bodyText' className={classes.footerNavName}>{footerNav.contacts.contact}</Typography>
              </li>
              <li>
                <ul>
                  <li>
                    <a href={`tel:${footerNav.contacts.tel}`}>
                      <Typography variant='bodyText' className={classes.footerNavDescription}>Телефон: {footerNav.contacts.tel}</Typography>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${footerNav.contacts.email}`}>
                      <Typography variant='bodyText' className={classes.footerNavDescription}>Email: {footerNav.contacts.email}</Typography>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className={classes.footerNavList}>
              <li>
                <Typography variant='bodyText' className={classes.footerNavName}>{footerNav.connect.follow}</Typography>
              </li>
              <li>
                <ul className={classes.icons}>
                  <li>
                    <a href={footerNav.connect.hrefToWhatsApp} target='_blank' aria-label='whatsapp'>
                      {footerNav.connect.whatsapp}
                    </a>
                  </li>
                  <li>
                    <a href={footerNav.connect.hrefToInstagram} target='_blank' aria-label='instagram'>
                      {footerNav.connect.instagram}
                    </a>
                  </li>
                  <li>
                    <a href={footerNav.connect.hrefToTelegram} target='_blank' aria-label='telegram'>
                      {footerNav.connect.telegram}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={classes.footerCopyright}>
            <Typography variant='bodyText'>© 2023 ProCleaning. Все права защищены.</Typography>
          </div>
        </div>
      </MultiContainer>
    </footer>
    
  )
}

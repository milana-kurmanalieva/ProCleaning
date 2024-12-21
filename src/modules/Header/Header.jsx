import { useState } from 'react'
import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import { Typography } from '@ui/Typography/Typography'
import classes from './Header.module.scss'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { CloseIcon } from '@assets/Icons/CloseIcon'
import { MenuIcon } from '@assets/Icons/MenuIcon'
import { headerLinks } from '@utils/constants/constants'

export const Header = () => {
  const [ isSidebarOpen, setSidebarOpen ] = useState( false )
  const navigate = useNavigate()
  const location = useLocation()

  const toggleSidebar = () => setSidebarOpen( !isSidebarOpen )

  const handleAboutUsClick = ( event ) => {
    event.preventDefault()
    if ( location.pathname !== '/' ) {
      navigate( '/' )
      setTimeout( () => {
        const aboutUsSection = document.getElementById( 'aboutUs' )
        if ( aboutUsSection ) {
          aboutUsSection.scrollIntoView( { behavior: 'smooth' } )
        }
      }, 100 )
    } else {
      const aboutUsSection = document.getElementById( 'aboutUs' )
      if ( aboutUsSection ) {
        aboutUsSection.scrollIntoView( { behavior: 'smooth' } )
      }
    }
    if ( isSidebarOpen ) {
      toggleSidebar()
    }
  }

  const handleFooterClick = ( event ) => {
    event.preventDefault()
    const footerSection = document.getElementById( 'footer' )
    if ( footerSection ) {
      footerSection.scrollIntoView( { behavior: 'smooth' } )
    }
    if ( isSidebarOpen ) {
      toggleSidebar()
    }
  }
  

  return (
    <header className={classes.header}>
      <MultiContainer className={classes.headerContainer}>
        <Link to='/'>
          <Typography variant='h2' className={classes.headerName}>
            ProCleaning
          </Typography>
        </Link>
        <nav className={classes.navDesktop}>
          <ul>
            {headerLinks.map( ( link ) => (
              <li key={link.id}>
                {link.label === 'О нас' ? (
                  <a href='#about-us' onClick={handleAboutUsClick}>
                    {link.label}
                  </a>
                ) : link.label === 'Контакты' ? (
                  <a href='#footer' onClick={handleFooterClick}>
                    {link.label}
                  </a>
                ) : (
                  <NavLink to={link.href}>
                    {link.label}
                  </NavLink>
                )}
              </li>
            ) )} 
          </ul>
        </nav>
        <button className={classes.burgerMenu} onClick={toggleSidebar} aria-label='MenuIcon'>
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </MultiContainer>
      <div
        className={`${classes.sidebar} ${
          isSidebarOpen ? classes.sidebarOpen : classes.sidebarClosed
        }`}
      >
        <button className={classes.closeButton} onClick={toggleSidebar}>
          <CloseIcon />
        </button>
        <nav>
          <ul>
            {headerLinks.map( ( link ) => (
              <li key={link.id}>
                {link.label === 'О нас' ? (
                  <a href='#about-us' onClick={handleAboutUsClick}>
                    {link.label}
                  </a>
                ) : link.label === 'Контакты' ? (
                  <a href='#footer' onClick={handleFooterClick}>
                    {link.label}
                  </a>
                ) : (
                  <NavLink to={link.href} onClick={toggleSidebar}>
                    {link.label}
                  </NavLink>
                )}
              </li>
            ) )} 
          </ul>
        </nav>
      </div>
    </header>
  )
}


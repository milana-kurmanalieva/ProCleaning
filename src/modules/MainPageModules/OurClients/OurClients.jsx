import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import classes from './OurClients.module.scss'
import { Typography } from '@ui/Typography/Typography'
import { useMediaQuery } from '@utils/hooks/useMediaQuery'
import { useEffect } from 'react'
import { useMainStore } from '@store/useMainSore'


export const OurClients = () => {
  const { clients, loading, getClients } = useMainStore()

  const isMobile = useMediaQuery( '(max-width: 400px)' )
  const clientItems = [ ...clients, ...clients ]

  const half = Math.ceil( clientItems.length / 2 )
  const firstSliderItems = clientItems.slice( 0, half )
  const secondSliderItems = clientItems.slice( half )
  
  useEffect( () => {
    getClients()
  }, [ getClients ] )

  if ( !loading ) return

  return (
    <section className={classes.ourClients}>
      <MultiContainer>
        <Typography variant='h2'>Наши довольные клиенты</Typography>
        {isMobile ? (
          <>
            <div className={classes.ourClientsWrapper}>
              <div
                className={`${classes.ourClientsTrack} ${classes.firstTrack}`}
                style={{
                  animationDuration: `${firstSliderItems.length * 2}s`,
                }}
              >
                {firstSliderItems.map( ( client, index ) => (
                  <div key={index} className={classes.client}>
                    <div className={classes.clientLogo}>
                      <img src={client.picture} alt={client.title} />
                    </div>
                    <Typography variant='h3' truncate='30'>{client.title}</Typography>
                  </div>
                ) )}
              </div>
            </div>
            <div className={classes.ourClientsWrapper}>
              <div
                className={`${classes.ourClientsTrack} ${classes.secondTrack}`}
                style={{
                  animationDuration: `${secondSliderItems.length * 2}s`,
                }}
              >
                {secondSliderItems.map( ( client, index ) => (
                  <div key={index} className={classes.client}>
                    <div className={classes.clientLogo}>
                      <img src={client.picture} alt={client.title} />
                    </div>
                    <Typography variant='h3' truncate='30'>{client.title}</Typography>
                  </div>
                ) )}
              </div>
            </div>
          </>
        ) : (
          <div className={classes.ourClientsWrapper}>
            <div
              className={classes.ourClientsTrack}
              style={{
                animationDuration: `${clientItems.length * 2}s`,
              }}
            >
              {clientItems.map( ( client, index ) => (
                <div key={index} className={classes.client}>
                  <div className={classes.clientLogo}>
                    <img src={client.picture} alt={client.title} />
                  </div>
                  <Typography variant='h3' truncate='30'>{client.title}</Typography>
                </div>
              ) )}
            </div>
          </div>
        )}
      </MultiContainer>
    </section>
  )
}
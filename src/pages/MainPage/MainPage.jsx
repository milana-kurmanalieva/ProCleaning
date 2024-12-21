import { AboutUs } from '@modules/MainPageModules/AboutUs/AboutUs'
import { Innovation } from '@modules/MainPageModules/Inovation/Innovation'
import { MainBlock } from '@modules/MainPageModules/MainBlock/MainBlock'
import { OurCategories } from '@modules/MainPageModules/OurCategories/OurCategories'
import { OurClients } from '@modules/MainPageModules/OurClients/OurClients'
import { WhyUs } from '@modules/MainPageModules/WhyUs/WhyUs'
import { Helmet } from 'react-helmet-async'

export const MainPage = () => {

  return (
    <main>
      <Helmet>
        <title>Pro Cleaning</title>
      </Helmet>
      <MainBlock/>
      <OurCategories/>
      <AboutUs/>
      <WhyUs/>
      <Innovation/>
      <OurClients/>
    </main>
  )
}

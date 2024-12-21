import { Car } from '@assets/Icons/Car'
import { Done } from '@assets/Icons/Done'
import { Instagram } from '@assets/Icons/Instagram'
import { Pen } from '@assets/Icons/Pen'
import { Settings } from '@assets/Icons/Settings'
import { Telegram } from '@assets/Icons/Telegram'
import { WhatsApp } from '@assets/Icons/WhatsApp'
import EurekaCategories from '@assets/Images/eurekas.webp'
import OtherCategories from '@assets/Images/other.webp'


export const BASE_URL = import.meta.env.VITE_API_URL


export const Path = { 
  main: '/', 
  categories: '/categories',
  subCategories: '/subcategories',
  catalog: '/catalog',
  eureka: '/eureka',
  other: '/other',
  eurekaCatalog: 'eureka/eureka-catalog/:id',
  eurekaProduct: 'eureka/eureka-catalog/:id/machines/:productId/',
  otherProduct: 'other/:productId/',
}

export const headerLinks = [
  { id: 1, label: 'Главная', href: Path.main },
  { id: 2, label: 'Категории', href: Path.categories },
  { id: 3, label: 'О нас', href: Path.main },
  { id: 4, label: 'Контакты', href: '#footer' },
]

export const footerNav = {
  name: 'ProCleaning',
  description: 'Ваш надежный поставщик клинингового оборудования',
  contacts: {
    contact: 'Контакты',
    tel: '+996703813814',
    email: 'Tcl82@mail.ru',
  },
  connect: {
    follow: 'Следите за нами',
    whatsapp: <WhatsApp/>,
    instagram: <Instagram/>,
    telegram: <Telegram/>,
    hrefToWhatsApp: ' https://wa.me/+996703813814',
    hrefToTelegram: ' https://t.me/+996703813814',
    hrefToInstagram: 'https://www.instagram.com/procleaning.kg/'
  }
}

export const reasons = [
  { image: <Done/>, description: 'Широкий ассортимент профессионального оборудования' },
  { image: <Settings/> ,description: 'Сервисное обслуживание' },
  { image: <Car/>,description: 'Оперативное гарантийное и постгарантийное обслуживание' },
  { image: <Pen/>,description: 'Профессиональная консультация и подбор оборудования' },
]


export const categories = [
  { image: EurekaCategories, title: 'Оборудование от EUREKA', description: 'Профессиональное оборудование от ведущего производителя. EUREKA предлагает инновационные решения для эффективной уборки различных помещений и поверхностей.', href: Path.eureka , class: '' },
  { image: OtherCategories, title: 'Другое оборудование', description: 'Широкий выбор клинингового оборудования различных брендов. От поломоечных машин до пылесосов - у нас есть все необходимое для профессиональной уборки.', href: Path.other, class: 'secondCategory' }
]
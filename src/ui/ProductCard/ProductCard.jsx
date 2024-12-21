import { Typography } from '@ui/Typography/Typography'
import classes from './ProductCard.module.scss'
import { Slider } from '@ui/Slider/Slider'
import { Weight } from '@assets/Weight'
import { Productivity } from '@assets/Icons/Productivity'
import { Speed } from '@assets/Icons/Speed'
import { Volume } from '@assets/Icons/Volume'
import { Cleaning } from '@assets/Icons/Cleaning'
import { useState } from 'react'
import { Modal } from '@ui/Modal/Modal'


export const ProductCard = ( props ) => {
  const {
    images,
    productName,
    isEureka,
    inStock,
    weight,
    productivity,
    forwardSpeed,
    tank_volume,
    cleaning_path,
    characteristics
  } = props

  const imagesList = images && images.map( ( image ) => image.photo )
  const [ isOpen, setIsOpen ] = useState( false )

  const characters = [
    {
      title: 'Вес',
      value: weight,
      icon: <Weight/>,
      count: 'кг'
    },
    {
      title: 'Производительность',
      value: productivity,
      icon: <Productivity/>,
      count: 'м²/час',
      do: 'до'
    },
    {
      title: 'Скорость',
      value: forwardSpeed,
      icon: <Speed/>,
      count: 'км/ч',
      do: 'до'
    },
    {
      title: 'Объем бака',
      value: tank_volume,
      icon: <Volume/>,
      count: 'л'
    },
    {
      title: 'Ширина уборки',
      value: cleaning_path,
      icon: <Cleaning/>,
      count: 'см'
    }
  ]

  return (
    <div className={classes.productCard}>
      <div className={classes.images}>
        <Slider images={imagesList} />
      </div>
      <div className={classes.productInfo}>
        <Typography variant='h3'>{productName}</Typography>
        <div className={classes.character}>
          <Typography variant='h4'>Характеристики: </Typography>
          <ul className={classes.characterList}>
            {isEureka ? (
              characters?.map( ( item, index ) => (
                <li key={index}>
                  {item.icon}
                  <Typography 
                    variant='h5'
                    weight='semibold'
                  >{item.title}: </Typography><Typography variant='h5' weight='regular'>{item?.do} {item.value} {item.count}</Typography> 
                </li>
              ) )
            ) : (
              characteristics?.map( ( item, index ) => (
                <li key={index}> 
                  <Typography 
                    variant='h5'
                    weight='semibold'
                  >{item}</Typography></li>
              ) )
            )}
          </ul>
        </div>
        <div className={classes.connect}>
          <Typography variant='p'> 
            <Typography variant='h5'
              weight='semibold'
            > Наличие: 
            </Typography>{inStock ? 'В наличии' : 'Нет в наличии'}</Typography>
          <button onClick={() => setIsOpen( true )}><Typography variant='h5'>Связаться</Typography></button>
        </div>
      </div>
      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen( false )} />}
    </div>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import './Slider.scss'
import DefaultImage from '@assets/Images/defaultImage.webp'

export const Slider = ( { images } ) => {
  const handleImageError = ( e ) => {
    e.target.src = DefaultImage
  }

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[ Navigation, Pagination, Mousewheel, Keyboard ]}
      className='mySwiper'
    >
      {images && images.length > 0 ? (
        images.map( ( image, index ) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} onError={handleImageError} />
          </SwiperSlide>
        ) )
      ) : (
        <SwiperSlide>
          <img src={DefaultImage} alt='Default slide' />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

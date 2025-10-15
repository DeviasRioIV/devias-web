// External Modules
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Banner from 'Components/Banner/Banner';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Internal Modules
import './SwipeBanner.scss'

export default function SwipeBanner({ banners, autoplay = true, delay = 5000}) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{
          clickable: true,
        }}
      navigation={true}
      className="swipe-banner"
    >
      {banners?.map((banner, index) => (
        <SwiperSlide key={index}>
          <Banner
            backgroundImg={banner.desktop_url}
            mobileBackgroundImg={banner.mobile_url}
            title={banner.title}
            subTitle={banner.description}
            content={banner.content} 
            decorations={banner.decorations}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

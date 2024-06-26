import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import { useResponsive } from '@/hooks/useResponsive'
import { MovieCard } from '@/components/movie-card'

type Props = {
  movies: any
  className?: string
}

const Carousel = ({ movies, className = 'netflix-swiper' }: Props) => {
  const { isMobile } = useResponsive()
  return (
    <Swiper
      slidesPerView={isMobile ? 2 : 8}
      spaceBetween={10}
      slidesPerGroup={2}
      className={className}
      modules={[Pagination, Navigation]}
      pagination={{
        clickable: true
      }}
      navigation={true}
    >
      {movies.map(
        (movie: {
          mediumCoverImage: string
          title: string
          slug: string
          year: any
          largeCoverImage: string
          id: string
        }) => (
          <SwiperSlide
            className={!isMobile ? 'carousel-slide' : ''}
            key={movie.id}
          >
            <MovieCard {...movie} />
          </SwiperSlide>
        )
      )}
    </Swiper>
  )
}

export default Carousel

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';


const Slider = () => {
  SwiperCore.use([Autoplay])
  return (
    <>
        <div className="slider-container">
          <Swiper
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000
            }}
          >
            <SwiperSlide>
              <div className="slider">
                <div className="slider-image">
                  <div className="slider-image-wrapper">
                    <img src="https://images.pexels.com/photos/12349053/pexels-photo-12349053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                </div>
                <div className="slider-title">
                  <a href="/posts/post">Headsets are better if you're playing</a>
                  <span>5 MONTHS AGO</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider">
                <div className="slider-image">
                  <div className="slider-image-wrapper">
                    <img src="https://images.pexels.com/photos/9125018/pexels-photo-9125018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                </div>
                <div className="slider-title">
                  <a href="/posts/post">Headsets are better if you're playing</a>
                  <span>5 MONTHS AGO</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slider">
                  <div className="slider-image">
                    <div className="slider-image-wrapper">
                      <img src="https://images.pexels.com/photos/12337034/pexels-photo-12337034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                  </div>
                  <div className="slider-title">
                    <a href="/posts/post">Headsets are better if you're playing</a>
                    <span>5 MONTHS AGO</span>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider">
                <div className="slider-image">
                  <div className="slider-image-wrapper">
                    <img src="https://images.pexels.com/photos/9125018/pexels-photo-9125018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                </div>
                <div className="slider-title">
                  <a href="/posts/post">Headsets are better if you're playing</a>
                  <span>5 MONTHS AGO</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default Slider

'use client'
import { LandmarkCardProps } from "@/utils/types"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
    return (
        <div>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    landmarks.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="group">
                                <div
                                    className="relative rounded-lg overflow-hidden"
                                >

                                    <img
                                        className="w-full h-[600px] object-cover brightness-75 group-hover:brightness-50 transition-all duration-100"
                                        src={item.image} />

                                </div>
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </div>
    )
}
export default Hero
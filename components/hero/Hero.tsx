'use client'
import { LandmarkCardProps } from "@/utils/types"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Otherinfo from "./Otherinfo";

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
                                <div className="absolute bottom-0 left-0 z-50">
                                    <div
                                        className="col-span-4 mb-4 flex h-full flex-1 justify-end px-5 md:mb-4 md:justify-end md:px-10"
                                    >
                                        <Otherinfo landmark={item} />
                                    </div>

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
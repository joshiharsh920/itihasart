import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
const Gallery = () => {
    const images = [
        "/images/img1.jpg",
        "/images/img2.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
    ];

    return (
        <div className="container mx-auto px-6 py-8 text-center">

            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
                className="mb-10"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt="gallery"
                            className="w-full h-64 object-cover rounded-xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 🔥 Image Grid Below */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="gallery"
                        className="w-full h-40 object-cover rounded-lg hover:scale-105 transition-transform"
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
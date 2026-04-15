import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Gallery = () => {
    const images = [
        "/images/img1.jpg",
        "/images/img2.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
    ];

    const images2 = [
        "/images/img5.jpg",
        "/images/img6.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
    ];


    return (
        <div className="container mx-auto px-6 py-8 text-center">

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                grabCursor={true}
                spaceBetween={20}
                className="mb-10 w-full"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[350px] md:h-[450px] bg-black/5 flex items-center justify-center rounded-xl overflow-hidden">
                            <img
                                src={img}
                                alt="gallery"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* 🔥 Image Grid Below */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="h-60 bg-black/5 rounded-lg overflow-hidden flex items-center justify-center"
                    >
                        <img
                            src={img}
                            alt="gallery"
                            loading="lazy"
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
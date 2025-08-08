import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const techLogos = [
    { name: "Ruby", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Rails", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Bitbucket", img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/bitbucket.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonwebservices.svg" },
];

function TechCarousel() {
    return (
        <div className="my-8">
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 2000 }}
                modules={[Autoplay]}
                breakpoints={{
                    640: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {techLogos.map((tech, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center transition-transform hover:scale-110 duration-300">
                            <img
                                src={tech.img}
                                alt={tech.name}
                                className="w-16 h-16 object-contain mb-2"
                            />
                            <span className="text-sm">{tech.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default TechCarousel;

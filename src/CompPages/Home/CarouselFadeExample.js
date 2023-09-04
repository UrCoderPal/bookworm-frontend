import React from "react";
import Carousel from "react-bootstrap/Carousel";

export function CarouselFadeExample() {
    return (
        <Carousel fade className="Carousel" autoPlay={true} interval={2000} infiniteLoop={true}>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"Images/Slideshow/1img.jpg"}
                    alt='First slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"Images/4Book (2).jpg"}
                    alt='First slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"/Images/5Book.jpg"}
                    alt='First slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"Images/Slideshow/ebook8.jpg"}
                    alt='First slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
);
}
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Hero = () => {
    return (
        <Splide
        options={ {
            rewind: true,
            gap   : '1rem',
            autoplay     : true,
        } }
        >
        <SplideSlide>
            <img src="https://shapedplugin.com/wp-content/uploads/2017/11/WooCommerce-Product-Slider-Pro-Review-SP.png" alt="1"/>
        </SplideSlide>
        <SplideSlide>
            <img src="https://docs.yithemes.com/themes/globe/library/images/08-products_slider.jpg" alt="2"/>
        </SplideSlide>
        <SplideSlide>
            <img src="https://wpmissing.com/wp-content/uploads/2018/10/Carousel-Slider.jpg" alt="3"/>
        </SplideSlide>
        </Splide>
    );
}








export default Hero

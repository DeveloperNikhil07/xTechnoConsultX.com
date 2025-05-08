"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
const GetImages = process.env.NEXT_PUBLIC_IMAGE_UR

export default function PortfolioLayout() {

    const SliderSetting = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autplaySpeed:1000,
        autoplay:true,
        responsive: [
            {
                breakpoint: 767,
                settings: { dots: true, arrows: false },
            },
        ],
    }
    return (
        <>
            <section className='portfolio-wrapper py section-bg-gray'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='portfolio-content section-title text-center'>
                                <span className='subtitle'>Portfolio</span>
                                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='slider-wrapper'>
                            <Slider {...SliderSetting}>
                                <div data-aos={"slide-up"} data-aos-delay="100" className='slider-card border flex-column flex-lg-row rounded gap-3 d-flex align-item-center mt-5 align-items-center'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='whoweare-image rounded'>
                                            <Image src={`${GetImages}/assets/images/banner-image.jpg`} alt='Portfolio Image' priority height={500} width={600} />
                                        </div>
                                    </div>
                                    <div className='col-12 mt-lg-0 col-lg-6'>
                                        <div className='p-3 p-lg-0 card-content section-title'>
                                            <p className='pb-4'>Category</p>
                                            <h3>Dave Financial CRM</h3>
                                            <p className='portfolio-dec py-3'>Embark on a journey through our narrative, where innovation meets purpose.</p>
                                            <p className='pb-2 pt-3'>Technology</p>
                                            <ul className='technology-item mb-5 d-flex align-items-center gap-3 gap-md-5 mt-4'>
                                                <li><Image src={`${GetImages}/assets/images/html.svg`} alt='icon' height={34} width={34} priority /></li>
                                                <li><Image src={`${GetImages}/assets/images/css.svg`} alt='icon' height={34} width={34} priority /></li>
                                                <li><Image src={`${GetImages}/assets/images/wordpress.svg`} alt='icon' height={34} width={34} priority /></li>
                                            </ul>
                                            <Link href="#" className='cm-button'>View And Read <FontAwesomeIcon icon={faArrowRight} className='ms-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Row 2 */}
                                <div data-aos={"slide-up"} data-aos-delay="100" className='slider-card border flex-column flex-lg-row rounded gap-3 d-flex align-item-center mt-5 align-items-center'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='whoweare-image rounded'>
                                            <Image src={`${GetImages}/assets/images/banner-image.jpg`} alt='Portfolio Image' priority height={500} width={600} />
                                        </div>
                                    </div>
                                    <div className='col-12 mt-lg-0 col-lg-6'>
                                        <div className='p-3 p-lg-0 card-content section-title'>
                                            <p className='pb-4'>Category</p>
                                            <h3>Dave Financial CRM</h3>
                                            <p className='portfolio-dec py-3'>Embark on a journey through our narrative, where innovation meets purpose.</p>
                                            <p className='pb-2 pt-3'>Technology</p>
                                            <ul className='technology-item mb-5 d-flex align-items-center gap-3 gap-md-5 mt-4'>
                                                <li><Image src={`${GetImages}/assets/images/html.svg`} alt='icon' height={34} width={34} priority /></li>
                                                <li><Image src={`${GetImages}/assets/images/css.svg`} alt='icon' height={34} width={34} priority /></li>
                                                <li><Image src={`${GetImages}/assets/images/wordpress.svg`} alt='icon' height={34} width={34} priority /></li>
                                            </ul>
                                            <Link href="#" className='cm-button'>View And Read <FontAwesomeIcon icon={faArrowRight} className='ms-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Row 3 */}
                                <div data-aos={"slide-up"} data-aos-delay="100" className='slider-card border flex-column flex-lg-row rounded gap-3 d-flex align-item-center mt-5 align-items-center'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='whoweare-image rounded'>
                                            <Image src={`${GetImages}/assets/images/banner-image.jpg`} alt='Portfolio Image' priority height={500} width={600} />
                                        </div>
                                    </div>
                                    <div className='col-12 mt-lg-0 col-lg-6'>
                                        <div className='p-3 p-lg-0 card-content section-title'>
                                            <p className='pb-4'>Category</p>
                                            <h3>Dave Financial CRM</h3>
                                            <p className='portfolio-dec py-3'>Embark on a journey through our narrative, where innovation meets purpose.</p>
                                            <p className='pb-2 pt-3'>Technology</p>
                                            <ul className='technology-item mb-5 d-flex align-items-center gap-3 gap-md-5 mt-4'>
                                                <li><Image src={`${GetImages}/assets/images/html.svg`} alt='icon' height={34} width={34} priority /></li>
                                                <li><Image src={`${GetImages}/assets/images/css.svg`} alt='icon' height={34} width={34} priority /></li>
                                                <li><Image src={`${GetImages}/assets/images/wordpress.svg`} alt='icon' height={34} width={34} priority /></li>
                                            </ul>
                                            <Link href="#" className='cm-button'>View And Read <FontAwesomeIcon icon={faArrowRight} className='ms-3' /></Link>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

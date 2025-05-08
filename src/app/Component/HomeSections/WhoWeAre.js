
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const GetImages = process.env.NEXT_PUBLIC_IMAGE_UR

export default function WhoWeAre() {
    return (
        <>
            <section className='who-we-are-wrapper pt'>
                <div className='container'>
                    <div data-aos={"zoom-in"} data-aos-delay="100" className='row'>
                        <div className='col-12 text-center section-title'>
                            <span className='subtitle'>Who We Are</span>
                            <h2>Crafting Futures with Excellence.</h2>
                        </div>
                    </div>
                    <div className='row mt-5 align-items-center'>
                        <div data-aos={"slide-up"} data-aos-delay="200" className='col-12 col-md-6'>
                            <div className='whoweare-image rounded'>
                                <Image src={`${GetImages}/assets/images/banner-image.jpg`} alt='' unoptimized height={500} width={600} />
                            </div>
                        </div>
                        <div data-aos={"slide-up"} data-aos-delay="400" className='col-12 mt-4 mt-md-0 col-md-6'>
                            <div className='whoweare-content section-title'>
                                <h3>Empowering Progress: Our Story, Your Journey, Shared Excellence.</h3>
                                <p>Embark on a journey through our narrative, where innovation meets purpose.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p>
                                <Link href="#" className='cm-button'>Who We Are <FontAwesomeIcon icon={faArrowRight} className='ms-3'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

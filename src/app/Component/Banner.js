import React from 'react'

const GetImages = process.env.NEXT_PUBLIC_IMAGE_UR;


export default function Banner() {
    return (
        <>
            <section className='banner-wrapper'>
                <div className="banner-video">
                    <video width={1920} height={780}
                        autoPlay
                        muted
                        playsInline
                        loop>
                        <source src={`${GetImages}/assets/video/banner.mp4`} type='video/mp4' />
                    </video>
                </div>
            </section>
        </>
    )
}

"use client"
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'
const GetImagesByUrl = process.env.NEXT_PUBLIC_IMAGE_UR;


export default function Header() {

    return (
        <>
            <header className='header'>
                <div className="header-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-7 col-sm-6 col-md-3">
                                <div className="logo">
                                    <Link href={`/`} className='d-inline-block'>
                                        <Image
                                            src={`${GetImagesByUrl}/assets/images/dark-logo.svg`}
                                            alt="Logo"
                                            height={70}
                                            width={200}
                                            priority
                                        />


                                    </Link>
                                </div>
                            </div>
                            <div className='col-5 col-sm-6 col-md-9'>
                                <Navbar />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

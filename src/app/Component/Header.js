"use client"
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'
const GetImagesByUrl = process.env.NEXT_PUBLIC_IMAGE_UR;
import { useEffect, useState } from 'react';
import { GetWebsiteData } from '@/app/api/WBGlobalDataApi/WbGlobalData';

export default function Header() {
    const [websiteData, setWebsiteData] = useState();
    const WebsiteDataApi = async () => {
        try {
            const headerResponse = await GetWebsiteData();
            setWebsiteData(headerResponse?.header);
        } catch (error) {
            console.error("Error fetching website data:", error);
        }
    }
    useEffect(() => {
        WebsiteDataApi();
    }, []);
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
                                            src={`${GetImagesByUrl}/assets/images/${websiteData?.dark_logo}`}
                                            alt="Logo"
                                            height={70}
                                            width={200}
                                            unoptimized={true}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className='col-5 col-sm-6 col-md-9'>
                                <Navbar websiteData={websiteData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

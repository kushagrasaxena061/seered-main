'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Hero = () => {
    const router = useRouter()
    return (
        <div>
            <div className="pb-6 sm:pb-8 lg:pb-12">
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link href="/">
                            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                <Image src="/images/logo.png" alt="no logo" width={100} height={100} />
                            </div>
                        </Link>
                        <nav className="md:ml-auto md:flex flex-wrap items-center text-base justify-center">
                            <Link href="/about">
                            <div className="mr-5 md:inline hidden hover:bg-red-600 hover:text-white p-4 rounded-lg text-red-500 text-sm font-bold">About</div>
                            </Link>
                            <Link href="/contact">
                            <div className="mr-5 md:inline hidden hover:bg-red-600 hover:text-white p-4 rounded-lg text-red-500 text-sm font-bold">Contact</div>
                            </Link>
                        </nav>
                        <button onClick={() => router.push('/auth')} className="hidden md:inline items-center  bg-red-600 border-0 p-4 focus:outline-none hover:bg-red-500 rounded-lg text-sm text-white font-bold mt-4 md:mt-0">Log In
                        </button>
                       
                    </div>
                </header>
                <section className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-3">
                    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
                            <h1 className="text-red-600 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">Where Melodies lies,<br />NFTs Reside</h1>
                            <p className="max-w-md leading-relaxed text-white xl:text-lg">Embark on a musical journey like never before. Explore, buy, sell, and trade NFTs while enjoying your favorite tunes.</p>
                        </div>
                        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                            <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
                                <Image src="/images/main-1.jpg" width={500} height={500} alt="no main-1"/>
                            </div>
                            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                            <Image src="/images/main-2.jpg" width={500} height={500} alt="no main-1"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero

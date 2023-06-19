import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu}  from "react-icons/ai"


const Hero = () => {
    return (
        <div>
            <div className="pb-6 sm:pb-8 lg:pb-12">
                <header className="mb-8 ">
                    <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
                        <Link href="/">
                            <div className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
                                <Image src="/images/logo.png" width={100} height={100} alt="No logo" />
                            </div>
                        </Link>
                        <div className="flex">
                            <a href="#" className="h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
                                <span className="hidden md:inline text-xs font-semibold text-gray-500 sm:block">Wishlist</span>
                            </a>
                            <a href="#" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                                <span className="hidden md:inline text-xs font-semibold text-gray-500 sm:block">Account</span>
                            </a>
                            <a href="#" className=" flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                                <span className="hidden md:inline text-xs font-semibold text-gray-500 sm:block">Cart</span>
                            </a>
                            <button type="button" className="rounded-lg mt-2 flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 sm:hidden">
                                <span className="inline sm:hidden text-xs font-semibold text-gray-500 ">Menu</span>
                            </button>
                        </div>
                    </div>
                </header>
                <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
                            <h1 className="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">Find your<br />style online</h1>
                            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
                        </div>
                        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                            <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
                                <img src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
                            </div>

                            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero
import React from 'react'
import Image from 'next/image'


export default function Delete() {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gradient-to-t from-black from-10%  to-zinc-900 to-100%
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height={100}
          width={100}
          className="mx-auto w-auto"
          src="/images/logo2.png"
          alt="No Logo"
        />
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-white
          "
          >
            Log in to your account
        </h2>
      </div>
  </div>
  )
}

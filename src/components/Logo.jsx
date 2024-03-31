import React from 'react'
import logo from "../assets/images/logo.png"
export const Logo = () => {
  return (
    <div className=' my-6 mx-6 xl:w-[450px] xl:mx-10  lg:w-[400px] md:w-[350px]  sm:w-[300px]  w-[250px]'>
      <img src={logo} alt="" />
    </div>
  )
}

import React from 'react'
import Avatar from '../assets/image-jeremy.png'

export default function Profile() {
  return <section className={section}>
    <div className={div1}>
      <div className={divImg}>
        <img src={Avatar} alt="jeremy" />
      </div>

      <div>
        <p className={divp}>Report for</p>
        <h2 className={divh2}>Jeremy Robson</h2>
      </div>
    </div>

    <div className={div2}>
      <button className={div2p}>Daily</button> 
      <button className={div2p}>Weekly</button> 
      <button className={div2p}>Monthly</button> 
    </div>
  </section>
}

const section = 'flex flex-col max-w-xl mx-auto p-5 place-items-center'

const div1 = 'flex items-center md:flex-col md:w-60 md:h-80 gap-5 py-5 px-7 rounded-2xl bg-naturalBlue z-30 top-20 absolute'
const divImg = 'w-20 h-20 border-2 border-[#eee] rounded-full'

const divp = 'font-rb text-paleBlue text-sm md:text-lg'
const divh2 = 'font-rb text-xl md:text-4xl'


const div2 = 'bg-darkBlue text-paleBlue rounded-b-xl md:w-60 flex md:flex-col px-[31px] gap-10 z-10 absolute top-[190px] md:top-[390px] text-lg py-7 px-9'
const div2p = 'hover:text-[#eee] outline-none'

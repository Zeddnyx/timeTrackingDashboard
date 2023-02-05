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

const section = 'max-w-xs bg-darkBlue w-full h-56 xl:w-60 xl:h-[545px] rounded-xl mt-20 flex flex-col mx-auto place-items-center'

const div1 = 'flex items-center xl:items-start w-full xl:flex-col xl:w-60 xl:h-80 gap-5 py-5 px-7 rounded-2xl bg-naturalBlue z-30 top-20 '
const divImg = 'w-20 h-20 border-2 border-[#eee] rounded-full'

const divp = 'font-rb text-paleBlue text-sm xl:text-lg'
const divh2 = 'font-rb text-xl xl:text-4xl'


const div2 = 'xl:items-start w-[300px] text-paleBlue rounded-b-xl xl:w-60 flex xl:flex-col px-[31px] gap-10 z-10 top-[190px] xl:top-[390px] text-lg py-7 px-9'
const div2p = 'hover:text-[#eee] outline-none'

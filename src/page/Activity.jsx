export default function Activity({img, title, hours, time, color}) {

  return <section className={`${section} ${color}`}>
    <div className={divBg}>
      <img src={img} alt='work' />
    </div>

    <div className={div2}>
      <div className={divWork}>
        <h4>{title}</h4>
        <button className={workBtn}>. . .</button>
      </div>

      <div className={divHrs}>
        <h2 className={divh2}>{hours}</h2>
        <p className={divp}>{time}</p>
      </div>
    </div>
  </section>
}

const section = 'relative max-w-xl mx-auto h-40 border z-10 rounded-xl'

const divBg = 'pl-[230px] z-10 relative'

const div2 = 'w-full absolute top-10 rounded-xl bg-darkBlue z-30 px-5 py-6 hover:bg-naturalBlue'
const divWork = 'flex justify-between my-1 items-center font-extrabold'
const workBtn = 'text-2xl outline-none cursor-pointer'

const divHrs = 'flex justify-between items-center xl:h-[100px] xl:flex-col xl:items-start xl:mt-5'
const divh2 = 'text-3xl xl:text-5xl font-rb font-light'
const divp = 'text-paleBlue font-rb text-sm'

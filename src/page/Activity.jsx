export default function Activity({img, title, hours, time, color}) {

  return <section className={section}>
    <div className={`${divBg} ${color}`}>
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

const section = 'relative  max-w-xl mx-auto -mb-[300px] ml-5'

const divBg = 'w-[319px] lg:w-60 h-20 pl-60 mx-auto rounded-xl z-10 mt-80'

const div2 = 'w-80 lg:w-60 mx-auto max-w-xl bg-darkBlue rounded-xl z-30 px-5 py-5'
const divWork = 'flex justify-between my-1 items-center font-extrabold'
const workBtn = 'text-2xl outline-none'

const divHrs = 'flex justify-between items-center mx-auto max-w-xl lg:h-[100px] lg:flex-col lg:items-start lg:mt-5'
const divh2 = 'text-3xl lg:text-5xl font-rb font-light'
const divp = 'text-paleBlue font-rb text-sm'

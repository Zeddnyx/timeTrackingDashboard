export default function Activity({img, title, hours, time}) {

  return <section className={section}>
    <div className={divBg}>
      <img src={img} alt='work' />
    </div>

    <div className={div2}>
      <div className={divWork}>
        <h4>{title}</h4>
        <button className={workBtn}>...</button>
      </div>

      <div className={divHrs}>
        <h2 className={divh2}>{hours}</h2>
        <p className={divp}>{time}</p>
      </div>
    </div>
  </section>
}

const section = 'relative max-w-xl mx-auto'

const divBg = 'bg-softOrange w-[319px] pl-60 mx-auto rounded-t-xl mt-80'

const div2 = 'w-80 mx-auto max-w-xl bg-darkBlue rounded-xl px-5 py-7 absolute top-[60px] left-10'
const divWork = 'flex justify-between my-3 items-center font-extrabold'
const workBtn = 'text-2xl outline-none'

const divHrs = 'flex justify-between items-center mx-auto max-w-xl'
const divh2 = 'text-4xl font-rb font-light'
const divp = 'text-paleBlue font-rb text-sm'

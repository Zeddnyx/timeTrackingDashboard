import React from 'react'
import Profile from './page/Profile'
import Activity from './page/Activity'
import Work from './assets/icon-work.svg'
import Play from './assets/icon-play.svg'
import Study from './assets/icon-study.svg'
import Exerc from './assets/icon-exercise.svg'
import Social from './assets/icon-social.svg'
import Self from './assets/icon-self-care.svg'

function App() {

  return <div className={div}>
    <Profile />
    <div className={div1}>
      <Activity img={Work}   title='Work'      hours='32hrs' time='Last Week - 36hrs' color='bg-lightRed' />
      <Activity img={Play}   title='Play'      hours='10hrs' time='Last Week - 8hrs'  color='bg-softBlue' />
      <Activity img={Study}  title='Study'     hours='4hrs'  time='Last Week - 7hrs'  color='bg-redStudy' />
      <Activity img={Exerc}  title='Exercise'  hours='4hrs'  time='Last Week - 5hrs'  color='bg-limeGreen' />
      <Activity img={Social} title='Social'    hours='5hrs'  time='Last Week - 10hrs' color='bg-darkViolet' />
      <Activity img={Self}   title='Self Care' hours='2hrs'  time='Last Week - 2hrs'  color='bg-softOrange' />
    </div>
  </div>
}

const div = 'flex flex-col lg:flex-row mx-auto max-w-7xl top-0 relative'
const div1 = 'grid grid-cols-1 lg:grid-cols-3 mx-auto'

export default App

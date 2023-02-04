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
    <div>
      <Activity img={Work}   title='Work' hours='32hrs' time='Last Week - 36hrs' />
      <Activity img={Play}   title='Play' hours='10hrs' time='Last Week - 8hrs' />
      <Activity img={Study}  title='Study' hours='4hrs' time='Last Week - 7hrs' />
      <Activity img={Exerc}  title='Exercise' hours='4hrs' time='Last Week - 5hrs' />
      <Activity img={Social} title='Social' hours='5hrs' time='Last Week - 10hrs' />
      <Activity img={Self}   title='Self Care' hours='2hrs' time='Last Week - 2hrs' />
    </div>
  </div>
}

const div = 'grid grid-cols-1 md:grid-cols-2'

export default App

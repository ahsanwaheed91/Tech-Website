import React from 'react'
import HeroApp from '../home/Hero'
import AppAbout from '../home/About'
import AppFeature from '../home/Feature'
import AppFaq from '../home/Faq'

const AppHome = () => {
  return (
<div className="main">
    <HeroApp/>
    <AppAbout/>
    <AppFeature/>
    <AppFaq/>

</div>
)
}

export default AppHome
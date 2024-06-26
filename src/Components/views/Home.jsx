import React from 'react'
import HeroApp from '../home/Hero'
import AppAbout from '../home/About'
import AppFeature from '../home/Feature'
import AppFaq from '../home/Faq'
import PricingApp from '../home/Pricing'
import ContactApp from '../home/Contact'

const AppHome = () => {
  return (
<div className="main">
    <HeroApp/>
    <AppAbout/>
    <AppFeature/>
    <AppFaq/>
    <PricingApp/>
    <ContactApp/>

</div>
)
}

export default AppHome
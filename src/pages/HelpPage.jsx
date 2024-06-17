import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Help from '../components/Help/Help'

function HelpPage() {
  return (
    <>
        <Header />
        <Help />
        <Footer absolute={true}/>
    </>
  )
}

export default HelpPage;
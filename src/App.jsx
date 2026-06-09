import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Hero />
        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

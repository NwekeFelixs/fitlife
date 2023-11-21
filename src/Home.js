import React from 'react'
import Header from './components/fragments/Header'
import HeroSection from './components/fragments/HeroSection'
import AboutSection from './components/fragments/AboutSection'
import VideoSection from './components/fragments/VideoSection'
import ClassSection from './components/fragments/ClassSection'
import BlogSection from './components/fragments/BlogSection'
import Footer from './components/fragments/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <article>
          <HeroSection/>
          <AboutSection/>
          <VideoSection/>
          <ClassSection/>
          <BlogSection/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
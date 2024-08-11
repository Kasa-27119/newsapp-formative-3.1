import React from 'react'

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <h2 className='page-header'>About Me</h2>
      <div className='about-me-grid-container'>
        <div className='about-me-grid-item'></div>
        <div className='about-me-grid-item'></div>
        <div className='about-me-grid-item'></div>
      </div>
      
      <div className='about-me-info'>
        <p className='about-me-text'> I am a student at Yoobee Colleges studying the Diploma of Web & UX Design . I have an artistic background, from being self-taught taking painting classes in college. I learned that I had the passion for developing visual media, and afterwards I learned to appreciate the process of developing web and digital projects.</p>
        <p className='about-me-text'>This NewsAPI website project was made for a formative during Course 3 - Application Development. It utilises APIs to request news articles around the world, display them as populated elements, and contains the functionality to search by term, and filter over articles by category.</p>
      </div>
    </div>
  )
}

export default AboutMe

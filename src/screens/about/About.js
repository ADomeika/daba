import React from 'react'
import './About.css';

function About() {
  return (
    <main className='about'>
      <h1 className='about__title'>Apie mus</h1>
      <p className='about__paragraph'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula risus at aliquam pharetra. Ut eget ex in urna accumsan placerat sit amet a libero. Pellentesque pretium sed sem a sollicitudin. Sed ornare, ligula et fermentum pharetra, neque ipsum condimentum urna, sed congue lorem neque sed mi. Vivamus fringilla at mauris ut euismod. Fusce tristique venenatis mauris, iaculis tincidunt diam consectetur eu. Cras ac iaculis nunc, eu tempus dolor.
      </p>
      <img src={require('../../assets/images/about-image-1.jpg')} alt='braskiu laukas' className='about__image' />
      <p className='about__paragraph'>
        Proin eu consectetur metus. Ut a lobortis est. Aliquam non tristique nisi. Etiam lobortis facilisis mauris, in rhoncus nibh tincidunt venenatis. Sed et bibendum tortor. Nulla et diam quis velit consectetur egestas. Nullam facilisis faucibus luctus. Etiam sodales at lorem vitae scelerisque.
      </p>
    </main>
  )
}

export default About

import React from 'react'
import bannerimg from '../assets/images/BannerImg.png';
import { Icon } from '@iconify/react';

function Home() {
  return (
    <main>
      <section className='banner-sec mt-sm-5 mt-4'>
        <div className='img-side'>
          <img className='img-styles' src={bannerimg} alt="booking beauty banner image" />
        </div>
        <div className='text-side'>
          <h1>Discover the <span className='text-primary'>Best Salons</span> Near You</h1>
          <h2>Find, Book and Stayed. <br /> All in one place.</h2>
          <form class="d-flex searchbar mt-sm-2 mt-0">
            <input type="search" placeholder="Search by name or area.." />
            <button class="btn searchbtn" type="submit"><Icon icon="simple-line-icons:magnifier" /></button>
          </form>
          <div className='d-flex gap-2 gap-sm-4 mt-sm-2 mt-0'>
            <button className='btn primary-btn'>Book Now</button>
            <button className='btn secondary-btn'>Explore Salons</button>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Home

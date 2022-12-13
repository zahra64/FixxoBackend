import React from 'react'
import img3 from '../assets/images/img-3.svg';
import img4 from '../assets/images/img-4.svg';

const BannersSection = () => {
  return (
    <section className="_banners container">
      <img src={img3}  alt=""  />
      <img src={img4}  alt=""  />
    </section>

  )
}

export default BannersSection
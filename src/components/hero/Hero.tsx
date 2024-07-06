import { FC } from 'react'

import "./hero.scss"

const Hero : FC = () => {
  return (
    <div className='hero'>
      <div className="hero__box">
        <h1 className="hero__box__title">
          PORTEN
        </h1>
        <p className='hero__box__text'>санкт-петербург</p>
      </div>
      <p className='hero__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
    </div>
  )
}

export default Hero
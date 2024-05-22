import React from 'react'
import './Campus.css'
import galary1 from '../../assets/gallery-1.png'
import galary2 from '../../assets/gallery-2.png'
import galary3 from '../../assets/gallery-3.png'
import galary4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="galary">
            <img src={galary1} alt="" />
            <img src={galary2} alt="" />
            <img src={galary3} alt="" />
            <img src={galary4} alt="" />
        </div>
        <button className='btn dark-btn'>See More Here.. <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus

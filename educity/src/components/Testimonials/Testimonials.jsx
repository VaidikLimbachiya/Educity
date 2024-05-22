import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const clickForward = ()=>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const clickBackward = ()=>{
        if(tx < -0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={clickForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={clickBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>
                        Choosing to pursue my degree at Educity was one of
                        the best decision I'v e ever made.The supportive
                        community, state-of-the-art facilities , and commitment
                        to academic excellence have truely exceeeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>
                        Choosing to pursue my degree at Educity was one of
                        the best decision I'v e ever made.The supportive
                        community, state-of-the-art facilities , and commitment
                        to academic excellence have truely exceeeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>
                        Choosing to pursue my degree at Educity was one of
                        the best decision I'v e ever made.The supportive
                        community, state-of-the-art facilities , and commitment
                        to academic excellence have truely exceeeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>
                        Choosing to pursue my degree at Educity was one of
                        the best decision I'v e ever made.The supportive
                        community, state-of-the-art facilities , and commitment
                        to academic excellence have truely exceeeded my expectations.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials

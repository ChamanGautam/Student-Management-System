import React from 'react'
import "./Facility.css"
import fac from './facilities.json';
import img1 from "../Img/gym.jpg"
import img2 from "../Img/hostle.jpg"
import img3 from "../Img/guesthouse.jpg"
import img4 from "../Img/library.jpg"
const Facility = () => {
    const imgmap = {
        "gym":img1,
        "hostel":img2,
        "guest":img3,
        "lib":img4
    }
  return (
    <div className='img-map'>
      <h1>FACILITIES</h1>
      <ul>
        {fac.map((item) => (
          <li key={item.id}>
            <img src={imgmap[item.img]} alt="" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Facility

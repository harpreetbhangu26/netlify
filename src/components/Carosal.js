import React, { useState } from 'react'
import {Carousel} from 'react-bootstrap'

function Carosal() {
  const [index,setIndex] = useState(0);

  const handleSelect =(selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <div>
     <Carousel className='caro' activeIndex={index} onSelect={handleSelect} interval={800}>
      <Carousel.Item >
      <img src='sondeep.jpg'  style={{width:'70%'}} alt='first' />
      <Carousel.Caption>
        Pizza
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='brothers.jpg' style={{width:'70%'}} alt='second'/>
      </Carousel.Item>
      <Carousel.Caption>
        Dog
      </Carousel.Caption>
      <Carousel.Item >
        <video style={{width:'70%'}} src='gagan.mp4' alt='third'/>
      </Carousel.Item >
      <Carousel.Caption>
        girl
      </Carousel.Caption>
     </Carousel>
    </div>
  )
}

export default Carosal
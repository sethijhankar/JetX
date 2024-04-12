import React, {useEffect} from 'react'
import Accordian from './Accordian'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FAQ = () => {
  useEffect(() => {
    Aos.init();
}, []);
  return (
    <div className='FAQ px-16'>
        <h2>Frequently Asked Questions</h2>
        <p>JetX is the internet's trusted source for labels. See why thousands of customers rely on us to help them achieve success.</p>
        <Accordian/>
    </div>
  )
}

export default FAQ
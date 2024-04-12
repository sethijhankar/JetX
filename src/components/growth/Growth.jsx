import React, { useEffect } from 'react'
import Image1 from './gr1.png'
import Image2 from './delivered.png'
import Image3 from './Lable.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Growth = () => {
    useEffect(() => {
           Aos.init();
    }, []);

    return (
        <div className='growth flex flex-col md:flex-row md:px-24 px-16 py-16 md:items-center'>
            <div className="circle"></div>
            <div className="text-left md:w-1/2 md:pr-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h2>Let's Grow Together</h2>
                <p>JetX: Your Go-To Label Hub on the Web, Where Countless Thrive. Find out why we're the secret to success!</p>
            </div>
            <div className="growth1 flex flex-col-reverse md:flex-row md:px-24 md:justify-between md:items-center">
                <div className="left md:w-1/2 md:mr-10" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <span>Printed Perfection with Precision</span>
                    <h3>Seal the Deal with Labels that Appeal</h3>
                    <p>JetX A4 Self-Adhesive label is the Make In India product of a global leader in self-adhesive technology – Avery Dennison. These A4 self-adhesive labels are made of nature friendly paper with recycled content resulting in saving trees, hence, protecting our environment. We are focused on providing sustainable labelling solution to all. Apart from A4 labels, we have other labelling products of AD.</p>
                </div>
                <div className="right md:w-1/2 " data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <img className='gr1img' src={Image1} alt="" />
                </div>
            </div>
            <div className="growth2 flex flex-col md:flex-row md:px-24 md:justify-between md:items-center">
                <div className="left md:w-1/2 md:pr-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <img className='gr2img' src={Image2} alt="" />
                </div>
                <div className="right md:w-1/2" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <span>Expand Your Horizons.</span>
                    <h3>Precision on Time, Excellence in Every Line</h3>
                    <p>We want to see your business grow, it's kind of our thing. With low prices, high quality labels, and award-winning support, you'll go from an idea to a professional finished product that captures your vision in no time. And with industry-leading turnaround times, you'll get your labels when you need them. Join thousands of other customers who trust us to help them get the job done.</p>
                </div>
            </div>
            <div className="growth1 flex flex-col-reverse md:flex-row md:px-24 md:justify-between md:items-center">
                <div className="left md:w-1/2 md:mr-10" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <span>Why Should You Choose Us?</span>
                    <h3>Experience the Difference: Where Excellence Meets Innovation</h3>
                    <ul className='list'>
                        <li>Uncompromising commitment to top-notch label quality and finish</li>
                        <li>Eco-conscious materials and processes for sustainable labeling options.</li>
                        <li>Reliable, on-time delivery to meet your business's timelines.</li>
                        <li>Customized solutions tailored to your brand's unique needs.</li>
                    </ul>
                </div>
                <div className="right md:w-1/2" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <img className='gr1img' src={Image3} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Growth;

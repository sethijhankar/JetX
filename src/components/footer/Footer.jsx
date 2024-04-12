import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import Input from '@mui/joy/Input';

export default function Footer() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <footer className="footer-bg absolute bottom-0 left-0 w-full text-secondary body-font bg-gray-300 " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
            <div className='sm:flex sm:items-center sm:justify-evenly bg-primarylight'>
                <div className='p-4'>
                    <h1 className='text-secondary text-xl'>Get the inside scoop on new products, designs, promotions, and more.</h1>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center p-4'>
                    <Input className='mb-4 sm:mb-0 sm:mr-4' placeholder="Email Address" />
                    <button className="bg-yellow text-secondary py-2 px-5 rounded">Sign Up</button>
                </div>
            </div>
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first md:pl-10 footerbc">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 z-10 mb-8 md:mb-0">
                        <h2 className="title-font font-medium text-secondary tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-secondary hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</a>
                            </li>
                            <li>
                                <a className="text-secondary hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Order</a>
                            </li>
                            <li>
                                <a className="text-secondary hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Local For Vocal</a>
                            </li>
                            <li>
                                <a className="text-secondary hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 z-10 mb-8 md:mb-0">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to={'/returnpolicy'} className="text-secondary hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
                            </li>
                            <li>
                                <Link to={'/about'} className="text-secondary hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                            </li>
                            <li>
                                <Link to={'/contact'} className="text-secondary hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 z-10 mb-8 md:mb-0">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Services</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to={'/privacypolicy'} className="text-secondary hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link to={'/privacypolicy'} className="text-secondary hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
                            </li>

                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 z-10 hidden sm:block">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>CONNECT WITH US</h2>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-500 cursor-pointer">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500 cursor-pointer">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500 cursor-pointer">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500 cursor-pointer">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

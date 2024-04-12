import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Loader from '../../components/loader/Loader';
import { GoogleButton } from 'react-google-button';
import { userAuth } from "../../context/data/myState"

function Login() {
    const [toggle, setToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(myContext)
    const { loading, setLoading } = context

    const signin = async () => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem('user', JSON.stringify(result));
            toast.success('Signin Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            window.location.href = '/'
            setLoading(false);
        } catch (error) {
            toast.error('Sigin Failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setLoading(false);
        }
    }

    const { googleSignIn } = userAuth();
    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            await googleSignIn();
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    const handleToggle = () => {
        setToggle(prevState => !prevState);
    }

    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <ToastContainer />
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl border-2 bg-secondary border-gray300 '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-10 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=' bg-gray300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={signin}
                        className='bg-primarylight w-[100px] mt-6 mb-4 text-secondary font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white text-center'>Don't have an account <Link className=' text-primarylight font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
                <div className="flex flex-col items-center w-full">
                <button
                        onClick={handleToggle}
                        className='bg-primarylight w-[100px] mt-6 mb-4 text-secondary font-bold  px-2 py-2 rounded-lg'>
                        Test Creds
                    </button>
                    {toggle ? (
                        <span className='text-start w-full py-4'>
                            Test Mail : kumar.sawant37@gmail.com <br />
                            Password: Sawant@123
                        </span>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Login;

import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { createContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {

    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate()
    const isCourseListPage = location.pathname.includes('/course-list');
    const isEducator = createContext(AppContext)
    return (
        <div className={`flex justify-between items-center lg:px-36 px-4 sm:px-10 md:px-14 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
            <img onClick={() =>
                navigate('/')
            } src={assets.logo} alt="" className='w-28 lg:w-32 cursor-pointer' />
            <div className='hidden md:flex items-center gap-5 text-gray-500'>
                <div className='flex items-center gap-5'>
                    {user &&
                        <>
                            <button onClick={() => {
                                navigate('/educator-dashboard')
                            }}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
                            | <Link to='/my-enrollments'>My Enrollments</Link>
                        </>
                    }
                </div>
                {user ? <UserButton /> :

                    <button onClick={() => {
                        openSignIn();
                    }} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}
            </div>

            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
                <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
                    {user ? <UserButton /> :

                        <button onClick={() => {
                            openSignIn();
                        }} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}
                </div>

                {user &&
                    <>
                        <button onClick={() => {
                            navigate('/educator')
                        }}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
                        | <Link to='/my-enrollments'>My Enrollments</Link>
                    </>
                }


            </div>

        </div>
    )
}

export default Navbar
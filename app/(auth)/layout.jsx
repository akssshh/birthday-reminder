import Link from 'next/link'

const AuthLayout = ({ children }) => {
  return (
    <>
        <nav className='flex justify-between ' >
            <h1>Birthday Reminder</h1>
            <div className='flex gap-4' >
            <Link href='/signup' >Sign up</Link>
            <Link href='/login' >Log in</Link>
            </div>
        </nav>
        {children}
    </>
  )
} 

export default AuthLayout
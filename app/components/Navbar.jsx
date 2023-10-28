import Link from "next/link"
import Image from "next/image"
import Logo from './bday-reminder.png'

export default function Navbar() {
  return (
    <nav className="flex justify-between" >
        <Image
        src={Logo}
        alt='Bday Reminder logo'
        width={180}
        placeholder='blur'
        quality={100}
      />
        <div className=" flex gap-x-6" >
            <Link href="/" >Dashboard</Link>
            <Link href="/tickets" >Birthdays</Link>
        </div>
    </nav>
  )
}
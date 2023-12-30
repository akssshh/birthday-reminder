import Link from "next/link";
import Image from "next/image";
import Logo from "./bday-reminder.png";

export default function Navbar({ user }) {
  
  return (
    <nav className="flex justify-between">
      {console.log('hello')}
      <Link href="/">
        <Image
          src={Logo}
          alt="Bday Reminder logo"
          width={180}
          placeholder="blur"
          quality={100}
        />
      </Link>

      <div className=" flex gap-x-6">
        <Link href="/">Dashboard</Link>
        <Link href="/birthdays">Birthdays</Link>
      </div>
      {user && <span>Hello, {user.email}</span>}
      
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";
import Logo from "./bday-reminder.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <div className="bg-blue py-[1px]" >
      <nav className="flex justify-between ">
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
        <Link href="/birthdates">Birthdates</Link>
      </div>
      <div className="flex gap-x-6" >
        {user && <span>Hello, {user.email}</span>}

        <LogoutButton />
      </div>
    </nav>
    </div>
  );
}

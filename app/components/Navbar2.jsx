import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./bday-reminder.png";
import LogoutButton from "./LogoutButton";

const Navbar = ({ user }) => {
  return (
    <header className="p-6 bg-blue100  text-white ">
      <div className="container flex justify-between h-16 mx-auto 2xl:w-[1300px] ">
        <Link
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <Image
            src={Logo}
            alt="Bday Reminder logo"
            width={180}
            placeholder="blur"
            quality={100}
          />
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white border-indigo-600"
            >
              Dashboard
            </a>
          </li>
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1 border-b-2 border-transparent" href="/birthdates" >Birthdates</Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex text-white">
          <p className="mr-4">{user && <span>Hello, {user.email}</span>}</p>
          <button className="self-center px-8 py-3 font-semibold rounded bg-indigo-600 text-gray-50">
          <LogoutButton />
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

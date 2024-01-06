import React from "react";
import Logo from "./bday-reminder.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue xl:pt-4 ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Image
              src={Logo}
              alt="Bday Reminder logo"
              width={180}
              placeholder="blur"
              quality={100}
            />
          </div>

          <p>Designed and build with 💖 - By Akash</p>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

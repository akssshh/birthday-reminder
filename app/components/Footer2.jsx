import Logo from "../components/bday-reminder.png"
import Image from "next/image";

const Footer = () => {
    return (
      <footer className="px-4 py-8 bg-blue100  text-white xl:absolute ">
        <div className="container flex flex-wrap items-center mx-auto space-y-4 sm:justify-between sm:space-y-0 2xl:w-[1300px] justify-center">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <a
              rel="noopener noreferrer"
              href="#"
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
            </a>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 ">
              <li className="">
                <a rel="noopener noreferrer" href="#">
                  Designed and build with 🫶🏻 - By Akash
                </a>
              </li>
            </ul>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Github
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
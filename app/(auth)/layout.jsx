import Link from "next/link";
import Image from "next/image";
import Logo from "../components/bday-reminder.png";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }

  return (
    <>
      <header className="p-6 bg-blue100  text-white ">
        <div className="container flex justify-between h-16 mx-auto 2xl:w-[1300px] ">
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

          <div className="items-center flex-shrink-0 hidden lg:flex">

          <Link href="/signup" >
              <button className="self-center px-8 py-3 font-semibold rounded bg-indigo-600 text-gray-50 mr-4 ">
                Sign up
              </button>
            </Link>
            
            <Link href="/login" >
              <button className="self-center px-8 py-3 font-semibold rounded bg-indigo-600 text-gray-50">
                Login
              </button>
            </Link>
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
      {children}
    </>
  );
};

export default AuthLayout;

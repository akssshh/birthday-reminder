import Link from "next/link";
import Image from "next/image";
import Logo from "../components/bday-reminder.png";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AuthLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect('/')
  }
  
  return (
    <>
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
        <div className="flex gap-4">
          <Link href="/signup">Sign up</Link>
          <Link href="/login">Log in</Link>
        </div>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;

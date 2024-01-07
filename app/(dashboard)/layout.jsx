import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Footer2 from "../components/Footer2";
import Footer from "../components/Footer";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }) {
  
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect('/login')
  }

  return (
    <div >
      {/* <Navbar user={data.session.user} /> */}
      <Navbar2 user={data.session.user} />
      {children}
      <Footer2 />
      {/* <Footer /> */}
    </div>
  );
};


import Navbar from "../components/Navbar";
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
      <Navbar user={data.session.user} />
      {children}
      <Footer />
    </div>
  );
};


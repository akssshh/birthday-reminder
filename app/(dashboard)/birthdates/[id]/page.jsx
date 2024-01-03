import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// components
import DeleteIcon from './DeleteButton'

export const dynamicParams = true

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies })

  const { data: birthdate } = await supabase.from('birthdates')
    .select()
    .eq('id', params.id)
    .single()
 
  return {
    title: `B'day Reminder | ${birthdate?.name || 'Birthdate not Found'}`
  }
}

async function getBirthday(id) {
  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.from('birthdates')
    .select()
    .eq('id', id)
    .single()

    if (!data) {
      notFound()
    }
  
    return data
}

export default async function BirthdayDetails({ params }) {
  const birthdate = await getBirthday(params.id)

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <main>
      <nav>
        <h2>Birthday Details</h2>
        <div className="ml-auto">
          {data.session.user.email === birthdate.user_email && (
            <DeleteIcon id={birthdate.id} />
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{birthdate.name}</h3>
        <small>Created by {birthdate.user_email}</small>
      </div>
    </main>
  )
}
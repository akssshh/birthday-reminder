import Link from "next/link";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

async function getBirthdays() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("birthdates").select();

  if (error) {
    console.log(error.message);
  }

  return data;
}

export default async function BirthdayList() {
  const birthdates = await getBirthdays();

  return (
    <>
      {birthdates.map((birthday) => (
        <div key={birthday.id} className="card my-4">
          <Link href={`/birthday/${birthday.id}`} >
            <h2>{birthday.name}</h2>
            <p>{birthday.age} years</p>
            <p className="mt-2" >{birthday.date}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

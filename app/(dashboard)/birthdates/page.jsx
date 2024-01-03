import { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";
import BirthdayList from "./BirthdayList";

export const metadata = {
  title: "Birthday Reminder | Birthdays",
};

export default function Birthdates() {
  return (
    <main className="flex flex-col">
      <div className="flex items-center mt-4 justify-around w-full ">
        <div>
          <h2>Birthdays</h2>
        </div>
        <div>
          <Link href="/birthdates/create" className="">
            <button className="btn-primary">New Birthday</button>
          </Link>
        </div>
      </div>
      <section className="container">
        <Suspense fallback={<Loading />}>
          <BirthdayList />
        </Suspense>
      </section>
    </main>
  );
};


import React from "react";
import BirthdayList from "./BirthdayList";
import { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";

export const metadata = {
  title: "Birthday Reminder | Birthdays",
};

const Tickets = () => {
  return (
    <main className="flex flex-col">
      <div className="flex items-center mt-4 justify-around w-full ">
        <div>
          <h2>Birthdays</h2>
        </div>
        <div>
          <Link href="/birthdays/create" className="">
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

export default Tickets;

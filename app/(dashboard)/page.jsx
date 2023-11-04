"use client";

import { useState } from "react";
// import data from "./data";
// import List from "./List";
import Image from "next/image";
import BirthdayImg from '../../public/birthday-01.jpeg'

export default function Home() {
  

  return (
    <section className="pt-16" >
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/2815871/original/Happy_Birthday/sing-happy-birthday-for-you.jpg"
            />
          </div>

          <div class="lg:py-24">
            <h1 class="text-3xl font-bold sm:text-5xl">Welcome to Birthday Reminder</h1>

            <p class="mt-4 text-white sm:text-2xl ">
            Never forget a birthday again. Stay connected, celebrate life, and make every day special.
            </p>

            <a
              href="#"
              class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



// const [people, setPeople] = useState(data);

  // const handleClear = () => {
  //   setPeople([]);
  // };

  // return (
  //   <main className="mt-0" >
  //     <section className="container">
  //       <h3>{people.length} birthdays today</h3>
  //       <List people={people} />
  //       <button type="button" className="btn btn-block" onClick={handleClear}>
  //         Clear all
  //       </button>
  //     </section>
  //   </main>
  // )
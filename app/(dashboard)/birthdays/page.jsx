import React from "react";
import BirthdayList from "./BirthdayList";

export const metadata = {
  title: "Birthday Reminder | Birthdays",
};

const Tickets = () => {
  return (
    <main>
        <section className="container">
            <BirthdayList />
        </section>
    </main>
  )
};

export default Tickets;

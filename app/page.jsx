"use client"

import { useState } from "react";
import data from "./data";
import List from "./List";


export default function Home() {

  const [people, setPeople] = useState(data);

  const handleClear = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={handleClear}>
          Clear all
        </button>
      </section>
    </main>
  )
}

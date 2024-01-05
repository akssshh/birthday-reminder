"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    const newBirthday = {
      name,
      age,
      date,
      user_email: 'mario@netninja.dev'
    };

    const res = await fetch("http://localhost:3000/api/birthdates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBirthday),
    });

    const json = await res.json()

    if (json.error) {
      console.log(error.message)
    }
    if (json.data) {
      router.refresh()
      router.push('/birthdates')
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label htmlFor="name">
        <span>Name:</span>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Age:</span>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          type="date"
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)} 
         />
      </label>

      <button 
        className="btn-primary"
        disabled={isLoading}
      >
        {isLoading && <span>Submitting...</span>}
        {!isLoading && <span>Submit</span>}
      </button>
    </form>
  );
};


"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const birthday = {
      name,
      age,
      user_email: 'mario@netninja.dev'
    };

    const res = await fetch("http://localhost:3000/api/birthdays", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(birthday),
    });

    const json = await res.json()

    if (json.error) {
      console.log(error.message)
    }
    if (json.data) {
      router.refresh()
      router.push('/tickets')
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

      <button className="btn-primary">Submit</button>
    </form>
  );
};

export default CreateForm;

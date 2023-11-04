"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBirthday = {
      name,
      age,
      image:
        "https://pbs.twimg.com/profile_images/1576063847261052928/Fs1Ve_b4_400x400.jpg",
    };

    const res = await fetch("http://localhost:4000/birthdays", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBirthday),
    });
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

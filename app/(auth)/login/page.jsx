"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer2 from "../../components/Footer2";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/");
    }
  };

  return (
    <main className="flex flex-col" >
      <div className="mb-28" >
        <h2 className="text-center mb-4">Log in</h2>
        <AuthForm handleSubmit={handleSubmit} />
      </div>
      <Footer2 />
      {error && <div className="error">{error}</div>}
    </main>
  );
}

"use client"

import AuthForm from "../AuthForm"

export default function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
  }
  return (
    <main>
      <h2 className="">Log in</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}
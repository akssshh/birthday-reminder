"use client"

import { useState } from 'react'

export default function AuthForm({ handleSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <div class="bg-gray-100 flex min-h-[72vh] items-center justify-center p-4">
        <div class="w-full max-w-md">
          <div class="bg-white shadow-md rounded-md p-8">
            <form
              class="space-y-6 mt-4"
              onSubmit={(e) => handleSubmit(e, email, password)}
            >
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div class="mt-1">
                  <input
                    name="email"
                    type="email"
                    autocomplete="email-address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
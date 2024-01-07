"use client"

export default function Home() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 sm:py-6  sm:px-6  lg:px-8 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative  overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/2815871/original/Happy_Birthday/sing-happy-birthday-for-you.jpg"
            />
          </div>

          <div className="lg:py-24">
            <h1 className="text-3xl font-bold sm:text-5xl">
              Welcome to Birthday Reminder
            </h1>

            <p className="mt-4 text-white sm:text-2xl ">
              Never forget a birthday again. Stay connected, celebrate life, and
              make every day special.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


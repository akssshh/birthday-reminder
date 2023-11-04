import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-center flex flex-col gap-4 ">
      <h1 className="text-4xl">There was a problem.</h1>
      <div className="text-2xl" >
      <p>We could not find the page you were looking for.</p>
      <p className="" >Go back to the <Link href="/" className="text-white "  >Dashboard</Link>.</p>
      </div>
    </main>
  )
}
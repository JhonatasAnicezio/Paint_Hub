import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <Link href='/shield'>
        Shield
      </Link>
      <Link href='/playground'>
        playground
      </Link>
    </main>
  )
}

import Link from 'next/link'
export default function Footer() {
    return (
        <footer className="text-center p-4 bg-[#ffe3c2] text-black">
        <div className="flex flex-row justify-center gap-4">
            <Link href="/impressum">
          <p>Impressum</p>
          </Link>
          <p>Datenschutz</p>
        </div>
      </footer>
    )
}
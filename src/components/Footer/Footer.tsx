import Link from 'next/link'
export default function Footer() {
    return (
        <footer className="text-center p-4 bg-[#fffff] text-black">
        <div className="flex flex-row justify-center gap-4">
            <Link href="/impressum">
          <p>Impressum</p>
          </Link>
          <Link href="/Datenschutz">
          <p>Datenschutz</p>
          </Link>
 
        </div>
      </footer>
    )
}
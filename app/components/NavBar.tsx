import Link from 'next/link'
import React from 'react'
import { auth } from "@/auth";

const NavBar = async () => {
  const session = await auth()

  return (
    <nav className="navbar bg-base-300">
      <Link href="/" className="btn btn-ghost">
        Home
      </Link>
      <Link href="/admin" className="btn btn-ghost">
        Admin
      </Link>
      <Link href="/users" className="btn btn-ghost">
        Users
      </Link>
      <Link href="/products" className="btn btn-ghost">
        Products
      </Link>
      <Link href="/image" className="btn btn-ghost">
        Image
      </Link>
      {!session?.user ? (
        <Link href="/api/auth/signin" className="btn btn-ghost">Login</Link>
      ) : (
        <div>
          {session.user.name}
          <Link href="/api/auth/signout" className="btn btn-ghost">Sign Out</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='navbar bg-base-300'>
      <Link href='/' className='btn btn-ghost'>Home</Link>
      <Link href='/admin' className='btn btn-ghost'>Admin</Link>
      <Link href='/users' className='btn btn-ghost'>Users</Link>
      <Link href='/products' className='btn btn-ghost'>Products</Link>
    </nav>
  )
}

export default NavBar
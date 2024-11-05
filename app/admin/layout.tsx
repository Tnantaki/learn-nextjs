import React, { ReactNode } from 'react'

// Create children props
interface Props {
  children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className='bg-base-200 p-5'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout
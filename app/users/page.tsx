import Link from 'next/link';
import UserTable from './UserTable';

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UserPages = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;

  return (
    <>
      <h1 className='text-2xl text-extrabold p-3'>Users</h1>
      <Link href='/users/new' className='btn'>New User</Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
}

export default UserPages
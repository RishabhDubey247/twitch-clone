import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";
import { query } from '../lib/utils';
import pool from './(auth)/db';

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

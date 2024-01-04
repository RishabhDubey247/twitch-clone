import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Pool, RowDataPacket } from 'mysql2/promise';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const query = async (pool: Pool, sql: string, values?: any[]): Promise<RowDataPacket[] | null> => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(sql, values);
    return results as RowDataPacket[];
  } catch (error) {
    console.error('MySQL Query Error:', error.message);
    return null;
  } finally {
    connection.release();
  }
};

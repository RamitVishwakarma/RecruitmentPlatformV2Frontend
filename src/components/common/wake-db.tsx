'use client';

import { useEffect } from 'react';
import { getApi } from '@/api/api';

export default function WakeDb() {
  useEffect(() => {
    const wakeDatabase = async () => {
      try {
        await getApi('/wakeDb');
      } catch (error) {
        console.error('Failed to wake database:', error);
      }
    };

    wakeDatabase();
  }, []);

  // This component renders nothing
  return null;
}

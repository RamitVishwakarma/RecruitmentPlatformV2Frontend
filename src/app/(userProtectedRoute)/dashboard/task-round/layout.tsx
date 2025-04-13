'use client';

import { motion } from 'framer-motion';
import { Timer, ArrowLeft, Calendar, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { steps } from '@/constants/dashboard';

const startTime = steps[1].eventStartDate!;
const deadline = steps[1].eventEndDate!;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());

      const targetDate = now < startTime ? startTime : deadline;
      const difference = targetDate.getTime() - now.getTime();

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [now]);

  const hasStarted = now >= startTime;
  const hasNotEnded = now <= deadline;

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!hasStarted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="w-full max-w-md space-y-8"
        >
          <div className="space-y-6 rounded-xl border border-border/50 bg-card p-8 shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Timer className="h-8 w-8 text-primary" />
            </div>

            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold">Event Starting Soon</h1>
              <p className="text-muted-foreground">Get ready! The event will begin in:</p>
            </div>

            <div className="rounded-lg bg-background p-4 text-center">
              <span className="font-mono text-4xl font-bold tracking-wider text-primary">
                {timeLeft}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Date: {startTime.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Time: {startTime.toLocaleTimeString()}</span>
              </div>
            </div>

            <Button asChild className="w-full">
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2 bg-theme py-6 hover:bg-theme-interactive"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to Dashboard
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!hasNotEnded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="w-full max-w-md space-y-8"
        >
          <div className="space-y-6 rounded-xl border border-border/50 bg-card p-8 shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>

            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold">Event Has Ended</h1>
              <p className="text-muted-foreground">
                Thank you for your interest! The event is no longer active.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Ended on: {deadline.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>At: {deadline.toLocaleTimeString()}</span>
              </div>
            </div>

            <Button asChild className="w-full">
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2 bg-theme py-6 hover:bg-theme-interactive"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to Dashboard
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}

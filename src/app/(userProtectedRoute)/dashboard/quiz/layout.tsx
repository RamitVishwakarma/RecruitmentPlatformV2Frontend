import { AlertCircle, Home, Mail } from 'lucide-react';
import Link from 'next/link';
import { AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { ReactNode } from 'react';

const DEADLINE = new Date('2025-04-13T00:00:00');

export const metadata = {
  title: 'Quiz | GDG',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const now = new Date();
  const isBeforeDeadline = now < DEADLINE;

  if (!isBeforeDeadline) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md border-red-200 shadow-lg">
            <CardHeader className="border-b border-red-100 bg-red-50">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle className="text-xl font-bold">Deadline Passed</AlertTitle>
              </div>
            </CardHeader>
            <CardContent className="pb-4 pt-6">
              <AlertDescription className="text-gray-700">
                <p>
                  The quiz submission period ended on{' '}
                  <span className="font-medium">{DEADLINE.toLocaleDateString()}</span> at{' '}
                  <span className="font-medium">{DEADLINE.toLocaleTimeString()}</span>.
                </p>
                <p className="mt-4">Please contact your instructor if you need assistance.</p>
              </AlertDescription>
            </CardContent>
            <CardFooter className="flex gap-3 border-t border-gray-100 pt-2">
              <Button className="flex-1" asChild>
                <Link href="/dashboard" className="bg-theme hover:bg-theme-interactive">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Dashboard
                </Link>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <Link href="https://chat.whatsapp.com/KIzWKEujQqbHgOWKAtYhWj">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    );
  }

  return <main>{children}</main>;
}

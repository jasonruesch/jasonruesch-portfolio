import { ReactNode } from 'react';
import Nav from './nav';

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="h-full flex min-h-screen supports-[-webkit-touch-callout:none]:[min-height:-webkit-fill-available] flex-col">
      <header className="flex justify-center px-safe-offset-4 pb-4 pt-safe-offset-4">
        <Nav />
      </header>

      <main className="flex-1 p-4">{children}</main>

      <footer className="text-center px-safe-offset-4 pt-4 pb-safe-offset-4">
        Copyright &copy; {new Date().getFullYear()} Jason Ruesch. All rights
        reserved.
      </footer>
    </div>
  );
}

export default Layout;

import { ReactNode } from 'react';
import Nav from './nav';

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="h-full flex min-h-screen flex-col">
      <header className="flex justify-center p-4">
        <Nav />
      </header>

      <main className="flex-1 px-4">{children}</main>

      <footer className="text-center p-4">
        Copyright &copy; {new Date().getFullYear()} Jason Ruesch. All rights
        reserved.
      </footer>
    </div>
  );
}

export default Layout;

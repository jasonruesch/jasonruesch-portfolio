import { ReactNode } from 'react';
import { Logo } from './logo';
import { LogoNeutral } from './logo-neutral';

export function Layout({
  nav,
  children,
}: {
  nav: JSX.Element;
  children?: ReactNode;
}) {
  return (
    <div className="h-full flex min-h-screen supports-[-webkit-touch-callout:none]:[min-height:-webkit-fill-available] flex-col">
      <header className="flex items-center px-safe-offset-4 pt-safe h-14 gap-4">
        <Logo className="h-8 w-8" />
        {nav}
      </header>

      <main className="flex-1 p-4">{children}</main>

      <footer className="flex flex-col gap-4 items-center justify-center px-safe-offset-4 pt-4 pb-safe-offset-4">
        <LogoNeutral className="h-12 w-12" />
        <p>
          Copyright &copy; {new Date().getFullYear()} Jason Ruesch. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Layout;

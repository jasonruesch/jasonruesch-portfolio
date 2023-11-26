import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Projects', href: '/projects' },
  { name: 'Privacy', href: '/privacy' },
];

export function Nav() {
  return (
    <nav className="flex gap-4 items-center">
      {navigation.map(({ name, href }) => (
        <NavLink
          key={href}
          to={href}
          className={({ isActive }) =>
            isActive
              ? 'text-primary-500 dark:text-primary-400'
              : 'hover:text-primary-500 dark:hover:text-primary-400'
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;

  'use client';
  import { usePathname} from 'next/navigation';
  import { clsx} from 'clsx';
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { name: 'Home', href: '/dashboard' },
    {
      name: 'Invoices',
      href: '/dashboard/invoices',
    },
    { name: 'Customers', href: '/dashboard/customers'},
    {name: 'shrek', href: 'https://www.wikipedia.com/wiki/shrek'}
  ];
  export default function NavLinks() {
    const pathName = usePathname();

    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-100 text-blue-600': pathName === link.href,
              },
              )}>
              <p className="hidden md:block">{link.name}</p>
            </a>
          );
        })}
      </>
    );
  }
  
import { ReactNode } from 'react';
import Link from 'next/link';

type linkProps = {
    children: ReactNode,
    href: string,
    classname?: string,
}

export const NavLink = (props: linkProps) => (
    <p className={`mt-6 text-white hover:text-blue-sky transition font-semibold ${props.classname}`}>
        <Link href={props.href}>{props.children}</Link>
    </p>
);

export const FooterLink = (props: linkProps) => (
    <p className="hover:text-blue-sky font-regular">
        <Link href={props.href}>{props.children}</Link>
    </p>
)

import { ReactNode } from 'react';
import Link from 'next/link';

export type linkProps = {
    children: ReactNode,
    href: string,
    classname?: string,
}

export const NavLink = (props: linkProps) => (
    <p className={`mt-6 font-semibold text-white transition hover:text-blue-sky ${props.classname}`}>
        <Link href={props.href}>{props.children}</Link>
    </p>
);

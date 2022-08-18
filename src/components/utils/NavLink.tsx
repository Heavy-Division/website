import {ReactNode} from "react";
import Link from 'next/link';

type linkProps = {
    children: ReactNode,
    href: string,
}

export const NavLink = (props: linkProps) => (
    <p className="text-4xl my-10 px-3 hover:text-blue-sky">
        <Link href={props.href}>{props.children}</Link>
    </p>
);

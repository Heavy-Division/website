import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { navMap } from '../../data';
import { linkProps } from './NavLink';

type navMapProps = {
    title: string,
    content: { name: string, url: string }[],
    className?: string,
}

export const FooterLink = (props: linkProps) => (
    <p className="font-regular text-sm hover:text-blue-sky">
        <Link href={props.href}>{props.children}</Link>
    </p>
);

const List = (props: navMapProps) => (
    <div>
        <p className={`mb-2 text-xl font-bold ${props.className}`}>{props.title}</p>
        <ul>
            {props.content.map(({ name, url }) => (
                <li key={name}>
                    <Link href={url}>
                        <p className="font-regular cursor-pointer text-slate-300 hover:text-blue-sky">
                            {name}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const ExternalList = (props: navMapProps) => (
    <div>
        <p className={`mb-2 text-xl font-bold ${props.className}`}>{props.title}</p>
        <ul>
            {props.content.map(({ name, url }) => (
                <li key={name}>
                    <a target="_blank" rel="noreferrer" href={url}>
                        <p className="font-regular cursor-pointer text-slate-300 hover:text-blue-sky">
                            {name}
                        </p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-navy">
            <div className="grid grid-rows-3 place-items-center align-middle">
                <div className="mt-4 grid grid-rows-2 justify-center">
                    <Image src="/svg/hdbanner.svg" height={45} width={250} alt="logo" />
                </div>
                <div className="md:max-w-1/3 -mt-12 grid grid-cols-3 place-items-start justify-items-center gap-x-4">
                    <List title="Menu" content={navMap.menu} />
                    <List title="Projects" content={navMap.projects} />
                    <ExternalList title="Socials" content={navMap.socials} />
                </div>
                <div className="flex cursor-default flex-row gap-x-4 text-sm">
                    <p className="font-regular cursor-pointer hover:text-blue-sky">
                        <a href="https://github.com/Heavy-Division/website" target="_blank" rel="noreferrer">
                            Source Code
                        </a>
                    </p>
                    |
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    |
                    <FooterLink href="/tos">Terms of Service</FooterLink>
                </div>
                <p className="mb-16">
                    © Heavy Division and its contributors 2020-
                    {year}
                </p>
            </div>
        </footer>
    );
};

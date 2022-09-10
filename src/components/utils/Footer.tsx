import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { list } from '../../data';
import { FooterLink } from './NavLink';

type listProps = {
    title: string,
    content: { name: string, url: string }[],
}


const List = (props: listProps) => {
    return (
        <div>
            <p className="font-bold text-xl mb-2">{props.title}</p>
            <ul>
                {props.content.map(({name, url}) => {
                    return <li key={name}>
                        <Link href={url}>
                           <p className="hover:text-blue-sky cursor-pointer font-regular text-colors-gray-400">{name}</p>
                        </Link>
                            </li>
                })}
            </ul>
        </div>
    );
};

export const Footer = () => {
    const year = new Date().getFullYear();
   return (
        <footer>
            <div className="grid grid-rows-3 place-items-center">
                <div className="grid grid-rows-2 justify-center">
                    <Image src="/svg/hdbanner.svg" height={45} width={250} />
                    <span className="mt-3 inline-flex justify-center">
                        <p className="font-bold">Inquiries:&nbsp;</p>
                        <a href="mailto:contact@hdsimulations.com" className="hover:text-blue-sky transition">contact@hdsimulations.com</a>
                    </span>
                </div>
                <div className="grid grid-cols-3 w-3/4 gap-x-4 place-items-center">
                    <List content={list.menu} title={"Menu"} />
                    <List content={list.projects} title={"Projects"} />
                    <List content={list.socials} title={"Socials"} />
                </div>
                <div className="flex flex-row gap-x-4">
                    <FooterLink href={"/"}>Source Code</FooterLink>|
                    <FooterLink href={"/"}>Privacy Policy</FooterLink>|
                    <FooterLink href={"/"}>Terms of Service</FooterLink>
                </div>
                <p className="mb-16">© Heavy Division and its contributors 2020-{year}</p>
            </div>
        </footer>
    );
}

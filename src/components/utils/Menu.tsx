import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';

export type menuProps = {
    children: ReactNode
}

export const Menu = (props: menuProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 2 }}
    >
        <div className="fixed top-0 z-20 min-h-screen max-w-fit bg-blue-tailwind py-16 pl-16 pr-24 shadow-2xl">
            <motion.div
                initial={{ x: -30, opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                {props.children}
            </motion.div>
        </div>
    </motion.div>
);

type listProps = {
    title: string,
    href: string,
    content: { name: string, url: string }[],
}

export const MenuItem = (props: listProps) => (
    <div className="my-4">
        <Link href={props.href}>
            <h4 className="ml-4 cursor-pointer font-extrabold transition hover:underline">{props.title}</h4>
        </Link>
        {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
        <ul className="ml-10 border-l-2 border-white border-opacity-50 pl-3">
            {props.content.map(({ name, url }) => (
                <li className="my-2" key={name}>
                    <Link href={url}>
                        <p className="cursor-pointer border-white text-[16px] font-bold transition hover:translate-x-2">
                            {name}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export const MenuItemExternal = (props: listProps) => (
    <div className="my-4">
        <Link href={props.href}>
            <h4 className="ml-4 cursor-pointer font-extrabold transition hover:underline">{props.title}</h4>
        </Link>
        {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
        <ul className="ml-10 border-l-2 border-white border-opacity-50 pl-3">
            {props.content.map(({ name, url }) => (
                <li className="my-2" key={name}>
                    <a target="_blank" rel="noreferrer" href={url}>
                        <p className="cursor-pointer border-white text-[16px] font-bold transition hover:translate-x-2">
                            {name}
                        </p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

import { motion } from 'framer-motion';
import React, {ReactNode, useState} from 'react';
import Link from "next/link";

export type menuProps = {
    children: ReactNode
}

export const Menu = (props: menuProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 2 }}
    >
        <div className="fixed top-0 max-w-fit pl-16 pr-24 max-h-screen py-16 bg-blue-tailwind shadow-2xl z-20">
            <motion.div
            initial={{ x: -30, opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
            {props.children}
            </motion.div>
        </div>
    </motion.div>
)

type listProps = {
    title: string,
    href: string,
    content: { name: string, url: string }[],
}

export const MenuItem = (props: listProps) => {
    return (
        <div className="my-4">
            <Link href={props.href}>
                <h3 className="font-extrabold text-3xl hover:underline transition cursor-pointer">{props.title}</h3>
            </Link>
            <ul className="ml-6 pl-3 border-l-2 border-white border-opacity-50">
                {props.content.map(({name, url}) => {
                    return <li className="my-2" key={name}>
                        <Link href={url}>
                            <p className={`cursor-pointer border-white text-xl transition font-regular hover:translate-x-2`}>
                                {name}
                            </p>
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

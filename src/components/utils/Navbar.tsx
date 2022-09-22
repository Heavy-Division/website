import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from './Dropdown';
import { NavLink } from './NavLink';
import {Menu, MenuItem, MenuItemExternal} from './Menu';
import { navMap } from '../../data';

export const MobileNav = () => {
    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    const [isOpen, setOpen] = useState(false);

    function handleClick() {
        if (isOpen) {
            setOpen(!isOpen);
        }
    }
    return (
        <div>
            <span className={`fixed z-10 h-2 w-screen shadow-xl md:invisible ${isOpen && 'invisible'}`}>
                <div className="mt-3 flex justify-center">
                    <Link href="/">
                        <Image src="/svg/logo.svg" width={50} height={50} objectFit="contain" className="cursor-pointer" />
                    </Link>
                </div>
            </span>
            <div className="visible absolute top-2 left-3 z-30 md:invisible" onClick={() => setOpen(!isOpen)}>
                <span className="flex h-16 w-10 cursor-pointer flex-col place-content-center transition md:hidden">
                    <div className={`${isOpen && 'translate-y-[3px] rotate-45'} h-[3px] rounded-full bg-white duration-200`} />
                    <div className={`${isOpen ? 'h-0' : 'my-[5px] h-[3px]'} rounded-full bg-white`} />
                    <div className={`${isOpen && '-rotate-45'}  h-[3px] rounded-full bg-white duration-200`} />
                </span>
            </div>
            <nav>
                {isOpen && (
                    <Menu>
                        <div onClick={() => handleClick()} className="relative text-3xl">
                            <Link href="/news">
                                <h4 className="ml-4 cursor-pointer font-extrabold hover:underline">News</h4>
                            </Link>
                            <MenuItem href="/downloads" title="Downloads" content={navMap.downloads} />
                            <MenuItem title="Projects" href="/projects" content={navMap.projects} />
                            <MenuItemExternal title="Community" href="#community" content={navMap.socials} />
                        </div>
                    </Menu>
                )}
            </nav>
        </div>
    );
};

export const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const scrollHandler = () => {
            setScroll(window.scrollY > 2);
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 h-20 w-screen 
            ${scroll ? 'bg-navy shadow-md transition' : 'bg-transparent transition'}`}
        >
            <div className="invisible fixed top-4 left-20 cursor-pointer md:visible">
                <Link href="/">
                    <Image src="/svg/hdbanner.svg" height={40} width={200} />
                </Link>
            </div>
            <MobileNav />
            <span className="invisible mx-24 flex justify-end gap-x-6 text-xl md:visible">
                <NavLink href="/news">News</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/downloads">Downloads</NavLink>
                <Dropdown>Community</Dropdown>
            </span>
        </nav>
    );
};

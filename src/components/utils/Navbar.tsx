import {ReactNode, useEffect, useRef, useState} from 'react';
import { Dropdown } from './Dropdown';
import { MenuButton } from './MenuButton';
import { NavLink } from './NavLink';
import { Menu } from "./Menu";
import Image from 'next/image';
import Link from "next/link";



type navItemProps = {
    children: ReactNode,
    href?: string
    className?: string
}

export const NavItem = (props: navItemProps) => (
    <div className="hover:text-blue-sky font-semibold text-sm transition">
    <a href={props.href} className={props.className}>{props.children}</a>
    </div>
)

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
     <div className="visible sm:invisible">
         <div>
             <MenuButton
                 isOpen={isOpen}
                 // @ts-ignore
                 onClick={() => setOpen(!isOpen)}
                 strokeWidth="4"
                 color="#fafafa"
                 transition={{ ease: "easeOut", duration: 0.2 }}
                 width="48"
                 height="24"
                 className="fixed top-8 right-4 z-40"
             />
             <nav>
                 {isOpen && (
                     <Menu>
                         <ul className="p-12">
                            <NavLink href={"/"}>News</NavLink>
                             <NavLink href={"/"}>Projects</NavLink>
                             <NavLink href={"/"}>Downloads</NavLink>
                             <NavLink href={"/"}>Community</NavLink>
                         </ul>
                     </Menu>
                 )}
             </nav>
         </div>
     </div>
    )
}

export const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <div className="invisible md:visible fixed z-40 cursor-pointer px-24 pt-1">
                <Link href={"/"}>
                    <Image src={"/svg/hdbanner.svg"} width={150} height={40} />
                </Link>
            </div>
            <div className="w-screen">
            <nav className="fixed h-14 invisible sm:visible bg-gradient z-20 w-screen">
                <div className="flex w-full justify-center gap-x-10 pt-4">
                    <NavItem href={"/downloads"}>Downloads</NavItem>
                    <NavItem href={"/news"}>News</NavItem>
                    <NavItem href={"/projects"}>Projects</NavItem>
                    <Dropdown>Community</Dropdown>
                </div>
            </nav>
                <MobileNav></MobileNav>
            </div>
        </div>
    )
};

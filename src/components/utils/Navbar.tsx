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
    <div className="hover:text-blue-sky font-semibold text-lg transition">
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
     <div>
         <span className={`fixed bg-gradient shadow-xl w-screen h-20 z-10 sm:invisible ${isOpen && 'invisible'}`}>
             <div className="flex justify-center">
            <Image src="/svg/logo.svg" width={40} height={70} objectFit={"contain"} />
            </div>
         </span>
         <div className="visible sm:invisible">
             <MenuButton
                 isOpen={isOpen}
                 // @ts-ignore
                 onClick={() => setOpen(!isOpen)}
                 strokeWidth="3"
                 color="#fafafa"
                 transition={{ ease: "easeOut", duration: 0.2 }}
                 width="32"
                 height="16"
                 className="fixed top-8 left-8 z-40 cursor-pointer"
             />
         </div>

         <nav>
             {isOpen && (
                 <Menu>
                     <ul className="fixed left-1/4 pt-32">
                         <NavLink href={"/news"}>News</NavLink>
                         <NavLink href={"/"}>Projects</NavLink>
                         <NavLink href={"/downloads"}>Downloads</NavLink>
                         <NavLink href={"/"}>Community</NavLink>
                     </ul>
                 </Menu>
             )}
         </nav>
     </div>
    )
}

export const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <div className="invisible sm:visible fixed z-40 px-16 pt-1">
                <Link href={"/"}>
                    <Image src={"/svg/hdbanner.svg"} width={200} height={50} className="cursor-pointer" />
                </Link>
            </div>
            <div className="w-screen">
            <nav className="fixed h-14 invisible sm:visible bg-gradient shadow-md z-20 w-screen">
                <div className="flex w-full justify-center gap-x-4 md:gap-x-10 pt-4">
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

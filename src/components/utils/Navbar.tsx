import { useEffect, useState} from 'react';
import { Dropdown } from './Dropdown';
import { MenuButton } from './MenuButton';
import { NavLink, MobileNavLink } from './NavLink';
import { Menu } from "./Menu";
import Image from 'next/image';
import Link from "next/link";

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
         <span className={`fixed shadow-xl w-screen h-2 z-10 md:invisible ${isOpen && 'invisible'}`}>
             <div className="flex justify-center mt-3">
                 <Link href={"/"}>
                    <Image src="/svg/logo.svg" width={50} height={50} objectFit={"contain"} className="cursor-pointer"/>
                 </Link>
            </div>
         </span>
         <div className="visible md:invisible">
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
                     <div onClick={() => setOpen(!isOpen)} className="relative left-1/4 mt-32 text-3xl">
                     </div>
                 </Menu>
             )}
         </nav>
     </div>
    )
}

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
       <nav className={`fixed top-0 w-full h-20 z-50 ${scroll ? 'transition bg-navy' : 'transition bg-transparent'}`}>
           <div className="fixed top-4 left-20 cursor-pointer invisible md:visible">
               <Link href={"/"}>
                   <Image src="/svg/hdbanner.svg" height={40} width={200} />
                </Link>
           </div>
           <MobileNav></MobileNav>
            <span className="flex justify-end invisible md:visible text-xl mx-24 gap-x-6">
                <NavLink href={"/news"}>News</NavLink>
                <NavLink href={"/projects"}>Projects</NavLink>
                <NavLink href={"/downloads"}>Downloads</NavLink>
                <Dropdown>Community</Dropdown>
            </span>
       </nav>
    )
};

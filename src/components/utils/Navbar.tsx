import { useEffect, useState} from 'react';
import { Dropdown } from './Dropdown';
import { NavLink } from './NavLink';
import { Menu, MenuItem } from './Menu';
import Image from 'next/image';
import Link from 'next/link';
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
     <div unselectable={"on"}>
         <span className={`fixed shadow-xl w-screen h-2 z-10 md:invisible ${isOpen && 'invisible'}`}>
             <div className="flex justify-center mt-3">
                 <Link href={"/"}>
                    <Image src="/svg/logo.svg" width={50} height={50} objectFit={"contain"} className="cursor-pointer"/>
                 </Link>
            </div>
         </span>
         <div className="visible md:invisible absolute top-2 left-3 z-30" onClick={() => setOpen(!isOpen)}>
              <span className="flex flex-col place-content-center w-10 h-16 transition cursor-pointer md:hidden">
                  <div className={`${isOpen && 'rotate-45 translate-y-[3px]'} duration-200 h-[3px] bg-white rounded-full`} />
                  <div className={`${isOpen ? 'h-0' : 'h-[3px] my-[5px]'} bg-white rounded-full`} />
                  <div className={`${isOpen && '-rotate-45'}  duration-200 h-[3px] bg-white rounded-full`} />
              </span>
         </div>
         <nav>
             {isOpen && (
                 <Menu>
                     <div onClick={() => setOpen(!isOpen)} className="relative text-3xl">
                         <Link href={"/notams"}>
                             <h3 className="font-extrabold hover:underline cursor-pointer">News</h3>
                         </Link>
                             <MenuItem href={"/downloads"} title={"Downloads"} content={navMap.downloads} />
                             <MenuItem title={"Projects"} href={"/projects"} content={navMap.projects} />
                             <MenuItem title={"Community"} href={""} content={navMap.socials} />
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
       <nav className={`fixed w-full h-20 top-0 z-50 ${scroll ? 'transition shadow-2xl bg-navy' : 'transition bg-transparent'}`}
            unselectable={"on"}>
           <div className="fixed top-4 left-20 cursor-pointer invisible md:visible">
               <Link href={"/"}>
                   <Image src="/svg/hdbanner.svg" height={40} width={200} />
                </Link>
           </div>
           <MobileNav></MobileNav>
            <span className="flex justify-end invisible md:visible text-xl mx-24 gap-x-6">
                <NavLink href={"/notams"}>News</NavLink>
                <NavLink href={"/projects"}>Projects</NavLink>
                <NavLink href={"/downloads"}>Downloads</NavLink>
                <Dropdown>Community</Dropdown>
            </span>
       </nav>
    )
};

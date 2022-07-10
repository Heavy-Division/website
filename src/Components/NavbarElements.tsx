import { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { IoCaretUpCircleSharp } from 'react-icons/io5';

type Navprops = {
    className?: string,
    children?: ReactNode,
};

type Linkprops = {
    className?: string,
    children?: ReactNode,
};

type Dropdownprops = {
    className?: string,
    titleName: string,
    children?: ReactNode,
}

export const Nav = (props: Navprops) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const scrollHandler = () => {
            setScroll(window.scrollY > 2);
        };

        const resizeHandler = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
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
            <nav
                className={`flex fixed h-18 w-full p-1 z-10 ${scroll || isOpen ? 'transition bg-light-navy shadow-lg-dark' : 'transition bg-transparent'}`}
                onClick={handleClick}
                >
                {props.children}
            </nav>
    )
};

export const NavLink = (props: Linkprops) => {
    return (
            <Link href="/" className="flex flex-col cursor-pointer transition hover:text-blue-sky">
                {props.children}
            </Link>
    )
};

export const DropdownItem = (props: { children: ReactNode }) => (
    <li className="py-1 px-4 text-gray-200 hover:text-teal md:text-gray-700 md:hover:text-gray-900 md:hover:bg-gray-100">
        {props.children}
    </li>
);

export const Dropdown = (props: Dropdownprops) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <li className={`list-none cursor-pointer ${props.className}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <span
                draggable="false"
                onClick={() => setOpen(!isOpen)}
                className="py-5"
            >
                <span className={`inline-flex group hover:text-teal ${isOpen && 'text-blue-sky'}`}>
                    {props.titleName}
                    <IoCaretUpCircleSharp className={`${isOpen && '-rotate-180'} transition duration-200 self-center`} size={20} />
                </span>
                {isOpen && (
                    <div className="relative">
                        <ul className="flex h-fit flex-col gap-y-3 py-1 mt-4 w-56 rounded-md md:absolute md:bg-navy md:ring-1 md:shadow-lg ring-black/10">
                            {props.children}
                        </ul>
                    </div>
                )}
            </span>
        </li>
    )
};

export const NavMenu = (props: Navprops) => {
    return (
            <div className="flex relative text-lg py-2 h-fit p-1 gap-3 text-xs md:max-w-20 md:display-none">
                {props.children}
            </div>
    )
};

export const NavBtnLink = (props: Linkprops) => {
    return (
            <Link href="/" className="cursor-pointer">
                {props.children}
            </Link>
    )
};

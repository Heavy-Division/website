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
    url: string,
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
                className={`flex fixed h-18 w-full p-1 z-10 ${scroll || isOpen ? 'transition bg-slate-900 shadow-lg-dark' : 'transition bg-transparent'}`}
                onClick={handleClick}
                >
                {props.children}
            </nav>
    )
};

export const NavLink = (props: Linkprops) => {
    return (
            <Link href={props.url} className="flex flex-col cursor-pointer transition hover:text-blue-sky">
                {props.children}
            </Link>
    )
};

export const DropdownItem = (props: { children: ReactNode }) => (
    <li className="flex justify-center py-2 px-3 mx-3 text-gray-200 hover:bg-blue-tailwind rounded-md hover:cursor-pointer transition duraiton-300 md:text-gray-700 md:hover:text-gray-900 md:hover:bg-gray-100">
        {props.children}
    </li>
);

export const Dropdown = (props: Dropdownprops) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <li className={`list-none ${props.className}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <span
                draggable="false"
                onClick={() => setOpen(!isOpen)}
                className="py-5"
            >
                <span className={`inline-flex group hover:text-teal ${isOpen && 'text-blue-sky'}`}>
                    {props.titleName}
                    <IoCaretUpCircleSharp className={`${isOpen && 'rotate-180'} transition self-center mx-3`} size={20} />
                </span>
                {isOpen && (
                    <div className="absolute top-1/2 left-1/2 mt-5">
                        <ul className="flex h-fit flex-col gap-y-3 py-1 mt-3 w-56 rounded-xl md:absolute md:bg-navy md:ring-2 md:shadow-lg">
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
            <div className="flex relative text-lg py-2 h-fit p-1 gap-2 text-sm md:max-w-20 md:display-none">
                {props.children}
            </div>
    )
};

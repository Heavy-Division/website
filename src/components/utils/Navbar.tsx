import { ReactNode, useState } from 'react';
import { Dropdown } from './Dropdown';


type navItemProps = {
    children: ReactNode,
    href?: string
    className?: string
}

type NavLinkProps = {
    children: ReactNode,
}

export const NavItem = (props: navItemProps) => (
    <div className="hover:text-blue-sky font-semibold text-xl transition">
    <a href={props.href} className={props.className}>{props.children}</a>
    </div>
)
export const NavLink = (props: NavLinkProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <p>{props.children}</p>
    )
};

export const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <nav className="h-16">
            <div className="flex justify-center gap-x-16 pt-4">
                <NavItem href={"/downloads"}>Downloads</NavItem>
                <NavItem href={"/news"}>News</NavItem>
                <NavItem href={"/projects"}>Projects</NavItem>
                <Dropdown>Community</Dropdown>
            </div>
        </nav>
    )
};

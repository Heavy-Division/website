import { ReactNode, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';


type navItemProps = {
    children: ReactNode,
    href?: string
    className?: string
}

export const NavItem = (props: navItemProps) => (
    <div className="hover:text-blue-sky font-semibold text-xl transition">
    <a href={props.href} className={props.className}>{props.children}</a>
    </div>
)


export const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <nav className="mt-6">
            <div className="flex justify-center gap-x-16">
                <NavItem href={"/downloads"}>Downloads</NavItem>
                <NavItem href={"/news"}>News</NavItem>
                <NavItem href={"/projects"}>Projects</NavItem>
                <NavItem className="flex" href={"/"}>
                    <button onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}>
                        Community
                    </button>
                    <FaChevronRight className={`m-2 text-blue-sky ${isShown && 'transform rotate-90 transition'} ${!isShown && 'transition'}`}/>
                </NavItem>
            </div>
        </nav>
    )
};

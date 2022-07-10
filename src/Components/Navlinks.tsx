import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown, DropdownItem } from './Dropdown';

export type LinkProps = {
    name: string,
    path: string,
    external?: boolean,
    className?: string
};

const NavLink = ({ name, path, external, className }: LinkProps) => (
    <ul className={`transition w-full cursor-pointer hover:text-blue-sky md:text-lg text-sm ${className}`}>
        {
            external ? (
                <a href={path}>
                    <span>{name}</span>
                </a>
            ) :
                (
                    <Link href={path}>
                        <span>{name}</span>
                    </Link>
                )
        }
    </ul>
);

const NavLinks = (props: {className?: string }) => {

    return (
        <span className={`relative flex justify-right min-w-screen h-fit space-x-6 md:text-lg text-sm ${props.className}`}>
            {useRouter().pathname !== '/' && <NavLink name={"Home"} path={"/"} />}
            <NavLink name={"Downloads"} path={"/"} />
            <NavLink name={"News"} path={"/"} />
            <NavLink name={"Projects"} path={"/"} />

            <Dropdown titleName="Community">
                <DropdownItem>
                    <NavLink name={"Discord"} external path={"https://discord.gg/g4PMSnJW"} />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name={"Twitter"} path={"/"} />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name={"YouTube"} path={"/"} />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name={"Donate"} path={"/"} />
                </DropdownItem>
            </Dropdown>
        </span>
    );
};

export default NavLinks;

import { ReactNode, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';

type DropDownProps = {
    children: ReactNode,
}

type DropDownItemProps = {
    href: string,
    children: ReactNode
}

export const DropDownItem = (props: DropDownItemProps) => (
    <p className="hover:text-blue-sky text-lg hover:bg-slate-200 px-1">
    <Link href={props.href}>{props.children}</Link>
    </p>
)

export const Dropdown = (props: DropDownProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <p onMouseEnter={() => setIsShown(true)}
               onMouseLeave={() => setIsShown(false)}
                className="flex font-semibold text-xl hover:text-blue-sky cursor-pointer pb-1">
                {props.children}
                <FaChevronLeft className={`mt-[5px] ml-2 text-blue-sky ${isShown && '-rotate-90 transition'} ${!isShown && 'transition'}`}/>
            </p>
            {isShown && (
            <div onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className="absolute bg-white w-32 h-fit rounded-sm z-10 py-1">
                <ul className="flex flex-col gap-y-2 text-navy font-semibold">
                    <DropDownItem href={"/"}>Discord</DropDownItem>
                    <DropDownItem href={"/"}>Twitter</DropDownItem>
                    <DropDownItem href={"/"}>YouTube</DropDownItem>
                    <DropDownItem href={"/"}>Donate</DropDownItem>
                </ul>
            </div>
                )}
        </div>
    )
}

import { ReactNode, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import { navMap } from '../../data';

type DropDownProps = {
    children: ReactNode,
}

type DropDownItemProps = {
    href: string,
    children: ReactNode
}

export const DropDownItem = (props: DropDownItemProps) => (
    <p className="hover:text-blue-sky text-lg hover:bg-slate-200 px-2 transition">
    <Link href={props.href}>{props.children}</Link>
    </p>
)

export const Dropdown = (props: DropDownProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <Link href={"#community"}>
                <p onMouseEnter={() => setIsShown(true)}
                   onMouseLeave={() => setIsShown(false)}
                   className="text-white hover:text-blue-sky cursor-pointer text-xl mt-6 transition">
                    <span
                        draggable="false"
                        onClick={() => setIsShown(!isShown)}
                        className="inline-flex font-semibold">
                               {props.children}
                        <FaChevronLeft className={`mt-[4px] ml-1 text-blue-sky z-40 ${isShown && '-rotate-90 transition'} ${!isShown && 'transition'}`}/>
                    </span>
                </p>
            </Link>
            <div className="w-24"
                 onMouseEnter={() => setIsShown(true)}
                 onMouseLeave={() => setIsShown(false)}>
            {isShown && (
            <div className="fixed py-2 bg-white h-36 w-36 rounded-md">
                <ol className="flex flex-col gap-y-2 text-navy font-semibold">
                    <DropDownItem href={"https://discord.gg/ZtbHT7jkMW"}>Discord</DropDownItem>
                    <DropDownItem href={"https://mobile.twitter.com/heavydivsim"}>Twitter</DropDownItem>
                    <DropDownItem href={"https://www.youtube.com/channel/UCPqKuCF7oosgDfUn6jmYdgw"}>YouTube</DropDownItem>
                    <DropDownItem href={"https://opencollective.com/heavy-division-simulations/donate"}>Donate</DropDownItem>
                </ol>
            </div>
                )}
            </div>
        </div>
    )
}

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
    <p className="px-2 text-lg transition hover:bg-slate-200 hover:text-blue-sky">
        <Link href={props.href}>{props.children}</Link>
    </p>
);

export const Dropdown = (props: DropDownProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <Link href="#community">
                <p
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    className="mt-6 cursor-pointer text-xl text-white transition hover:text-blue-sky"
                >
                    <span
                        draggable="false"
                        onClick={() => setIsShown(!isShown)}
                        className="inline-flex font-semibold"
                    >
                        {props.children}
                        <FaChevronLeft className={`z-40 mt-[4px] ml-1 text-blue-sky ${isShown && '-rotate-90 transition'} ${!isShown && 'transition'}`} />
                    </span>
                </p>
            </Link>
            <div
                className="w-24"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                {isShown && (
                    <div className="fixed h-36 w-36 rounded-md bg-slate-100 py-2">
                        <ol className="flex flex-col gap-y-2 font-semibold text-navy">
                            <DropDownItem href="https://discord.gg/ZtbHT7jkMW">Discord</DropDownItem>
                            <DropDownItem href="https://mobile.twitter.com/heavydivsim">Twitter</DropDownItem>
                            <DropDownItem href="https://www.youtube.com/channel/UCPqKuCF7oosgDfUn6jmYdgw">YouTube</DropDownItem>
                            <DropDownItem href="https://opencollective.com/heavy-division-simulations/donate">Donate</DropDownItem>
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
};

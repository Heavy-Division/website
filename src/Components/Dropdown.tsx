import { ReactNode, useState } from 'react';
import { IconArrowUpCircle } from '@tabler/icons';

type DropdownProps = {
    className?: string,
    titleName: string,
    children: ReactNode
}

export const DropdownItem = (props: { children: ReactNode }) => (
    <li className="py-1 px-4 text-white hover:text-blue-sky">
        {props.children}
    </li>
);

export const Dropdown = (props: DropdownProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <ul className={`cursor-pointer ${props.className}`} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <span
                draggable="false"
                onClick={() => setIsShown(!isShown)}
                className="py-5"
            >
                <span className={`inline-flex group hover:text-blue-sky ${isShown && 'text-blue-sky'}`}>
                    {props.titleName}
                    <IconArrowUpCircle className={`${isShown && 'rotate-180'} text-blue-sky duration-300 self-center`} size={25} />
                </span>
                {isShown && (
                    <div className="relative">
                        <ul className="flex right-0 bg-slate-700 flex-col gap-y-4 py-1 mt-4 w-56 rounded-md md:absolute md:bg-slate-700 md:shadow-lg ring-black/10">
                            {props.children}
                        </ul>
                    </div>
                )}
            </span>
        </ul>
    );
};

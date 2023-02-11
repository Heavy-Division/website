import { ReactNode } from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick?: any
    onMouseEnter?: any,
    onMouseLeave?: any,
};

export const Button = (props: ButtonProps) => (
    <button
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        type="button"
        className={`duration-400 max-h-[42px] max-w-[200px] cursor-pointer transition ${props.className}`}
    >
        {props.children}
    </button>
);

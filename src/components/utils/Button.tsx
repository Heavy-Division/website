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
        className={`duration-400 shadow-lg-dark-contrast rounded-xl py-2 transition ${props.className}`}
    >
        {props.children}
    </button>
);

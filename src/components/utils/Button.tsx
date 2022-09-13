import { ReactNode } from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick?: any
    onMouseEnter?: any,
    onMouseLeave?: any,
};

export const Button = (props: ButtonProps) => {
    return (
        <button
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onClick={props.onClick}
            type="button"
            className={`transition duration-400 rounded-xl py-2 shadow-lg-dark-contrast ${props.className}`}
        >
            {props.children}
        </button>
    );
}


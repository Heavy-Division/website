import { ReactNode } from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick?: any
};

export const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            type="button"
            className={`transition rounded-xl py-2 shadow-lg-dark-contrast ${props.className}`}
        >
            {props.children}
        </button>
    );
}


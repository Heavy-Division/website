import { ReactNode } from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick?: any
};

const Button = (props: ButtonProps) => (
    <button
        onClick={props.onClick}
        type="button"
        className={`transition rounded-xl py-2 shadow-lg-dark-contrast ${props.className}`}
    >
        {props.children}
    </button>
);

export default Button;

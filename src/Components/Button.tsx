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
        className={`transition rounded-3xl py-2 text-xl shadow-md-dark-contrast font-bold ${props.className}`}
    >
        {props.children}
    </button>
);

export default Button;

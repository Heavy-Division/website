import { ReactNode } from 'react';

export const Container = (props: {className?: string, children?: ReactNode}) => (
    <div className={`px-page container ${props.className}`}>
        {props.children}
    </div>
);

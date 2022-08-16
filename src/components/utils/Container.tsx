import { ReactNode } from 'react';

export const Container = (props: {className?: string, children?: ReactNode}) => {
    return (
        <div className={`container px-page ${props.className}`}>
            {props.children}
        </div>
    );
}



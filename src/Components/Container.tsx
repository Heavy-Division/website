import { ReactNode } from 'react';

const Container = (props: {className?: string, children?: ReactNode}) => (
    <div className={`px-auto max-w-7xl bg-navy w-screen ${props.className}`}>
        {props.children}
    </div>
);

export default Container;

import { useEffect, useState } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

export const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const listener = () => {
            setVisible(window.scrollY > 80);
        };
        window.addEventListener('scroll', listener);

        return () => window.removeEventListener('scroll', listener);
    });

    function handleClick() {
        window.scrollTo({ top: 0 });
    }

    return (
        <>
            {visible && (
                <div className="fixed top-3/4 right-4 w-8 h-8 bg-white rounded-md">
                <BsFillArrowUpSquareFill onClick={handleClick} className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-emerald-500 cursor-pointer" />
                </div>
            )}
        </>
    );
};

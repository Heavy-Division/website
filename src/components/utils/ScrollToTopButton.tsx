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
                <div className="fixed bottom-12 right-4 h-8 w-8 rounded-md bg-white">
                    {/* eslint-disable-next-line react/jsx-no-bind */}
                    <BsFillArrowUpSquareFill onClick={handleClick} className="relative top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-emerald-500" />
                </div>
            )}
        </>
    );
};

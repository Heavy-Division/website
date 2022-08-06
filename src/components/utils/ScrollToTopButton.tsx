import { useEffect, useState } from 'react';
import { IoCaretUpCircle } from 'react-icons/io5';

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
                <IoCaretUpCircle type="button" onClick={handleClick} className="fixed right-0 bottom-0 h-10 w-10 z-50 text-blue-sky m-8 rounded-xl cursor-pointer transition duration-300 hover:-translate-y-1 focus:outline-none" />
            )}
        </>
    );
};

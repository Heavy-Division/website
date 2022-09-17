import { Container } from '../utils';
import { Card } from '../utils';
import { cardData } from '../../data';
import { useEffect, useState } from 'react';

export const Features = () => {
    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth >= 768) {
                setWhite(false);
            }
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

        const [white, setWhite] = useState(true);
    return (
        <section id="features" className="w-screen bg-white md:py-8 md:px-8">
                <div className="grid grid-cols-1 place-items-center mx-auto gap-y-4 lg:grid-cols-2 2xl:grid-cols-3 md:gap-4 md:px-6">
                    <div className="h-[270px] p-10">
                        <div>
                           <p className="flex justify-center text-5xl text-navy font-extrabold underline underline-offset-8 decoration-8 decoration-blue-tailwind">
                               Features
                            </p>
                            <p className="flex justify-center text-navy font-semibold text-center text-3xl mt-2">
                                Enhancements B78XH brings to your flying experience
                            </p>
                        </div>
                    </div>
                    {cardData.features.map(({title, body, image}) => {
                        return <Card key={title}
                                     title={title}
                                     body={body} image={image} />
                    })}
                </div>
        </section>
    )
};


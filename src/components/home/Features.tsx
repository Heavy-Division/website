import { motion } from 'framer-motion';
import { Card } from '../utils';
import { cardData } from '../../data';

export const Features = () => (
    <section id="features" className="w-screen bg-white">
        <div
            className="mx-auto grid grid-cols-1 place-items-center md:gap-4 lg:grid-cols-2 2xl:grid-cols-3 py-10"
        >
            <div className="h-[270px] p-10">
                <div>
                    <p className="flex justify-center text-5xl font-extrabold text-navy underline decoration-blue-tailwind decoration-8 underline-offset-8">
                        Features
                    </p>
                    <p className="mt-2 flex justify-center text-center text-3xl font-semibold text-navy">
                        Enhancements B78XH brings to your flying experience
                    </p>
                </div>
            </div>
            {cardData.features.map(({ title, body, image }) => (
                <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        x: { duration: 1 },
                        default: { ease: 'linear' },
                    }}
                    viewport={{ once: true }}
                >
                    <Card
                        key={title}
                        title={title}
                        body={body}
                        image={image}
                    />
                </motion.div>
            ))}
        </div>
    </section>
);

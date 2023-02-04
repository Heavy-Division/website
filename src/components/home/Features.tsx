import { motion } from 'framer-motion';
import { Card, Container } from '../utils';
import { cardData } from '../../data';

export const Features = () => (
    <section id="features" className="w-screen bg-white">
        <Container className="mx-auto">
            <div
                className="grid grid-cols-1 place-items-center py-10 md:max-w-7xl gap-4 lg:grid-cols-2 2xl:grid-cols-3"
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
                {cardData.features.map(({ title, body, image, height, width, alt }) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            opacity: { duration: 0.3 },
                            default: { ease: 'linear' },
                        }}
                        viewport={{ once: true }}
                    >
                        <Card
                            key={title}
                            title={title}
                            body={body}
                            image={image}
                            width={width}
                            height={height}
                            alt={alt}
                        />
                    </motion.div>
                ))}
            </div>
        </Container>
    </section>
);

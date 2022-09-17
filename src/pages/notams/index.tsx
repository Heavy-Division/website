import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPostListings, PostListing } from '../../lib/notams/posts';
import { Container } from '../../components/utils';

export type BlogProps = { listings: PostListing[] }

const Blog = ({ listings }: BlogProps) => (
    <section className="min-h-screen">
        <Container
            className="grid gap-8 py-14 pt-24 max-w-7xl md:grid-cols-2 mx-auto"
        >
            {listings.map(({
                               id,
                               date,
                               title,
                               authors,
                               readingStats,
                               category,
                               metaImage,
                               metaAlt,
                           }, index) => (
                <Link key={id} href={`/notams/${id}`}>
                    <div className={`
                                ${index === 0 ? 'md:col-span-2' : 'brightness-90 hover:brightness-100'}
                                bg-navy
                                flex flex-col
                                rounded-lg
                                transition
                                ring-1
                                overflow-hidden
                                hover:ring-2
                                ring-gray-700
                                hover:shadow-lg
                                hover:ring-blue-sky
                                cursor-pointer`}
                    >
                        {metaImage
                            ? (
                                <Image
                                    width={1000}
                                    height={350}
                                    objectFit="cover"
                                    draggable="false"
                                    src={metaImage}
                                    alt={metaAlt}
                                />
                            )
                            : <></>}
                        <Container className="py-7">
                            <div className="flex flex-wrap gap-x-4 md:text-lg text-md">
                                {category === 'Announcements'
                                    ? (
                                        <p
                                            className="font-bold text-blue-sky"
                                        >
                                            {category}
                                        </p>
                                    )
                                    : (
                                        <p
                                            className="self-center p-2 font-bold text-amber-600 rounded-md ring-2 ring-amber-600 text-md"
                                        >
                                            {category}
                                        </p>
                                    )}
                                {index === 0
                                    ? (
                                        <span className="self-center p-2 font-semibold rounded-md ring-2 ring-blue-sky text-blue-sky text-md">LATEST</span>
                                    ) : <></>}
                                <em className="self-end text-gray-300">
                                    {readingStats.text}
                                </em>
                            </div>
                            <h1 className="mt-32">
                                {title}
                            </h1>
                            <div className="flex flex-col">
                                <p className="font-semibold">
                                    Written by
                                    {' '}
                                    {authors.join(', ')}
                                </p>
                                <em className="text-gray-100">
                                    Posted:
                                    {' '}
                                    {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                                </em>
                            </div>
                        </Container>
                    </div>
                </Link>
            ))}
        </Container>
    </section>
);

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const listings = getPostListings();

    return { props: { listings } };
};

export default Blog;

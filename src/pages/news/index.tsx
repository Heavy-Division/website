// source code modified from https://github.com/flybywiresim/website

import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPostListings, PostListing } from '../../lib/news/posts';
import { Container } from '../../components/utils';

export type BlogProps = { listings: PostListing[] }

const Blog = ({ listings }: BlogProps) => (
    <section className="min-h-screen">
        <Container
            className="mx-auto grid max-w-7xl gap-8 py-14 pt-24 md:grid-cols-2"
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
                <Link key={id} href={`/news/${id}`}>
                    <div className={`
                                ${index === 0 ? 'md:col-span-2' : 'brightness-90 hover:brightness-100'}
                                ring-gray-700
                                flex cursor-pointer
                                flex-col
                                overflow-hidden
                                rounded-lg
                                bg-navy
                                ring-1
                                transition
                                hover:shadow-lg
                                hover:ring-2
                                hover:ring-blue-sky`}
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
                            <div className="text-md flex flex-wrap gap-x-4 md:text-lg">
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
                                            className="text-md self-center rounded-md p-2 font-bold text-amber-600 ring-2 ring-amber-600"
                                        >
                                            {category}
                                        </p>
                                    )}
                                {index === 0
                                    ? (
                                        <span className="text-md self-center rounded-md p-2 font-semibold text-blue-sky ring-2 ring-blue-sky">LATEST</span>
                                    ) : <></>}
                                <em className="text-gray-300 self-end">
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

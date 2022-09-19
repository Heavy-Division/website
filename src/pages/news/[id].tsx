// source code modified from https://github.com/flybywiresim/website

import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import nodeHtmlToImage from 'node-html-to-image';
import { v4 } from 'uuid';
import * as fs from 'fs';
import Head from 'next/head';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/news/posts';
import { Container } from '../../components/utils';

const NEWS_EMBED_PREVIEWS_DIR = 'public/img/news-embed-previews';
const NEWS_EMBED_PREVIEWS_PUBLIC_DIR = 'img/news-embed-previews';

export type PostProps = { content: PostContent, embedPreviewPath: string }

const Post = ({ content: { authors, category, contentHtml, date, readingStats, title, metaImage, metaAlt }, embedPreviewPath }: PostProps) => (
    <>
        <Head>
            <title>
                {title}
                {' '}
                - Heavy Division
            </title>

            <meta name="twitter:card" content="summary_large_image" />

            <meta key="og:type" name="og:type" content="object" />
            <meta key="og:site_name" name="og:site_name" content="Heavy Division" />
            <meta key="og:title" name="og:title" content={title} />
            <meta key="og:description" name="og:description" content="A post on the Heavy Division website" />
            <meta key="og:image" name="og:image" content={`https://hdsimulations.com/${embedPreviewPath}`} />
            <meta key="og:image:alt" name="og:image:alt" content={`${title} - Heavy Division`} />
            <meta key="og:image:width" name="og:image:width" content="1200" />
            <meta key="og:image:height" name="og:image:height" content="600" />
            <meta name="twitter:image" content={embedPreviewPath} />
        </Head>

        <section className="mt-48 bg-white">
            <div className="relative bg-navy">
                <div className="absolute h-full w-full opacity-30">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        draggable="false"
                        src={metaImage}
                        alt={metaAlt}
                        className="blur-sm"
                    />
                </div>

                <Container className="h-160 relative bottom-16 flex max-w-7xl flex-col justify-end">
                    <div className="flex text-xl">
                        {category === 'Announcements'
                            ? (
                                <p className="font-black text-blue-sky">{category}</p>
                            )
                            : (
                                <p className="font-black text-amber-600">{category}</p>
                            )}
                        <span className="text-gray-300 pl-2">
                            {readingStats.text}
                        </span>
                    </div>

                    <h1 className="mt-10">{title}</h1>
                    <p className="text-gray-100 font-semibold">
                        {'Written by '}
                        {authors.join(', ')}
                    </p>
                    <p className="text-gray-300">
                        {'Posted: '}
                        {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                    </p>

                </Container>
            </div>

            <article
                className="prose-md px-page prose mx-auto py-16 text-black"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </section>
    </>
);

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
    if (params?.id) {
        const content = await getPostContent(params?.id as string);

        if (!fs.existsSync(NEWS_EMBED_PREVIEWS_DIR)) {
            fs.mkdirSync(NEWS_EMBED_PREVIEWS_DIR);
        }

        const metaImageData = fs.readFileSync(`public${content.metaImage}`);
        const base64Image = Buffer.from(metaImageData).toString('base64');
        const dataURI = `data:image/jpeg;base64,${base64Image}`;

        const html = fs.readFileSync('src/lib/news/preview.html').toString();

        const previewFileName = `${v4()}.png`;

        await nodeHtmlToImage({
            output: `${NEWS_EMBED_PREVIEWS_DIR}/${previewFileName}`,
            html,
            content: {
                title: content.title,
                category: content.category,
                readingStats: content.readingStats.text,
                authors: content.authors.join(', '),
                date: content.date,
                metaImage: dataURI,
            },
            puppeteerArgs: {
                headless: true,
                args: [
                    '--no-sandbox',
                ],
            },
        });

        return { props: { content, embedPreviewPath: `${NEWS_EMBED_PREVIEWS_PUBLIC_DIR}/${previewFileName}` } };
    }

    return Promise.reject(new Error('no id parameter'));
};

export default Post;

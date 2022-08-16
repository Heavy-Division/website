import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.GRAPHCMS_SECRET;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
            edges {
                node {
                    author {
                        bio
                        name
                        id
                        image {
                            url
                        }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredImage {
                        url
                    }
                    categories {
                        name
                        slug
                    }
                }
            }
        }
    }`
    const results = await request(graphqlAPI, query);
}

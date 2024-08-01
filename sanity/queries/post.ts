import { groq } from 'next-sanity';
import { client } from '../lib/client'

export type Post = {
  title?: string;
  slug?: {
    current: string;
  };
  author: string;
  imageUrl: string;
  publishedAt: string;
};


const posts = groq`*[_type == 'post'] {
  title,
  slug,
  "author": author->name,
  "imageUrl": mainImage.asset->url,
  categories,
  publishedAt,
  body
}`;

export async function getPosts() {
  return await client.fetch(posts, {revalidate: new Date().getMinutes()});
}


export const revalidate = 0;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPosts, Post } from "@/sanity/queries/post";

const BlogPage: React.FC = async () => {
  const postData: Post[] = await getPosts();
  console.log(postData);

  return (
    <section
      id="section"
      className="py-24 sm:py-24  w-full justify-center flex items-center bg-black"
    >
      <div className="container" id="container">
        <div className="">
          <div className="text-white text-6xl font-bebas">
            <h1>Our Blogs</h1>
          </div>
          <div className="grid justify-between w-full gap-6 grid-cols-1 md:grid-cols-3">
            {postData.map((post, index) => (
              <Link key={index} href={`blog/${post.slug?.current}` || ""}>
                <div className="w-full flex flex-col justify-between h-full col-span-1 group shrink-0 border border-white px-3 py-2">
                  <div className="flex flex-col">
                    <h2 className="text-white text-xl">{post.title}</h2>
                  </div>
                  <div className="h-[350px] w-full overflow-hidden">
                    <div className="flex justify-between w-full mb-6">
                      <span className="text-white text-sm">{post.author}</span>
                      <span className="text-white text-sm">
                        {post.publishedAt}
                      </span>
                    </div>
                    <Image
                      src={post.imageUrl}
                      alt={post.title || ""}
                      width={600}
                      height={450}
                      className=" w-full group-hover:scale-110 duration-300 h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

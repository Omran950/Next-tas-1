import Link from "next/link";
import React from "react";
import Card from "./Card";

const Blog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className=" p-6">
      {posts.map((post) => (
        <div key={post.id} className="cursor-pointer">
          <Link href={`/post/${post.id}`}>
            <Card title={post.title} body={post.body} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;

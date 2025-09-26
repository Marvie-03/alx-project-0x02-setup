import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC = () => {
  const [posts, setPosts] = React.useState<any[]>([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-5xl font-bold text-white mb-6">Posts Page</h1>
        <div className="w-full flex flex-col items-center">
          {posts.map((post) => (
            <PostCard key={post.id} userId={post.userId} title={post.title} content={post.body} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Posts;

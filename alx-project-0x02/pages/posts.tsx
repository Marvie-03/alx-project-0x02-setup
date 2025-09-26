import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface PostsPageProps {
  posts: Array<{
    id: number;
    userId: number;
    title: string;
    body: string;
  }>;
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
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

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Posts;

import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import React from "react";
import { CardProps } from "@/interfaces";

const Home: React.FC = () => {
  const [cardContent, setCardContent] = React.useState<CardProps[]>([
    {id: 1, title: "Card 1", content: "A lot of words"},
    {id: 2, title: "Card 2", content: "A lot of words"},
  ]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleAddPost = (data: { title: string; content: string }) => {
    setCardContent(prev => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        title: data.title,
        content: data.content,
      },
    ]);
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We&apos;re glad you&apos;re here. Explore and enjoy your experience.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Add Post
          </button>
        </div>
      </main>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
      <div className="w-full flex flex-wrap">
        {cardContent.map((content) => (
          <Card key={content.id} {...content} />
        ))}
      </div>
    </div>
  )
}

export default Home;
import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC = () => {
  const [users, setUsers] = React.useState<UserProps[]>([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-5xl font-bold text-white mb-6">Users Page</h1>
        <div className="w-full flex flex-col items-center">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Users;

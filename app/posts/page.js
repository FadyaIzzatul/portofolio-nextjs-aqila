// src/app/posts/page.js

"use client";

import { useState, useEffect } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("1. Mulai mengambil data...");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        console.log("2. Response:", response.status);

        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }

        const data = await response.json();

        console.log("3. Data berhasil:", data);

        setPosts(data);
      } catch (err) {
        console.error("4. Error:", err);
        setError(err.message);
      } finally {
        console.log("5. Fetch selesai");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-10">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        Error: {error}
      </p>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 font-heading">
        Daftar Postingan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg p-4 shadow-md bg-white hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2 font-heading truncate">
              {post.title}
            </h2>

            <p className="text-gray-700">
              {post.body.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
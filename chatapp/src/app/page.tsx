"use client";
// pages/index.js
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur le Chat</h1>
        <p className="text-gray-600 mb-8">
          Connectez-vous pour commencer à discuter
        </p>
        <Link
          href="/connexion"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Se connecter
        </Link>
      </div>
    </div>
  );
};

export default Home;

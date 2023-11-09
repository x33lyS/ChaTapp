"use client";
import { useState } from "react";

const Connexion = () => {
  const [pseudo, setPseudo] = useState("");

  const handlePseudoChange = (event: any) => {
    setPseudo(event.target.value);
  };
  const handleConnexion: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    const pseudoInput = document.getElementById("pseudo") as HTMLInputElement;
    const pseudo = pseudoInput.value;

    try {
      const response = await fetch(`/api/connexion?pseudo=${pseudo}`);
      const jsonData = await response.json(); // Récupérer directement en JSON
      const userId = jsonData.userId;
      localStorage.setItem("pseudo", pseudo);
      localStorage.setItem("userId", userId);
    } catch (error) {
      console.error("Error connecting:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">Connexion</h1>
        <div className="mb-4">
          <label htmlFor="pseudo" className="block text-gray-600">
            Pseudo
          </label>
          <input
            type="text"
            id="pseudo"
            value={pseudo}
            onChange={handlePseudoChange}
            placeholder="Entrez votre pseudo"
            className="w-full border p-2 rounded mt-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleConnexion}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default Connexion;

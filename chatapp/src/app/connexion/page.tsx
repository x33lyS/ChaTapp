"use client";
import { useState } from "react";

const Connexion = () => {
  const [pseudo, setPseudo] = useState("");

  const handlePseudoChange = (event: any) => {
    setPseudo(event.target.value);
  };
  const handleConnexion: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
  
    const pseudoInput = document.getElementById('pseudo') as HTMLInputElement;
    const pseudo = pseudoInput.value;
  
    try {
      const response = await fetch(`/api/connexion?pseudo=${pseudo}`);
      const jsonData = await response.json(); // Récupérer directement en JSON  
      const userId = jsonData.userId;
      localStorage.setItem('pseudo', pseudo);
      localStorage.setItem('userId', userId);
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };
  
  

  return (
    <div>
      <h1>Connexion</h1>
      <label htmlFor="pseudo">Pseudo:</label>
      <input
        type="text"
        id="pseudo"
        value={pseudo}
        onChange={handlePseudoChange}
      />
      <button onClick={handleConnexion}>Connexion</button>
    </div>
  );
};

export default Connexion;

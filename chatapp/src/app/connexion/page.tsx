"use client"
import { useState } from 'react';

const Connexion = () => {
  const [pseudo, setPseudo] = useState('');

  const handlePseudoChange = (event:any) => {
    setPseudo(event.target.value);
  };

  const handleConnexion = async () => {
    try {
      const response = await fetch(`/api/connexion?pseudo=${pseudo}`);
      const data = await response.json();

      if (data && data.existe) {
        // Pseudo existant, vous pouvez rediriger l'utilisateur ou effectuer d'autres actions
        console.log('Pseudo existant');
      } else {
        // Pseudo non trouvé
        console.log('Pseudo non trouvé');
      }
    } catch (error) {
      console.error('Erreur lors de la vérification du pseudo en BDD', error);
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <label htmlFor="pseudo">Pseudo:</label>
      <input type="text" id="pseudo" value={pseudo} onChange={handlePseudoChange} />
      <button onClick={handleConnexion}>Se connecter</button>
    </div>
  );
};

export default Connexion;

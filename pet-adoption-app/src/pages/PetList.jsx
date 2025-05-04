import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'pets'));
        const petData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPets(petData);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="pet-grid">
  {pets.map(pet => (
    <div key={pet.id} className="pet-card">
      <h3>{pet.name} ({pet.type})</h3>
      <p><strong>Age:</strong> {pet.age} years old</p>
      <p><strong>Description:</strong> {pet.description}</p>
      
      <button className="adopt-btn" onClick={() => alert(`You clicked Adopt on ${pet.name}`)}>
        🐾 Adopt
      </button>
    </div>
  ))}
</div>
  );
};

export default PetList;
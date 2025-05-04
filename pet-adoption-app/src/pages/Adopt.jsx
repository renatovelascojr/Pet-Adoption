import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // adjust path if needed

const Adopt = () => {
  const location = useLocation();
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const typeFilter = queryParams.get('type');

  useEffect(() => {
    const fetchPets = async () => {
      const petSnapshot = await getDocs(collection(db, 'pets'));
      const petData = petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPets(petData);
    };

    fetchPets();
  }, []);

  useEffect(() => {
    if (typeFilter) {
      setFilteredPets(pets.filter(pet => pet.type.toLowerCase() === typeFilter));
    } else {
      setFilteredPets(pets);
    }
  }, [pets, typeFilter]);

  return (
    <div className="pet-list">
      <h2>Available {typeFilter ? typeFilter + 's' : 'Pets'} for Adoption</h2>
      <div className="pet-grid">
        {filteredPets.map(pet => (
          <div className="pet-card" key={pet.id}>
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Age: {pet.age}</p>
            <p>{pet.description}</p>
            <button className="adopt-btn" onClick={() => alert(`You clicked Adopt on ${pet.name}`)}>
        🐾 Adopt
      </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopt;
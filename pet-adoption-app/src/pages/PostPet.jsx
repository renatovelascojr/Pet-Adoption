import React, { useState } from 'react';
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/PostPet.css';

const PostPet = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age || !type || !description) {
      toast.error("Please fill in all fields!");
      return;
    }

    const petData = {
      name,
      age,
      type,
      description,
    };

    try {
      await addDoc(collection(db, "pets"), petData);
      toast.success("Pet posted successfully!");
      setName('');
      setAge('');
      setType('');
      setDescription('');
    } catch (error) {
      toast.error("Error adding pet. Try again.");
      console.error("Error adding pet: ", error);
    }
  };

  return (
    <div className ="postContainer">
      <h2 className="postHeader">Post a Pet for Adoption</h2>
      <form onSubmit={handleSubmit} className ="postForm">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Pet's Name"
          className ="postInput"
         
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Pet's Age"
          className ="postInput"
        />
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Pet's Type (Cat/Dog)"
          className ="postInput"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Pet's Description"
          rows="4"
          className ="postTextarea"
        />
        <button type="submit" className ="postButton">Post Pet</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PostPet;
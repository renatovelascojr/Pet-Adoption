import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase'; // adjust path as needed
import { signOut } from 'firebase/auth';
import Home from './Home';

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  if (!user) return < Home />;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome, {user.displayName}!</h1>
      <img 
        src={user.photoURL} 
        alt="Profile" 
        style={{ borderRadius: '50%', width: '120px', height: '120px', objectFit: 'cover', marginTop: '1rem' }} 
      />
      <p>Email: {user.email}</p>
      <button 
        onClick={() => signOut(auth)} 
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
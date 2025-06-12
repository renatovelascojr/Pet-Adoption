  import React, { useEffect, useState } from 'react';
  import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
  import Home from './pages/Home';
  import PostPet from './pages/PostPet';
  import Adopt from './pages/Adopt';
  import { DarkModeProvider } from './DarkModeContext';
  import logo from './assets/furry-friends-logo.png';
  import Login from './pages/Login';
  import PrivacyPolicy from './pages/PrivacyPolicy';
  import PrivateRoute from './pages/PrivateRoute';
  import DataDeletion from './pages/DataDeletion';
  import Footer from './pages/Footer';
  import Profile from './pages/Profile';
  import { auth } from './pages/firebase';
  import { onAuthStateChanged, signOut } from 'firebase/auth';

  function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
      try {
        await signOut(auth);
        setUser(null);
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

    return (
      <DarkModeProvider>
        <Router basename="/Pet-Adoption">
          <div className="App">
            {/* 🐾 Logo */}
            <Link to="/" style={{ display: 'inline-block' }}>
              <img
                src={logo}
                alt="Furry Friends Logo"
                style={{
                  height: '80px',
                  width: '100px',
                  cursor: 'pointer',
                  border: '8px',
                  borderRadius: '8px',
                  outline: 'none',
                  background: 'transparent',
                  padding: 0,
                  margin: 0,
                  display: 'block',
                  position: 'fixed',
                  top: '20px',
                  left: '50px',
                  zIndex: 2000
                }}
              />
            </Link>

            {/* 🧭 Navigation */}
            <nav className="top-nav" style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px', gap: '10px' }}>
              {!user && <Link className="signIn" to="/login">Sign In</Link>}
              {user && (
                <>
                  <Link className="profileBtn" to="/profile">Profile</Link>
                  <button onClick={handleSignOut} style={{ cursor: 'pointer' }} className="signOutBtn">Sign Out</button>
                </>
              )}
              <Link className="postaPet" to="/post">Post a Pet</Link>
              
            </nav>
          
              
            {/* 🚏 Route Views */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/post" element={
                <PrivateRoute>
                  <PostPet />
                </PrivateRoute>
              } />
              <Route path="/adopt" element={<Adopt />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/data-deletion" element={<DataDeletion />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </DarkModeProvider>
    );
  }

  export default App;
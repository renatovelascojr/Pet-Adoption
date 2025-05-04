import React from 'react';


const DataDeletion = () => {
  return (
    <div className="auth-container">
      <h2>Request Data Deletion</h2>
      <p>We're sorry to see you go! If you would like to delete your data and account, please submit your request below.</p>

      <form>
        <input
          type="email"
          placeholder="Enter your registered email"
          required
        />
        <button type="submit">Request Data Deletion</button>
      </form>

      <p>Once we process your request, your account and all personal data will be permanently deleted.</p>
    </div>
  );
};

export default DataDeletion;
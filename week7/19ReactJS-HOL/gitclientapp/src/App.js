import React, { useState, useEffect } from 'react';
import GitClient from './GitClient';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const username = 'techiesyed';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoNames = await GitClient.getRepositories(username);
        setRepos(repoNames);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>📦 GitHub Repositories for <span>{username}</span></h1>
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">Failed to fetch repositories.</p>}
      {!loading && !error && (
        <ul>
          {repos.map((repo, index) => (
            <li key={index}>{repo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

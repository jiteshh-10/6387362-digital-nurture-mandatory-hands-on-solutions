import axios from 'axios';

class GitClient {
  static async getRepositories(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      return response.data.map(repo => repo.name);
    } catch (error) {
      throw new Error('Unable to fetch repositories');
    }
  }
}

export default GitClient;

import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const mockRepos = [
      { name: 'project-one' },
      { name: 'project-two' }
    ];
    axios.get.mockResolvedValue({ data: mockRepos });

    const result = await GitClient.getRepositories('techiesyed');
    expect(result).toEqual(['project-one', 'project-two']);
  });
});

/* eslint-disable @typescript-eslint/no-unused-vars */
import { IGitHubService } from '../IGitHubService';

class GitHubServiceMock implements IGitHubService {
  searchReposByUserName(user: string) {
    return Promise.resolve(
      {
        data: [
          {
            name: 'aula-react-busca-cep',
            owner: {
              login: 'mock',
            },
            fork: true,
          },
          {
            name: 'be-the-hero',
            owner: {
              login: 'mock',
            },
            fork: false,
          },
        ],
      },
    );
  }
  searchBranchesByName(user: string, repository: string) {
    return Promise.resolve(
      {
        data: [
          {
            name: 'master',
            commit: {
              sha: 'f8480e2424c0f5935c3dce747a2e66ff66977994',
            },
          },
        ],
      },
    );
  }
}

export { GitHubServiceMock };

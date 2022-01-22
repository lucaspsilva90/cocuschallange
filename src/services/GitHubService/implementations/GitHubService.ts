import { Octokit } from '@octokit/rest';

import { IGitHubService } from '../IGitHubService';

class GitHubService implements IGitHubService {
  private octokit = new Octokit({
    auth: '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',
  });

  async searchReposByUserName(user: string) {
    const response = await this.octokit.request(`GET /users/${user}/repos`);
    return response;
  }

  async searchBranchesByName(user: string, repository: string) {
    const { data } = await this.octokit.request(`GET /repos/${user}/${repository}/branches`);
    return data;
  }
}

export { GitHubService };

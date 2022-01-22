import { Octokit } from '@octokit/rest';

import { config } from '../../../config'
import { IGitHubService } from '../IGitHubService';

class GitHubService implements IGitHubService {
  private octokit = new Octokit({
    auth: config.gitHubToken,
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

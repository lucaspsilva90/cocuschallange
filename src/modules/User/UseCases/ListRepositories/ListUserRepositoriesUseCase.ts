import { inject, injectable } from 'tsyringe';

import { GitHubService } from '../../../../services/GitHubService';
import { User } from '../../Entities/User';

@injectable()
class ListUserRepositoriesUseCase {
  constructor(
    @inject('GitHubService')
    private gitHubService: GitHubService,
  ) { }

  async getAndParseBranchData(user: string, repository: string) {
    const data = await this.gitHubService.searchBranchesByName(user, repository);
    const branchData = data.map((branch: object[]) => ({
      name: branch.name,
      lastCommit: branch.commit.sha,
    }));
    return branchData;
  }

  async getAndParseUserData(user: string) {
    const { data } = await this.gitHubService.searchReposByUserName(user);

    const userData = await Promise.all(data.map(async (repository: object) => ({
      ownerUsername: repository.owner.login,
      repositoryName: repository.name,
      branches: await this.getAndParseBranchData(user, repository.name),
    })));
    return userData;
  }

  async execute(user: string): Promise<User> {
    const response = this.getAndParseUserData(user);
    return response;
  }
}

export { ListUserRepositoriesUseCase };

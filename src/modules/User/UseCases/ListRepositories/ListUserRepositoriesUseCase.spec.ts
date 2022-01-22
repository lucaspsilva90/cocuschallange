import { GitHubServiceMock } from '../../../../services/GitHubService/mocks/GitHubServiceMock';
import { ListUserRepositoriesUseCase } from './ListUserRepositoriesUseCase';

let listUserRepositoriesUseCase: ListUserRepositoriesUseCase;
let gitHubService: GitHubServiceMock;

describe('List the repositories and branches of the given user', () => {
  beforeEach(() => {
    gitHubService = new GitHubServiceMock();
    listUserRepositoriesUseCase = new ListUserRepositoriesUseCase(gitHubService);
  });

  it('Should receive the result contaning the expected data', async () => {
    const result = await listUserRepositoriesUseCase.execute('mock');

    expect(result[0].ownerUsername).toBe('mock');
    expect(result[0].repositoryName).toBe('be-the-hero');
    expect(result[0].branches[0].name).toBe('master');
    expect(result[0].branches[0].lastCommit).toBe('f8480e2424c0f5935c3dce747a2e66ff66977994');
  });
});

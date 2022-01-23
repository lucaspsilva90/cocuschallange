interface RepositoryResponse {
  data: {
      name: string
      owner: {
        login: string
      }
      fork: boolean
    }[]
}

interface BranchResponse {
  data: {
      name: string
      commit: {
        sha: string
      }
    }[]
}

interface IGitHubService {
  searchReposByUserName(user: string): Promise<RepositoryResponse>
  searchBranchesByName(user: string, repository: string): Promise<BranchResponse>
}

export { IGitHubService };

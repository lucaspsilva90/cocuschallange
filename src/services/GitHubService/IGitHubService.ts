interface IGitHubService {
    searchReposByUserName(user: string)
    searchBranchesByName(user: string, repository: string)
}

export { IGitHubService };

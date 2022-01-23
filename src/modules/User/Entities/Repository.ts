interface Repository {
  name: string;
  owner: {
    login: string,
  };
  fork: boolean
}

export { Repository };

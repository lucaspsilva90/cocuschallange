import dotenv from 'dotenv';

dotenv.config();

const config = {
  gitHubToken: process.env.GITHUB_TOKEN,
};

export { config };

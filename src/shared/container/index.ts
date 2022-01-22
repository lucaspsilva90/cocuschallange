import 'reflect-metadata';
import { container } from 'tsyringe';

import { GitHubService } from '../../services/GitHubService/implementations/GitHubService';

container.registerSingleton<GitHubService>('GitHubService', GitHubService);

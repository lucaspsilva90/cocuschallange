import 'reflect-metadata';
import { container } from 'tsyringe';

import { GitHubService } from '../../services/GitHubService';

container.registerSingleton<GitHubService>('GitHubService', GitHubService);

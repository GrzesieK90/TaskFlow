export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  createdAt: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  private: boolean;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high';
  tasks: Task[];
  createdAt: string;
  updatedAt?: string;
  dueDate: string;
  githubRepo?: GitHubRepo | null;
  repoUrl?: string;         
}

export interface GitHubCommit {
  sha: string;
  message: string;
  author: {
    name: string;
    email: string;
    date: string;
  };
  html_url: string;
}

export interface GitHubStats {
  stars: number;
  forks: number;
  watchers: number;
  issues: number;
  contributors: number;
  lastUpdate: string;
  language: string;
  license: string;
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  state: 'open' | 'closed';
  html_url: string;
  created_at: string;
  updated_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: {
    name: string;
    color: string;
  }[];
}

export interface GitHubPullRequest {
  id: number;
  number: number;
  title: string;
  state: 'open' | 'closed' | 'merged';
  html_url: string;
  created_at: string;
  updated_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  head: {
    ref: string;
  };
  base: {
    ref: string;
  };
}

export interface ProjectStats {
  total: number;
  byStatus: {
    active: number;
    completed: number;
    'on-hold': number;
  };
  byPriority: {
    high: number;
    medium: number;
    low: number;
  };
  tasksStats: {
    total: number;
    completed: number;
    inProgress: number;
    todo: number;
    overdue: number;
  };
  githubStats: {
    totalRepos: number;
    totalIssues: number;
    totalPRs: number;
    totalCommits: number;
  };
}

export interface TimelineItem {
  id: string;
  type: 'task' | 'project';
  title: string;
  date: string;
  status: string;
  priority?: string;
  projectId?: string;
  projectTitle?: string;
}

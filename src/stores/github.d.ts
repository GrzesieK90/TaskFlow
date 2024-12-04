import type { GitHubRepo, GitHubCommit, GitHubStats, GitHubIssue, GitHubPullRequest } from '@/types';
interface GithubState {
    repo: GitHubRepo | null;
    commits: GitHubCommit[];
    repoStats: GitHubStats | null;
    issues: GitHubIssue[];
    pullRequests: GitHubPullRequest[];
    error: string | null;
    loading: boolean;
}
export declare const useGithubStore: import("pinia").StoreDefinition<"github", GithubState, {}, {
    searchRepository(query: string): Promise<void>;
    fetchCommits(owner: string, repo: string): Promise<void>;
    fetchRepoStats(owner: string, repo: string): Promise<void>;
    fetchIssues(owner: string, repo: string): Promise<void>;
    fetchPullRequests(owner: string, repo: string): Promise<void>;
    searchRepositories(query: string): Promise<GitHubRepo[]>;
    clearError(): void;
}>;
export {};

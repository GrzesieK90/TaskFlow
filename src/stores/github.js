import { defineStore } from 'pinia';
export const useGithubStore = defineStore('github', {
    state: () => ({
        repo: null,
        commits: [],
        repoStats: null,
        issues: [],
        pullRequests: [],
        error: null,
        loading: false
    }),
    actions: {
        async searchRepository(query) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch(`https://api.github.com/repos/${query}`);
                if (!response.ok) {
                    throw new Error('Repository not found');
                }
                this.repo = await response.json();
            }
            catch (error) {
                this.error = error instanceof Error ? error.message : 'Failed to fetch repository';
                this.repo = null;
            }
            finally {
                this.loading = false;
            }
        },
        async fetchCommits(owner, repo) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`);
                if (!response.ok) {
                    throw new Error('Failed to fetch commits');
                }
                const data = await response.json();
                this.commits = data.map((item) => ({
                    sha: item.sha,
                    message: item.commit.message,
                    author: {
                        name: item.commit.author.name,
                        email: item.commit.author.email,
                        date: item.commit.author.date
                    },
                    html_url: item.html_url
                }));
            }
            catch (error) {
                this.error = error instanceof Error ? error.message : 'Failed to fetch commits';
                this.commits = [];
            }
            finally {
                this.loading = false;
            }
        },
        async fetchRepoStats(owner, repo) {
            this.loading = true;
            this.error = null;
            try {
                const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
                if (!repoResponse.ok) {
                    throw new Error('Failed to fetch repository stats');
                }
                const repoData = await repoResponse.json();
                // Pobierz liczbę kontrybutorów
                const contributorsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=1&anon=1`);
                const contributorsCount = contributorsResponse.ok
                    ? +(contributorsResponse.headers.get('link')?.match(/page=(\d+).*?>; rel="last"/)?.[1] || '1')
                    : 0;
                this.repoStats = {
                    stars: repoData.stargazers_count || 0,
                    forks: repoData.forks_count || 0,
                    watchers: repoData.subscribers_count || 0,
                    issues: repoData.open_issues_count || 0,
                    contributors: contributorsCount,
                    language: repoData.language || 'Not specified',
                    license: repoData.license?.name || 'Not specified',
                    lastUpdate: repoData.updated_at
                };
            }
            catch (error) {
                this.error = error instanceof Error ? error.message : 'Failed to fetch repository stats';
                this.repoStats = null;
            }
            finally {
                this.loading = false;
            }
        },
        async fetchIssues(owner, repo) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=10`);
                if (!response.ok) {
                    throw new Error('Failed to fetch issues');
                }
                const data = await response.json();
                this.issues = data.filter((item) => !item.pull_request).map((item) => ({
                    id: item.id,
                    number: item.number,
                    title: item.title,
                    state: item.state,
                    html_url: item.html_url,
                    created_at: item.created_at,
                    updated_at: item.updated_at,
                    user: {
                        login: item.user.login,
                        avatar_url: item.user.avatar_url
                    },
                    labels: item.labels.map((label) => ({
                        name: label.name,
                        color: label.color
                    }))
                }));
            }
            catch (error) {
                this.error = error instanceof Error ? error.message : 'Failed to fetch issues';
                this.issues = [];
            }
            finally {
                this.loading = false;
            }
        },
        async fetchPullRequests(owner, repo) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?state=all&per_page=10`);
                if (!response.ok) {
                    throw new Error('Failed to fetch pull requests');
                }
                const data = await response.json();
                this.pullRequests = data.map((item) => ({
                    id: item.id,
                    number: item.number,
                    title: item.title,
                    state: item.state === 'closed' && item.merged_at ? 'merged' : item.state,
                    html_url: item.html_url,
                    created_at: item.created_at,
                    updated_at: item.updated_at,
                    user: {
                        login: item.user.login,
                        avatar_url: item.user.avatar_url
                    },
                    head: {
                        ref: item.head.ref
                    },
                    base: {
                        ref: item.base.ref
                    }
                }));
            }
            catch (error) {
                this.error = error instanceof Error ? error.message : 'Failed to fetch pull requests';
                this.pullRequests = [];
            }
            finally {
                this.loading = false;
            }
        },
        async searchRepositories(query) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&per_page=10`);
                if (!response.ok) {
                    throw new Error('Failed to search repositories');
                }
                const data = await response.json();
                return data.items;
            }
            catch (error) {
                this.error = error instanceof Error ? error.message : 'Failed to search repositories';
                return [];
            }
            finally {
                this.loading = false;
            }
        },
        clearError() {
            this.error = null;
        }
    }
});

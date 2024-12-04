import type { Project } from '@/types';
interface HistoryEntry {
    timestamp: string;
    projects: Project[];
    description: string;
}
export declare const useProjectStore: import("pinia").StoreDefinition<"projects", {
    projects: Project[];
    lastBackupDate: Date | null;
    history: HistoryEntry[];
}, {
    activeProjects: (state: {
        projects: {
            id: string;
            title: string;
            description: string;
            status: "completed" | "active" | "on-hold";
            priority: "low" | "medium" | "high";
            tasks: {
                id: string;
                title: string;
                description: string;
                status: "todo" | "in-progress" | "completed";
                priority: "low" | "medium" | "high";
                dueDate: string;
                createdAt: string;
            }[];
            createdAt: string;
            updatedAt?: string | undefined;
            dueDate: string;
            githubRepo?: {
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
            } | null | undefined;
            repoUrl?: string | undefined;
        }[];
        lastBackupDate: Date | null;
        history: {
            timestamp: string;
            projects: {
                id: string;
                title: string;
                description: string;
                status: "completed" | "active" | "on-hold";
                priority: "low" | "medium" | "high";
                tasks: {
                    id: string;
                    title: string;
                    description: string;
                    status: "todo" | "in-progress" | "completed";
                    priority: "low" | "medium" | "high";
                    dueDate: string;
                    createdAt: string;
                }[];
                createdAt: string;
                updatedAt?: string | undefined;
                dueDate: string;
                githubRepo?: {
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
                } | null | undefined;
                repoUrl?: string | undefined;
            }[];
            description: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<{
        projects: Project[];
        lastBackupDate: Date | null;
        history: HistoryEntry[];
    }>) => {
        id: string;
        title: string;
        description: string;
        status: "completed" | "active" | "on-hold";
        priority: "low" | "medium" | "high";
        tasks: {
            id: string;
            title: string;
            description: string;
            status: "todo" | "in-progress" | "completed";
            priority: "low" | "medium" | "high";
            dueDate: string;
            createdAt: string;
        }[];
        createdAt: string;
        updatedAt?: string | undefined;
        dueDate: string;
        githubRepo?: {
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
        } | null | undefined;
        repoUrl?: string | undefined;
    }[];
    completedProjects: (state: {
        projects: {
            id: string;
            title: string;
            description: string;
            status: "completed" | "active" | "on-hold";
            priority: "low" | "medium" | "high";
            tasks: {
                id: string;
                title: string;
                description: string;
                status: "todo" | "in-progress" | "completed";
                priority: "low" | "medium" | "high";
                dueDate: string;
                createdAt: string;
            }[];
            createdAt: string;
            updatedAt?: string | undefined;
            dueDate: string;
            githubRepo?: {
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
            } | null | undefined;
            repoUrl?: string | undefined;
        }[];
        lastBackupDate: Date | null;
        history: {
            timestamp: string;
            projects: {
                id: string;
                title: string;
                description: string;
                status: "completed" | "active" | "on-hold";
                priority: "low" | "medium" | "high";
                tasks: {
                    id: string;
                    title: string;
                    description: string;
                    status: "todo" | "in-progress" | "completed";
                    priority: "low" | "medium" | "high";
                    dueDate: string;
                    createdAt: string;
                }[];
                createdAt: string;
                updatedAt?: string | undefined;
                dueDate: string;
                githubRepo?: {
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
                } | null | undefined;
                repoUrl?: string | undefined;
            }[];
            description: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<{
        projects: Project[];
        lastBackupDate: Date | null;
        history: HistoryEntry[];
    }>) => {
        id: string;
        title: string;
        description: string;
        status: "completed" | "active" | "on-hold";
        priority: "low" | "medium" | "high";
        tasks: {
            id: string;
            title: string;
            description: string;
            status: "todo" | "in-progress" | "completed";
            priority: "low" | "medium" | "high";
            dueDate: string;
            createdAt: string;
        }[];
        createdAt: string;
        updatedAt?: string | undefined;
        dueDate: string;
        githubRepo?: {
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
        } | null | undefined;
        repoUrl?: string | undefined;
    }[];
    highPriorityProjects: (state: {
        projects: {
            id: string;
            title: string;
            description: string;
            status: "completed" | "active" | "on-hold";
            priority: "low" | "medium" | "high";
            tasks: {
                id: string;
                title: string;
                description: string;
                status: "todo" | "in-progress" | "completed";
                priority: "low" | "medium" | "high";
                dueDate: string;
                createdAt: string;
            }[];
            createdAt: string;
            updatedAt?: string | undefined;
            dueDate: string;
            githubRepo?: {
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
            } | null | undefined;
            repoUrl?: string | undefined;
        }[];
        lastBackupDate: Date | null;
        history: {
            timestamp: string;
            projects: {
                id: string;
                title: string;
                description: string;
                status: "completed" | "active" | "on-hold";
                priority: "low" | "medium" | "high";
                tasks: {
                    id: string;
                    title: string;
                    description: string;
                    status: "todo" | "in-progress" | "completed";
                    priority: "low" | "medium" | "high";
                    dueDate: string;
                    createdAt: string;
                }[];
                createdAt: string;
                updatedAt?: string | undefined;
                dueDate: string;
                githubRepo?: {
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
                } | null | undefined;
                repoUrl?: string | undefined;
            }[];
            description: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<{
        projects: Project[];
        lastBackupDate: Date | null;
        history: HistoryEntry[];
    }>) => {
        id: string;
        title: string;
        description: string;
        status: "completed" | "active" | "on-hold";
        priority: "low" | "medium" | "high";
        tasks: {
            id: string;
            title: string;
            description: string;
            status: "todo" | "in-progress" | "completed";
            priority: "low" | "medium" | "high";
            dueDate: string;
            createdAt: string;
        }[];
        createdAt: string;
        updatedAt?: string | undefined;
        dueDate: string;
        githubRepo?: {
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
        } | null | undefined;
        repoUrl?: string | undefined;
    }[];
    projectById: (state: {
        projects: {
            id: string;
            title: string;
            description: string;
            status: "completed" | "active" | "on-hold";
            priority: "low" | "medium" | "high";
            tasks: {
                id: string;
                title: string;
                description: string;
                status: "todo" | "in-progress" | "completed";
                priority: "low" | "medium" | "high";
                dueDate: string;
                createdAt: string;
            }[];
            createdAt: string;
            updatedAt?: string | undefined;
            dueDate: string;
            githubRepo?: {
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
            } | null | undefined;
            repoUrl?: string | undefined;
        }[];
        lastBackupDate: Date | null;
        history: {
            timestamp: string;
            projects: {
                id: string;
                title: string;
                description: string;
                status: "completed" | "active" | "on-hold";
                priority: "low" | "medium" | "high";
                tasks: {
                    id: string;
                    title: string;
                    description: string;
                    status: "todo" | "in-progress" | "completed";
                    priority: "low" | "medium" | "high";
                    dueDate: string;
                    createdAt: string;
                }[];
                createdAt: string;
                updatedAt?: string | undefined;
                dueDate: string;
                githubRepo?: {
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
                } | null | undefined;
                repoUrl?: string | undefined;
            }[];
            description: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<{
        projects: Project[];
        lastBackupDate: Date | null;
        history: HistoryEntry[];
    }>) => (id: string) => {
        id: string;
        title: string;
        description: string;
        status: "completed" | "active" | "on-hold";
        priority: "low" | "medium" | "high";
        tasks: {
            id: string;
            title: string;
            description: string;
            status: "todo" | "in-progress" | "completed";
            priority: "low" | "medium" | "high";
            dueDate: string;
            createdAt: string;
        }[];
        createdAt: string;
        updatedAt?: string | undefined;
        dueDate: string;
        githubRepo?: {
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
        } | null | undefined;
        repoUrl?: string | undefined;
    } | undefined;
    getFilteredProjects: (state: {
        projects: {
            id: string;
            title: string;
            description: string;
            status: "completed" | "active" | "on-hold";
            priority: "low" | "medium" | "high";
            tasks: {
                id: string;
                title: string;
                description: string;
                status: "todo" | "in-progress" | "completed";
                priority: "low" | "medium" | "high";
                dueDate: string;
                createdAt: string;
            }[];
            createdAt: string;
            updatedAt?: string | undefined;
            dueDate: string;
            githubRepo?: {
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
            } | null | undefined;
            repoUrl?: string | undefined;
        }[];
        lastBackupDate: Date | null;
        history: {
            timestamp: string;
            projects: {
                id: string;
                title: string;
                description: string;
                status: "completed" | "active" | "on-hold";
                priority: "low" | "medium" | "high";
                tasks: {
                    id: string;
                    title: string;
                    description: string;
                    status: "todo" | "in-progress" | "completed";
                    priority: "low" | "medium" | "high";
                    dueDate: string;
                    createdAt: string;
                }[];
                createdAt: string;
                updatedAt?: string | undefined;
                dueDate: string;
                githubRepo?: {
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
                } | null | undefined;
                repoUrl?: string | undefined;
            }[];
            description: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<{
        projects: Project[];
        lastBackupDate: Date | null;
        history: HistoryEntry[];
    }>) => (searchQuery: string, status: string, priority: string, sortBy: string) => {
        id: string;
        title: string;
        description: string;
        status: "completed" | "active" | "on-hold";
        priority: "low" | "medium" | "high";
        tasks: {
            id: string;
            title: string;
            description: string;
            status: "todo" | "in-progress" | "completed";
            priority: "low" | "medium" | "high";
            dueDate: string;
            createdAt: string;
        }[];
        createdAt: string;
        updatedAt?: string | undefined;
        dueDate: string;
        githubRepo?: {
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
        } | null | undefined;
        repoUrl?: string | undefined;
    }[];
    getHistoryByDate: (state: {
        projects: {
            id: string;
            title: string;
            description: string;
            status: "completed" | "active" | "on-hold";
            priority: "low" | "medium" | "high";
            tasks: {
                id: string;
                title: string;
                description: string;
                status: "todo" | "in-progress" | "completed";
                priority: "low" | "medium" | "high";
                dueDate: string;
                createdAt: string;
            }[];
            createdAt: string;
            updatedAt?: string | undefined;
            dueDate: string;
            githubRepo?: {
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
            } | null | undefined;
            repoUrl?: string | undefined;
        }[];
        lastBackupDate: Date | null;
        history: {
            timestamp: string;
            projects: {
                id: string;
                title: string;
                description: string;
                status: "completed" | "active" | "on-hold";
                priority: "low" | "medium" | "high";
                tasks: {
                    id: string;
                    title: string;
                    description: string;
                    status: "todo" | "in-progress" | "completed";
                    priority: "low" | "medium" | "high";
                    dueDate: string;
                    createdAt: string;
                }[];
                createdAt: string;
                updatedAt?: string | undefined;
                dueDate: string;
                githubRepo?: {
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
                } | null | undefined;
                repoUrl?: string | undefined;
            }[];
            description: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<{
        projects: Project[];
        lastBackupDate: Date | null;
        history: HistoryEntry[];
    }>) => (date: string) => {
        timestamp: string;
        projects: {
            id: string;
            title: string;
            description: string;
            status: "completed" | "active" | "on-hold";
            priority: "low" | "medium" | "high";
            tasks: {
                id: string;
                title: string;
                description: string;
                status: "todo" | "in-progress" | "completed";
                priority: "low" | "medium" | "high";
                dueDate: string;
                createdAt: string;
            }[];
            createdAt: string;
            updatedAt?: string | undefined;
            dueDate: string;
            githubRepo?: {
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
            } | null | undefined;
            repoUrl?: string | undefined;
        }[];
        description: string;
    } | undefined;
}, {
    addProject(projectData: Partial<Project>): Project;
    updateProject(id: string, updates: Partial<Project>): void;
    deleteProject(id: string): void;
    loadFromLocalStorage(): void;
    formatDate(date: Date): string;
    parseDate(dateStr: string): Date;
    saveToLocalStorage(description?: string): void;
    createBackup(): void;
    restoreFromBackup(): boolean;
    exportBackup(): void;
    importBackup(file: File): Promise<boolean>;
    restoreFromHistory(timestamp: string): boolean;
    clearProjects(): void;
}>;
export {};

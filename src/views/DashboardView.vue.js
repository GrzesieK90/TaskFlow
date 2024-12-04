import { computed } from 'vue';
import { useProjectStore } from '@/stores/projects';
import { useGithubStore } from '@/stores/github';
import ProjectStatistics from '@/components/dashboard/ProjectStatistics.vue';
import ActivityTimeline from '@/components/dashboard/ActivityTimeline.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const projectStore = useProjectStore();
const githubStore = useGithubStore();
// Obliczanie statystyk projektów
const projectStats = computed(() => {
    const projects = projectStore.projects;
    const stats = {
        total: projects.length,
        byStatus: {
            active: projects.filter((p) => p.status === 'active').length,
            completed: projects.filter((p) => p.status === 'completed').length,
            'on-hold': projects.filter((p) => p.status === 'on-hold').length,
        },
        byPriority: {
            high: projects.filter((p) => p.priority === 'high').length,
            medium: projects.filter((p) => p.priority === 'medium').length,
            low: projects.filter((p) => p.priority === 'low').length,
        },
        tasksStats: {
            total: projects.reduce((acc, p) => acc + p.tasks.length, 0),
            completed: projects.reduce((acc, p) => acc + p.tasks.filter((t) => t.status === 'completed').length, 0),
            inProgress: projects.reduce((acc, p) => acc + p.tasks.filter((t) => t.status === 'in-progress').length, 0),
            todo: projects.reduce((acc, p) => acc + p.tasks.filter((t) => t.status === 'todo').length, 0),
            overdue: projects.reduce((acc, p) => acc +
                p.tasks.filter((t) => {
                    const dueDate = t.dueDate ? new Date(t.dueDate) : undefined;
                    return t.status !== 'completed' && dueDate && dueDate < new Date();
                }).length, 0),
        },
        githubStats: {
            totalRepos: projects.filter((p) => p.githubRepo).length,
            totalIssues: githubStore.issues.length,
            totalPRs: githubStore.pullRequests.length,
            totalCommits: githubStore.commits.length,
        },
    };
    return stats;
});
// Generowanie elementów osi czasu
const timelineItems = computed(() => {
    const items = [];
    // Dodawanie projektów do osi czasu
    projectStore.projects.forEach((project) => {
        items.push({
            id: `project-${project.id}`,
            type: 'project',
            title: project.title,
            date: project.createdAt,
            status: project.status,
            priority: project.priority,
        });
        // Dodawanie zadań do osi czasu
        project.tasks.forEach((task) => {
            items.push({
                id: `task-${task.id}`,
                type: 'task',
                title: task.title,
                date: task.createdAt,
                status: task.status,
                priority: task.priority,
                projectId: project.id,
                projectTitle: project.title,
            });
        });
    });
    // Sortowanie według daty (od najnowszych)
    return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10); // Pokazuj tylko 10 najnowszych elementów
});
// Ostatnie projekty
const recentProjects = computed(() => [...projectStore.projects]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4)); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['status'];
    __VLS_styleScopedClasses['status'];
    __VLS_styleScopedClasses['status'];
    __VLS_styleScopedClasses['priority'];
    __VLS_styleScopedClasses['priority'];
    __VLS_styleScopedClasses['priority'];
    __VLS_styleScopedClasses['view-project'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dashboard") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    // @ts-ignore
    [ProjectStatistics,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ProjectStatistics, new ProjectStatistics({ stats: ((__VLS_ctx.projectStats)), }));
    const __VLS_1 = __VLS_0({ stats: ((__VLS_ctx.projectStats)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [ActivityTimeline,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ActivityTimeline, new ActivityTimeline({ items: ((__VLS_ctx.timelineItems)), }));
    const __VLS_6 = __VLS_5({ items: ((__VLS_ctx.timelineItems)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("recent-projects") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("projects-grid") }, });
    for (const [project] of __VLS_getVForSourceType((__VLS_ctx.recentProjects))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((project.id)), ...{ class: ("project-card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (project.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (project.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-meta") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((['status', project.status])) }, });
        (project.status);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((['priority', project.priority])) }, });
        (project.priority);
        const __VLS_10 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ to: (('/projects/' + project.id)), ...{ class: ("view-project") }, }));
        const __VLS_12 = __VLS_11({ to: (('/projects/' + project.id)), ...{ class: ("view-project") }, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        __VLS_nonNullable(__VLS_15.slots).default;
        var __VLS_15;
    }
    __VLS_styleScopedClasses['dashboard'];
    __VLS_styleScopedClasses['recent-projects'];
    __VLS_styleScopedClasses['projects-grid'];
    __VLS_styleScopedClasses['project-card'];
    __VLS_styleScopedClasses['project-meta'];
    __VLS_styleScopedClasses['status'];
    __VLS_styleScopedClasses['priority'];
    __VLS_styleScopedClasses['view-project'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ProjectStatistics: ProjectStatistics,
            ActivityTimeline: ActivityTimeline,
            projectStats: projectStats,
            timelineItems: timelineItems,
            recentProjects: recentProjects,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

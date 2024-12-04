import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProjectStore } from '@/stores/projects';
import { useGithubStore } from '@/stores/github';
import TaskList from '@/components/TaskList.vue';
import GitHubDetails from '@/components/GitHubDetails.vue';
import GitHubCommits from '@/components/GitHubCommits.vue';
import GitHubIssues from '@/components/GitHubIssues.vue';
import GitHubPullRequests from '@/components/GitHubPullRequests.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const projectStore = useProjectStore();
const githubStore = useGithubStore();
const project = computed(() => projectStore.projectById(route.params.id));
const editMode = ref(false);
const editedProject = ref({});
onMounted(async () => {
    if (project.value) {
        editedProject.value = { ...project.value };
        if (project.value.githubRepo) {
            const [owner, repo] = project.value.githubRepo.full_name.split('/');
            await Promise.all([
                githubStore.fetchCommits(owner, repo),
                githubStore.fetchRepoStats(owner, repo),
                githubStore.fetchIssues(owner, repo),
                githubStore.fetchPullRequests(owner, repo)
            ]);
        }
    }
});
const saveProject = () => {
    if (editedProject.value) {
        projectStore.updateProject(project.value.id, editedProject.value);
        editMode.value = false;
    }
};
const deleteProject = () => {
    if (confirm('Are you sure you want to delete this project?')) {
        projectStore.deleteProject(project.value.id);
        router.push('/projects');
    }
};
const updateTasks = (tasks) => {
    projectStore.updateProject(project.value.id, { tasks });
};
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_styleScopedClasses['project-title'];
    __VLS_styleScopedClasses['project-status'];
    __VLS_styleScopedClasses['project-status'];
    __VLS_styleScopedClasses['project-status'];
    __VLS_styleScopedClasses['project-priority'];
    __VLS_styleScopedClasses['project-priority'];
    __VLS_styleScopedClasses['project-priority'];
    __VLS_styleScopedClasses['form-group'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.project) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-details") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-title") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        (__VLS_ctx.project.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("project-status") }, ...{ class: ((__VLS_ctx.project.status)) }, });
        (__VLS_ctx.project.status);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("project-priority") }, ...{ class: ((__VLS_ctx.project.priority)) }, });
        (__VLS_ctx.project.priority);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-actions") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.project)))
                        return;
                    __VLS_ctx.editMode = !__VLS_ctx.editMode;
                } }, ...{ class: ("btn-primary") }, });
        (__VLS_ctx.editMode ? 'Cancel' : 'Edit');
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.deleteProject) }, ...{ class: ("btn-danger") }, });
        if (__VLS_ctx.editMode) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-edit card") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.editedProject.title)), type: ("text"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.editedProject.description)), rows: ("3"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-row") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.editedProject.status)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("active"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("completed"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("on-hold"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.editedProject.priority)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("low"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("medium"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("high"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("date"), });
            (__VLS_ctx.editedProject.dueDate);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.editedProject.repoUrl)), placeholder: ("owner/repo"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-actions") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.saveProject) }, ...{ class: ("btn-primary") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.project)))
                            return;
                        if (!((__VLS_ctx.editMode)))
                            return;
                        __VLS_ctx.editMode = false;
                    } }, ...{ class: ("btn-secondary") }, });
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-info card") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("description") }, });
            (__VLS_ctx.project.description);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("meta-info") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("meta-item") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
            (__VLS_ctx.formatDate(__VLS_ctx.project.createdAt));
            if (__VLS_ctx.project.dueDate) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("meta-item") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
                (__VLS_ctx.formatDate(__VLS_ctx.project.dueDate));
            }
        }
        if (__VLS_ctx.project.githubRepo) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("github-section") }, });
            // @ts-ignore
            [GitHubDetails,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(GitHubDetails, new GitHubDetails({ repo: ((__VLS_ctx.project.githubRepo)), stats: ((__VLS_ctx.githubStore.repoStats ?? undefined)), }));
            const __VLS_1 = __VLS_0({ repo: ((__VLS_ctx.project.githubRepo)), stats: ((__VLS_ctx.githubStore.repoStats ?? undefined)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("github-activity") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-column") }, });
            // @ts-ignore
            [GitHubIssues,];
            // @ts-ignore
            const __VLS_5 = __VLS_asFunctionalComponent(GitHubIssues, new GitHubIssues({ issues: ((__VLS_ctx.githubStore.issues)), }));
            const __VLS_6 = __VLS_5({ issues: ((__VLS_ctx.githubStore.issues)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-column") }, });
            // @ts-ignore
            [GitHubPullRequests,];
            // @ts-ignore
            const __VLS_10 = __VLS_asFunctionalComponent(GitHubPullRequests, new GitHubPullRequests({ pullRequests: ((__VLS_ctx.githubStore.pullRequests)), }));
            const __VLS_11 = __VLS_10({ pullRequests: ((__VLS_ctx.githubStore.pullRequests)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
            // @ts-ignore
            [TaskList,];
            // @ts-ignore
            const __VLS_15 = __VLS_asFunctionalComponent(TaskList, new TaskList({ ...{ 'onUpdate:tasks': {} }, tasks: ((__VLS_ctx.project.tasks)), }));
            const __VLS_16 = __VLS_15({ ...{ 'onUpdate:tasks': {} }, tasks: ((__VLS_ctx.project.tasks)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
            let __VLS_20;
            const __VLS_21 = {
                'onUpdate:tasks': (__VLS_ctx.updateTasks)
            };
            let __VLS_17;
            let __VLS_18;
            var __VLS_19;
            // @ts-ignore
            [GitHubCommits,];
            // @ts-ignore
            const __VLS_22 = __VLS_asFunctionalComponent(GitHubCommits, new GitHubCommits({ commits: ((__VLS_ctx.githubStore.commits)), }));
            const __VLS_23 = __VLS_22({ commits: ((__VLS_ctx.githubStore.commits)), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("not-found") }, });
    }
    __VLS_styleScopedClasses['project-details'];
    __VLS_styleScopedClasses['project-header'];
    __VLS_styleScopedClasses['project-title'];
    __VLS_styleScopedClasses['project-status'];
    __VLS_styleScopedClasses['project-priority'];
    __VLS_styleScopedClasses['project-actions'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['btn-danger'];
    __VLS_styleScopedClasses['project-edit'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-row'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-actions'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['btn-secondary'];
    __VLS_styleScopedClasses['project-info'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['description'];
    __VLS_styleScopedClasses['meta-info'];
    __VLS_styleScopedClasses['meta-item'];
    __VLS_styleScopedClasses['meta-item'];
    __VLS_styleScopedClasses['github-section'];
    __VLS_styleScopedClasses['github-activity'];
    __VLS_styleScopedClasses['activity-column'];
    __VLS_styleScopedClasses['activity-column'];
    __VLS_styleScopedClasses['not-found'];
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
            TaskList: TaskList,
            GitHubDetails: GitHubDetails,
            GitHubCommits: GitHubCommits,
            GitHubIssues: GitHubIssues,
            GitHubPullRequests: GitHubPullRequests,
            githubStore: githubStore,
            project: project,
            editMode: editMode,
            editedProject: editedProject,
            saveProject: saveProject,
            deleteProject: deleteProject,
            updateTasks: updateTasks,
            formatDate: formatDate,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */

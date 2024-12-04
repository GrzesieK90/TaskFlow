import { ref, computed } from 'vue';
import { useProjectStore } from '@/stores/projects';
import ProjectForm from '@/components/ProjectForm.vue';
import DataBackupManager from '@/components/DataBackupManager.vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const projectStore = useProjectStore();
const showCreateForm = ref(false);
const editingProject = ref(null);
const statusFilter = ref('');
const priorityFilter = ref('');
const searchQuery = ref('');
const sortBy = ref('created-desc');
// Format date helper
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};
// Computed property for filtered and sorted projects
const filteredProjects = computed(() => {
    return projectStore.getFilteredProjects(searchQuery.value, statusFilter.value, priorityFilter.value, sortBy.value);
});
// Check if any filters are active
const hasActiveFilters = computed(() => {
    return searchQuery.value || statusFilter.value || priorityFilter.value;
});
// Clear all filters
const clearFilters = () => {
    searchQuery.value = '';
    statusFilter.value = '';
    priorityFilter.value = '';
    sortBy.value = 'created-desc';
};
// Form handling
const closeForm = () => {
    showCreateForm.value = false;
    editingProject.value = null;
};
const handleProjectSubmit = (project) => {
    if (editingProject.value) {
        // Updating existing project
        projectStore.updateProject(editingProject.value.id, project);
    }
    else {
        // Creating new project
        projectStore.addProject(project);
    }
    // Reset form state
    showCreateForm.value = false;
    editingProject.value = null;
};
const editProject = (project) => {
    editingProject.value = project;
};
const deleteProject = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
        await projectStore.deleteProject(id);
    }
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
    __VLS_styleScopedClasses['projects-grid'];
    __VLS_styleScopedClasses['backup-manager'];
    __VLS_styleScopedClasses['search-input'];
    __VLS_styleScopedClasses['filters'];
    __VLS_styleScopedClasses['filters'];
    __VLS_styleScopedClasses['filters'];
    __VLS_styleScopedClasses['filters'];
    __VLS_styleScopedClasses['remove-filter'];
    __VLS_styleScopedClasses['clear-filters'];
    __VLS_styleScopedClasses['no-results'];
    __VLS_styleScopedClasses['project-card'];
    __VLS_styleScopedClasses['project-header'];
    __VLS_styleScopedClasses['status'];
    __VLS_styleScopedClasses['status'];
    __VLS_styleScopedClasses['status'];
    __VLS_styleScopedClasses['priority'];
    __VLS_styleScopedClasses['priority'];
    __VLS_styleScopedClasses['priority'];
    __VLS_styleScopedClasses['github-link'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['btn-secondary'];
    __VLS_styleScopedClasses['btn-secondary'];
    __VLS_styleScopedClasses['btn-danger'];
    __VLS_styleScopedClasses['btn-danger'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("projects-view") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.showCreateForm = true;
            } }, ...{ class: ("btn-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("filters-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-bar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.searchQuery)), type: ("text"), placeholder: ("Search projects..."), ...{ class: ("search-input") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("filters") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.statusFilter)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("active"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("completed"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("on-hold"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.priorityFilter)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("high"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("medium"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("low"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.sortBy)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("created-desc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("created-asc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("updated-desc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("updated-asc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("title-asc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("title-desc"), });
    if (__VLS_ctx.hasActiveFilters) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("active-filters") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("filter-label") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("filter-tags") }, });
        if (__VLS_ctx.searchQuery) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("filter-tag") }, });
            (__VLS_ctx.searchQuery);
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.hasActiveFilters)))
                            return;
                        if (!((__VLS_ctx.searchQuery)))
                            return;
                        __VLS_ctx.searchQuery = '';
                    } }, ...{ class: ("remove-filter") }, });
        }
        if (__VLS_ctx.statusFilter) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("filter-tag") }, });
            (__VLS_ctx.statusFilter);
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.hasActiveFilters)))
                            return;
                        if (!((__VLS_ctx.statusFilter)))
                            return;
                        __VLS_ctx.statusFilter = '';
                    } }, ...{ class: ("remove-filter") }, });
        }
        if (__VLS_ctx.priorityFilter) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("filter-tag") }, });
            (__VLS_ctx.priorityFilter);
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.hasActiveFilters)))
                            return;
                        if (!((__VLS_ctx.priorityFilter)))
                            return;
                        __VLS_ctx.priorityFilter = '';
                    } }, ...{ class: ("remove-filter") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.clearFilters) }, ...{ class: ("clear-filters") }, });
    }
    if (__VLS_ctx.filteredProjects.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("no-results") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.clearFilters) }, ...{ class: ("btn-secondary") }, });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("projects-grid") }, });
        for (const [project] of __VLS_getVForSourceType((__VLS_ctx.filteredProjects))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.filteredProjects.length === 0))))
                            return;
                        __VLS_ctx.$router.push(`/projects/${project.id}`);
                    } }, key: ((project.id)), ...{ class: ("project-card") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-header") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
            (project.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-badges") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((['status', project.status])) }, });
            (project.status);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((['priority', project.priority])) }, });
            (project.priority);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("project-description") }, });
            (project.description);
            if (project.githubRepo) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("github-info") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((project.githubRepo.owner.avatar_url)), alt: ("GitHub Avatar"), ...{ class: ("github-avatar") }, });
                if (project.githubRepo) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((project.repoUrl)), target: ("_blank"), ...{ class: ("github-link") }, });
                    (project.githubRepo.full_name);
                }
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-meta") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("meta-item") }, });
            (__VLS_ctx.formatDate(project.createdAt));
            if (project.updatedAt) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("meta-item") }, });
                (__VLS_ctx.formatDate(project.updatedAt));
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-footer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.filteredProjects.length === 0))))
                            return;
                        __VLS_ctx.editProject(project);
                    } }, ...{ class: ("btn-secondary") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.filteredProjects.length === 0))))
                            return;
                        __VLS_ctx.deleteProject(project.id);
                    } }, ...{ class: ("btn-danger") }, });
        }
    }
    // @ts-ignore
    [DataBackupManager,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(DataBackupManager, new DataBackupManager({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    if (__VLS_ctx.showCreateForm || __VLS_ctx.editingProject) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
        // @ts-ignore
        [ProjectForm,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(ProjectForm, new ProjectForm({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, project: ((__VLS_ctx.editingProject)), }));
        const __VLS_6 = __VLS_5({ ...{ 'onSubmit': {} }, ...{ 'onCancel': {} }, project: ((__VLS_ctx.editingProject)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        let __VLS_10;
        const __VLS_11 = {
            onSubmit: (__VLS_ctx.handleProjectSubmit)
        };
        const __VLS_12 = {
            onCancel: (__VLS_ctx.closeForm)
        };
        let __VLS_7;
        let __VLS_8;
        var __VLS_9;
    }
    __VLS_styleScopedClasses['projects-view'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['filters-section'];
    __VLS_styleScopedClasses['search-bar'];
    __VLS_styleScopedClasses['search-input'];
    __VLS_styleScopedClasses['filters'];
    __VLS_styleScopedClasses['active-filters'];
    __VLS_styleScopedClasses['filter-label'];
    __VLS_styleScopedClasses['filter-tags'];
    __VLS_styleScopedClasses['filter-tag'];
    __VLS_styleScopedClasses['remove-filter'];
    __VLS_styleScopedClasses['filter-tag'];
    __VLS_styleScopedClasses['remove-filter'];
    __VLS_styleScopedClasses['filter-tag'];
    __VLS_styleScopedClasses['remove-filter'];
    __VLS_styleScopedClasses['clear-filters'];
    __VLS_styleScopedClasses['no-results'];
    __VLS_styleScopedClasses['btn-secondary'];
    __VLS_styleScopedClasses['projects-grid'];
    __VLS_styleScopedClasses['project-card'];
    __VLS_styleScopedClasses['project-header'];
    __VLS_styleScopedClasses['project-badges'];
    __VLS_styleScopedClasses['status'];
    __VLS_styleScopedClasses['priority'];
    __VLS_styleScopedClasses['project-description'];
    __VLS_styleScopedClasses['github-info'];
    __VLS_styleScopedClasses['github-avatar'];
    __VLS_styleScopedClasses['github-link'];
    __VLS_styleScopedClasses['project-meta'];
    __VLS_styleScopedClasses['meta-item'];
    __VLS_styleScopedClasses['meta-item'];
    __VLS_styleScopedClasses['project-footer'];
    __VLS_styleScopedClasses['btn-secondary'];
    __VLS_styleScopedClasses['btn-danger'];
    __VLS_styleScopedClasses['modal'];
    __VLS_styleScopedClasses['modal-content'];
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
            ProjectForm: ProjectForm,
            DataBackupManager: DataBackupManager,
            showCreateForm: showCreateForm,
            editingProject: editingProject,
            statusFilter: statusFilter,
            priorityFilter: priorityFilter,
            searchQuery: searchQuery,
            sortBy: sortBy,
            formatDate: formatDate,
            filteredProjects: filteredProjects,
            hasActiveFilters: hasActiveFilters,
            clearFilters: clearFilters,
            closeForm: closeForm,
            handleProjectSubmit: handleProjectSubmit,
            editProject: editProject,
            deleteProject: deleteProject,
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

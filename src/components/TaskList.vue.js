import { ref, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emit = defineEmits();
const showNewTaskForm = ref(false);
const newTask = ref({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
});
const taskStatuses = ['todo', 'in-progress', 'completed'];
const statusLabels = {
    todo: 'To Do',
    'in-progress': 'In Progress',
    completed: 'Completed',
};
const searchQuery = ref('');
const priorityFilter = ref('');
const sortBy = ref('created-desc');
// Computed properties for task statistics
const completedTasks = computed(() => props.tasks.filter(task => task.status === 'completed'));
const inProgressTasks = computed(() => props.tasks.filter(task => task.status === 'in-progress'));
const todoTasks = computed(() => props.tasks.filter(task => task.status === 'todo'));
const completionPercentage = computed(() => {
    return props.tasks.length > 0
        ? Math.round((completedTasks.value.length / props.tasks.length) * 100)
        : 0;
});
// Filter and sort tasks
const filteredTasks = computed(() => {
    let filtered = [...props.tasks];
    // Apply search filter
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(task => task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query));
    }
    // Apply priority filter
    if (priorityFilter.value) {
        filtered = filtered.filter(task => task.priority === priorityFilter.value);
    }
    // Apply sorting
    filtered.sort((a, b) => {
        switch (sortBy.value) {
            case 'created-desc':
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            case 'created-asc':
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            case 'due-desc':
                if (!a.dueDate)
                    return 1;
                if (!b.dueDate)
                    return -1;
                return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
            case 'due-asc':
                if (!a.dueDate)
                    return 1;
                if (!b.dueDate)
                    return -1;
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            default:
                return 0;
        }
    });
    return filtered;
});
const getTasksByStatus = (status) => {
    return filteredTasks.value.filter(task => task.status === status);
};
const addTask = () => {
    const task = {
        id: uuidv4(),
        title: newTask.value.title,
        description: newTask.value.description,
        status: 'todo',
        priority: newTask.value.priority,
        dueDate: newTask.value.dueDate,
        createdAt: new Date().toISOString(),
    };
    emit('update:tasks', [...props.tasks, task]);
    // Reset form
    newTask.value = {
        title: '',
        description: '',
        priority: 'medium',
        dueDate: '',
    };
    showNewTaskForm.value = false;
};
const deleteTask = (taskId) => {
    emit('update:tasks', props.tasks.filter((t) => t.id !== taskId));
};
const completeTask = (taskId) => {
    const updatedTasks = props.tasks.map((task) => task.id === taskId
        ? {
            id: task.id,
            title: task.title,
            description: task.description,
            status: 'completed',
            priority: task.priority,
            dueDate: task.dueDate,
            createdAt: task.createdAt
        }
        : task);
    emit('update:tasks', updatedTasks);
};
const updateTaskStatus = (task) => {
    const updatedTasks = props.tasks.map((t) => (t.id === task.id ? task : t));
    emit('update:tasks', updatedTasks);
};
const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    __typeEmits: {},
});
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
    __VLS_styleScopedClasses['search-input'];
    __VLS_styleScopedClasses['filter-select'];
    __VLS_styleScopedClasses['search-input'];
    __VLS_styleScopedClasses['filter-select'];
    __VLS_styleScopedClasses['task-card-header'];
    __VLS_styleScopedClasses['task-list'];
    __VLS_styleScopedClasses['tasks-grid'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-list") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-list-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-filters") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.searchQuery)), type: ("text"), placeholder: ("Search tasks..."), ...{ class: ("search-input") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.priorityFilter)), ...{ class: ("filter-select") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("high"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("medium"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("low"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.sortBy)), ...{ class: ("filter-select") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("created-desc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("created-asc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("due-asc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("due-desc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.showNewTaskForm = true;
            } }, ...{ class: ("btn-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-stats") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.tasks.length);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.completedTasks.length);
    (__VLS_ctx.completionPercentage);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.inProgressTasks.length);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.todoTasks.length);
    if (__VLS_ctx.showNewTaskForm) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-form card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.newTask.title)), type: ("text"), placeholder: ("Task name"), ...{ class: ("task-input") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.newTask.description)), placeholder: ("Task description"), ...{ class: ("task-input") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-row") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.newTask.priority)), ...{ class: ("task-input") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("low"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("medium"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("high"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("date"), ...{ class: ("task-input") }, });
        (__VLS_ctx.newTask.dueDate);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-actions") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addTask) }, ...{ class: ("btn-primary") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.showNewTaskForm)))
                        return;
                    __VLS_ctx.showNewTaskForm = false;
                } }, });
    }
    if (__VLS_ctx.tasks.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("no-tasks") }, });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tasks-grid") }, });
        for (const [status] of __VLS_getVForSourceType((__VLS_ctx.taskStatuses))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((status)), ...{ class: ("task-column") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("column-title") }, });
            (__VLS_ctx.statusLabels[status]);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-cards") }, });
            for (const [task] of __VLS_getVForSourceType((__VLS_ctx.getTasksByStatus(status)))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((task.id)), ...{ class: ("task-card") }, ...{ class: (({
                            'priority-high': task.priority === 'high',
                            'priority-medium': task.priority === 'medium',
                            'priority-low': task.priority === 'low',
                        })) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-card-header") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
                (task.title);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-actions") }, });
                if (status !== 'completed') {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                                if (!(!((__VLS_ctx.tasks.length === 0))))
                                    return;
                                if (!((status !== 'completed')))
                                    return;
                                __VLS_ctx.completeTask(task.id);
                            } }, ...{ class: ("btn-icon") }, title: ("Complete task"), });
                }
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                            if (!(!((__VLS_ctx.tasks.length === 0))))
                                return;
                            __VLS_ctx.deleteTask(task.id);
                        } }, ...{ class: ("btn-icon btn-danger") }, title: ("Delete task"), });
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("task-description") }, });
                (task.description);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-footer") }, });
                if (task.dueDate) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("task-due-date") }, });
                    (__VLS_ctx.formatDate(task.dueDate));
                }
                __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (...[$event]) => {
                            if (!(!((__VLS_ctx.tasks.length === 0))))
                                return;
                            __VLS_ctx.updateTaskStatus(task);
                        } }, value: ((task.status)), ...{ class: ("status-select") }, });
                for (const [s] of __VLS_getVForSourceType((__VLS_ctx.taskStatuses))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((s)), value: ((s)), });
                    (__VLS_ctx.statusLabels[s]);
                }
            }
        }
    }
    __VLS_styleScopedClasses['task-list'];
    __VLS_styleScopedClasses['task-list-header'];
    __VLS_styleScopedClasses['task-filters'];
    __VLS_styleScopedClasses['search-input'];
    __VLS_styleScopedClasses['filter-select'];
    __VLS_styleScopedClasses['filter-select'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['task-stats'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['task-form'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['task-input'];
    __VLS_styleScopedClasses['task-input'];
    __VLS_styleScopedClasses['form-row'];
    __VLS_styleScopedClasses['task-input'];
    __VLS_styleScopedClasses['task-input'];
    __VLS_styleScopedClasses['form-actions'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['no-tasks'];
    __VLS_styleScopedClasses['tasks-grid'];
    __VLS_styleScopedClasses['task-column'];
    __VLS_styleScopedClasses['column-title'];
    __VLS_styleScopedClasses['task-cards'];
    __VLS_styleScopedClasses['task-card'];
    __VLS_styleScopedClasses['priority-high'];
    __VLS_styleScopedClasses['priority-medium'];
    __VLS_styleScopedClasses['priority-low'];
    __VLS_styleScopedClasses['task-card-header'];
    __VLS_styleScopedClasses['task-actions'];
    __VLS_styleScopedClasses['btn-icon'];
    __VLS_styleScopedClasses['btn-icon'];
    __VLS_styleScopedClasses['btn-danger'];
    __VLS_styleScopedClasses['task-description'];
    __VLS_styleScopedClasses['task-footer'];
    __VLS_styleScopedClasses['task-due-date'];
    __VLS_styleScopedClasses['status-select'];
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
            showNewTaskForm: showNewTaskForm,
            newTask: newTask,
            taskStatuses: taskStatuses,
            statusLabels: statusLabels,
            searchQuery: searchQuery,
            priorityFilter: priorityFilter,
            sortBy: sortBy,
            completedTasks: completedTasks,
            inProgressTasks: inProgressTasks,
            todoTasks: todoTasks,
            completionPercentage: completionPercentage,
            getTasksByStatus: getTasksByStatus,
            addTask: addTask,
            deleteTask: deleteTask,
            completeTask: completeTask,
            updateTaskStatus: updateTaskStatus,
            formatDate: formatDate,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

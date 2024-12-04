const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
const getIcon = (item) => {
    if (item.type === 'project') {
        return 'fas fa-project-diagram';
    }
    return 'fas fa-tasks';
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
    __VLS_styleScopedClasses['activity-timeline'];
    __VLS_styleScopedClasses['timeline'];
    __VLS_styleScopedClasses['timeline-item'];
    __VLS_styleScopedClasses['timeline-icon'];
    __VLS_styleScopedClasses['timeline-icon'];
    __VLS_styleScopedClasses['timeline-type'];
    __VLS_styleScopedClasses['timeline-type'];
    __VLS_styleScopedClasses['project'];
    __VLS_styleScopedClasses['timeline-type'];
    __VLS_styleScopedClasses['task'];
    __VLS_styleScopedClasses['timeline-status'];
    __VLS_styleScopedClasses['timeline-status'];
    __VLS_styleScopedClasses['timeline-status'];
    __VLS_styleScopedClasses['timeline-status'];
    __VLS_styleScopedClasses['timeline-status'];
    __VLS_styleScopedClasses['timeline-priority'];
    __VLS_styleScopedClasses['timeline-priority'];
    __VLS_styleScopedClasses['timeline-priority'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-timeline") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("timeline") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.id)), ...{ class: ("timeline-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['timeline-icon', item.type])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((__VLS_ctx.getIcon(item))) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("timeline-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("timeline-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("timeline-title") }, });
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("timeline-date") }, });
        (__VLS_ctx.formatDate(item.date));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("timeline-meta") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((['timeline-type', item.type])) }, });
        (item.type);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((['timeline-status', item.status])) }, });
        (item.status);
        if (item.priority) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((['timeline-priority', item.priority])) }, });
            (item.priority);
        }
        if (item.projectTitle) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("timeline-project") }, });
            (item.projectTitle);
        }
    }
    __VLS_styleScopedClasses['activity-timeline'];
    __VLS_styleScopedClasses['timeline'];
    __VLS_styleScopedClasses['timeline-item'];
    __VLS_styleScopedClasses['timeline-icon'];
    __VLS_styleScopedClasses['timeline-content'];
    __VLS_styleScopedClasses['timeline-header'];
    __VLS_styleScopedClasses['timeline-title'];
    __VLS_styleScopedClasses['timeline-date'];
    __VLS_styleScopedClasses['timeline-meta'];
    __VLS_styleScopedClasses['timeline-type'];
    __VLS_styleScopedClasses['timeline-status'];
    __VLS_styleScopedClasses['timeline-priority'];
    __VLS_styleScopedClasses['timeline-project'];
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
            formatDate: formatDate,
            getIcon: getIcon,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

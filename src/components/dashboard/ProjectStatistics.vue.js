const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps(); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_styleScopedClasses['stats-grid'];
    __VLS_styleScopedClasses['stat-card'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['primary'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['success'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['warning'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['danger'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['info'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-statistics") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stats-grid") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value primary") }, });
    (__VLS_ctx.stats.total);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-list") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-badge success") }, });
    (__VLS_ctx.stats.byStatus.active);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-badge primary") }, });
    (__VLS_ctx.stats.byStatus.completed);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-badge warning") }, });
    (__VLS_ctx.stats.byStatus['on-hold']);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-list") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-badge danger") }, });
    (__VLS_ctx.stats.byPriority.high);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-badge warning") }, });
    (__VLS_ctx.stats.byPriority.medium);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-badge success") }, });
    (__VLS_ctx.stats.byPriority.low);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-list") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.stats.tasksStats.total);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value success") }, });
    (__VLS_ctx.stats.tasksStats.completed);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value warning") }, });
    (__VLS_ctx.stats.tasksStats.inProgress);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value info") }, });
    (__VLS_ctx.stats.tasksStats.todo);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value danger") }, });
    (__VLS_ctx.stats.tasksStats.overdue);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-list") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.stats.githubStats.totalRepos);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.stats.githubStats.totalIssues);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.stats.githubStats.totalPRs);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.stats.githubStats.totalCommits);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-text") }, });
    __VLS_styleScopedClasses['project-statistics'];
    __VLS_styleScopedClasses['stats-grid'];
    __VLS_styleScopedClasses['stat-card'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['primary'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['stat-card'];
    __VLS_styleScopedClasses['stat-list'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['success'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['primary'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['warning'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-card'];
    __VLS_styleScopedClasses['stat-list'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['danger'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['warning'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-badge'];
    __VLS_styleScopedClasses['success'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-card'];
    __VLS_styleScopedClasses['stat-list'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['success'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['warning'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['danger'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-card'];
    __VLS_styleScopedClasses['stat-list'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-text'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-text'];
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
        return {};
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

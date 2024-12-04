const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps();
const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
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
    __VLS_styleScopedClasses['issues-section'];
    __VLS_styleScopedClasses['issue-link'];
    __VLS_styleScopedClasses['issue-state'];
    __VLS_styleScopedClasses['issue-state'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.issues.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("issues-section card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("issues-list") }, });
        for (const [issue] of __VLS_getVForSourceType((__VLS_ctx.issues))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((issue.id)), ...{ class: ("issue-item") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("issue-header") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("issue-title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("issue-number") }, });
            (issue.number);
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((issue.html_url)), target: ("_blank"), ...{ class: ("issue-link") }, });
            (issue.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("issue-state") }, ...{ class: ((issue.state)) }, });
            (issue.state);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("issue-meta") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("issue-user") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((issue.user.avatar_url)), alt: ((issue.user.login)), ...{ class: ("user-avatar") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (issue.user.login);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("issue-date") }, });
            (__VLS_ctx.formatDate(issue.created_at));
            if (issue.labels.length) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("issue-labels") }, });
                for (const [label] of __VLS_getVForSourceType((issue.labels))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((label.name)), ...{ class: ("label") }, ...{ style: (({ backgroundColor: '#' + label.color })) }, });
                    (label.name);
                }
            }
        }
    }
    __VLS_styleScopedClasses['issues-section'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['issues-list'];
    __VLS_styleScopedClasses['issue-item'];
    __VLS_styleScopedClasses['issue-header'];
    __VLS_styleScopedClasses['issue-title'];
    __VLS_styleScopedClasses['issue-number'];
    __VLS_styleScopedClasses['issue-link'];
    __VLS_styleScopedClasses['issue-state'];
    __VLS_styleScopedClasses['issue-meta'];
    __VLS_styleScopedClasses['issue-user'];
    __VLS_styleScopedClasses['user-avatar'];
    __VLS_styleScopedClasses['issue-date'];
    __VLS_styleScopedClasses['issue-labels'];
    __VLS_styleScopedClasses['label'];
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
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */

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
    __VLS_styleScopedClasses['pull-requests-section'];
    __VLS_styleScopedClasses['pr-link'];
    __VLS_styleScopedClasses['pr-state'];
    __VLS_styleScopedClasses['pr-state'];
    __VLS_styleScopedClasses['pr-state'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.pullRequests.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pull-requests-section card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pull-requests-list") }, });
        for (const [pr] of __VLS_getVForSourceType((__VLS_ctx.pullRequests))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((pr.id)), ...{ class: ("pr-item") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pr-header") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pr-title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("pr-number") }, });
            (pr.number);
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((pr.html_url)), target: ("_blank"), ...{ class: ("pr-link") }, });
            (pr.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("pr-state") }, ...{ class: ((pr.state)) }, });
            (pr.state);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pr-meta") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pr-user") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((pr.user.avatar_url)), alt: ((pr.user.login)), ...{ class: ("user-avatar") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (pr.user.login);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pr-date") }, });
            (__VLS_ctx.formatDate(pr.created_at));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pr-branches") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("branch") }, });
            (pr.head.ref);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("arrow") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("branch") }, });
            (pr.base.ref);
        }
    }
    __VLS_styleScopedClasses['pull-requests-section'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['pull-requests-list'];
    __VLS_styleScopedClasses['pr-item'];
    __VLS_styleScopedClasses['pr-header'];
    __VLS_styleScopedClasses['pr-title'];
    __VLS_styleScopedClasses['pr-number'];
    __VLS_styleScopedClasses['pr-link'];
    __VLS_styleScopedClasses['pr-state'];
    __VLS_styleScopedClasses['pr-meta'];
    __VLS_styleScopedClasses['pr-user'];
    __VLS_styleScopedClasses['user-avatar'];
    __VLS_styleScopedClasses['pr-date'];
    __VLS_styleScopedClasses['pr-branches'];
    __VLS_styleScopedClasses['branch'];
    __VLS_styleScopedClasses['arrow'];
    __VLS_styleScopedClasses['branch'];
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

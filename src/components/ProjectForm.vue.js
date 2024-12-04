import { ref, computed, onMounted } from 'vue';
import { useProjectStore } from '@/stores/projects';
import GithubRepoSelector from './GithubRepoSelector.vue';
import { v4 as uuidv4 } from 'uuid';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emit = defineEmits();
const formData = ref({
    title: '',
    description: '',
    status: 'active',
    priority: 'medium',
    dueDate: '',
    githubRepo: null
});
const isEdit = computed(() => !!props.project);
onMounted(() => {
    if (props.project) {
        formData.value = {
            title: props.project.title,
            description: props.project.description,
            status: props.project.status,
            priority: props.project.priority,
            dueDate: props.project.dueDate || '',
            githubRepo: props.project.githubRepo || null
        };
    }
    else {
        // Reset to default values if no project is provided
        formData.value = {
            title: '',
            description: '',
            status: 'active',
            priority: 'medium',
            dueDate: '',
            githubRepo: null
        };
    }
});
const handleSubmit = () => {
    const projectData = {
        ...formData.value,
        id: props.project?.id || uuidv4(),
        createdAt: props.project?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tasks: props.project?.tasks || [],
        repoUrl: formData.value.githubRepo?.html_url,
    };
    emit('submit', projectData);
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
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['btn-secondary'];
    __VLS_styleScopedClasses['btn-secondary'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, ...{ class: ("project-form") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("title"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("title"), value: ((__VLS_ctx.formData.title)), type: ("text"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("description"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("description"), value: ((__VLS_ctx.formData.description)), rows: ("3"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("status"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("status"), value: ((__VLS_ctx.formData.status)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("active"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("completed"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("on-hold"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("priority"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("priority"), value: ((__VLS_ctx.formData.priority)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("low"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("medium"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("high"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("dueDate"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("dueDate"), type: ("date"), });
    (__VLS_ctx.formData.dueDate);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    // @ts-ignore
    [GithubRepoSelector,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(GithubRepoSelector, new GithubRepoSelector({ modelValue: ((__VLS_ctx.formData.githubRepo)), }));
    const __VLS_1 = __VLS_0({ modelValue: ((__VLS_ctx.formData.githubRepo)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-actions") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("btn-primary") }, });
    (__VLS_ctx.isEdit ? 'Save Changes' : 'Create Project');
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.$emit('cancel');
            } }, type: ("button"), ...{ class: ("btn-secondary") }, });
    __VLS_styleScopedClasses['project-form'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-actions'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['btn-secondary'];
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
            GithubRepoSelector: GithubRepoSelector,
            formData: formData,
            isEdit: isEdit,
            handleSubmit: handleSubmit,
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

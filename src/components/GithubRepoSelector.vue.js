import { ref, computed } from 'vue';
import { useGithubStore } from '@/stores/github';
import { debounce } from 'lodash-es';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emit = defineEmits();
const githubStore = useGithubStore();
const searchQuery = ref('');
const isLoading = ref(false);
const error = ref('');
const searchResults = ref([]);
const isSelected = computed(() => (repo) => props.modelValue?.id === repo.id);
const handleSearch = debounce(async () => {
    if (!searchQuery.value.trim()) {
        searchResults.value = [];
        return;
    }
    isLoading.value = true;
    error.value = '';
    try {
        searchResults.value = await githubStore.searchRepositories(searchQuery.value);
    }
    catch (err) {
        error.value = 'Failed to search repositories. Please try again.';
        console.error('GitHub search error:', err);
    }
    finally {
        isLoading.value = false;
    }
}, 300);
const selectRepo = (repo) => {
    emit('update:modelValue', repo);
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
    __VLS_styleScopedClasses['search-box'];
    __VLS_styleScopedClasses['repo-item'];
    __VLS_styleScopedClasses['repo-item'];
    __VLS_styleScopedClasses['repo-item'];
    __VLS_styleScopedClasses['private-badge'];
    __VLS_styleScopedClasses['public-badge'];
    __VLS_styleScopedClasses['no-results'];
    __VLS_styleScopedClasses['no-results'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("github-selector") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.handleSearch) }, value: ((__VLS_ctx.searchQuery)), type: ("text"), placeholder: ("Enter repository name or GitHub URL..."), });
    if (__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("loading") }, });
    }
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("error") }, });
        (__VLS_ctx.error);
    }
    if (__VLS_ctx.searchResults.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("results") }, });
        for (const [repo] of __VLS_getVForSourceType((__VLS_ctx.searchResults))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.searchResults.length > 0)))
                            return;
                        __VLS_ctx.selectRepo(repo);
                    } }, key: ((repo.id)), ...{ class: ("repo-item") }, ...{ class: (({ selected: __VLS_ctx.isSelected(repo) })) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("repo-info") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((repo.owner.avatar_url)), alt: ((repo.owner.login)), ...{ class: ("avatar") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("repo-details") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("repo-name") }, });
            (repo.full_name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("repo-description") }, });
            (repo.description || 'No description available');
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("repo-meta") }, });
            if (repo.private) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("private-badge") }, });
            }
            else {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("public-badge") }, });
            }
        }
    }
    else if (__VLS_ctx.searchQuery && !__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("no-results") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    }
    __VLS_styleScopedClasses['github-selector'];
    __VLS_styleScopedClasses['search-box'];
    __VLS_styleScopedClasses['loading'];
    __VLS_styleScopedClasses['error'];
    __VLS_styleScopedClasses['results'];
    __VLS_styleScopedClasses['repo-item'];
    __VLS_styleScopedClasses['selected'];
    __VLS_styleScopedClasses['repo-info'];
    __VLS_styleScopedClasses['avatar'];
    __VLS_styleScopedClasses['repo-details'];
    __VLS_styleScopedClasses['repo-name'];
    __VLS_styleScopedClasses['repo-description'];
    __VLS_styleScopedClasses['repo-meta'];
    __VLS_styleScopedClasses['private-badge'];
    __VLS_styleScopedClasses['public-badge'];
    __VLS_styleScopedClasses['no-results'];
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
            searchQuery: searchQuery,
            isLoading: isLoading,
            error: error,
            searchResults: searchResults,
            isSelected: isSelected,
            handleSearch: handleSearch,
            selectRepo: selectRepo,
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

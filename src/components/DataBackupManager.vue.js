import { useProjectStore } from '@/stores/projects';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useProjectStore();
const { lastBackupDate } = storeToRefs(store);
const fileInput = ref(null);
const formatDate = (date) => {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    };
    return new Date(date).toLocaleString('en-US', options);
};
const exportBackup = () => {
    store.exportBackup();
};
const triggerFileInput = () => {
    fileInput.value?.click();
};
const handleFileImport = async (event) => {
    const input = event.target;
    if (input.files?.length) {
        const file = input.files[0];
        const success = await store.importBackup(file);
        if (success) {
            alert('Backup imported successfully');
        }
        else {
            alert('Error importing backup');
        }
        input.value = ''; // Reset input
    }
};
const restoreFromHistory = (timestamp) => {
    if (confirm('Are you sure you want to restore data from this backup? Current changes will be lost.')) {
        const success = store.restoreFromHistory(timestamp);
        if (success) {
            alert('Data restored successfully');
        }
        else {
            alert('Error restoring data');
        }
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
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['history-section'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("backup-manager") }, });
    if (__VLS_ctx.lastBackupDate) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("backup-info") }, });
        (__VLS_ctx.formatDate(__VLS_ctx.lastBackupDate));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("backup-actions") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.exportBackup) }, ...{ class: ("btn btn-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.triggerFileInput) }, ...{ class: ("btn btn-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.handleFileImport) }, type: ("file"), ref: ("fileInput"), accept: (".json"), ...{ style: ({}) }, });
    // @ts-ignore navigation for `const fileInput = ref()`
    __VLS_ctx.fileInput;
    if (__VLS_ctx.store.history.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("history-section") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("history-list") }, });
        for (const [entry] of __VLS_getVForSourceType((__VLS_ctx.store.history.slice(0, 5)))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((entry.timestamp)), ...{ class: ("history-item") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("history-info") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("history-date") }, });
            (__VLS_ctx.formatDate(new Date(entry.timestamp)));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("history-description") }, });
            (entry.description);
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.store.history.length)))
                            return;
                        __VLS_ctx.restoreFromHistory(entry.timestamp);
                    } }, ...{ class: ("btn btn-small") }, });
        }
    }
    __VLS_styleScopedClasses['backup-manager'];
    __VLS_styleScopedClasses['backup-info'];
    __VLS_styleScopedClasses['backup-actions'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['history-section'];
    __VLS_styleScopedClasses['history-list'];
    __VLS_styleScopedClasses['history-item'];
    __VLS_styleScopedClasses['history-info'];
    __VLS_styleScopedClasses['history-date'];
    __VLS_styleScopedClasses['history-description'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-small'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "fileInput": __VLS_nativeElements['input'],
    };
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
            store: store,
            lastBackupDate: lastBackupDate,
            fileInput: fileInput,
            formatDate: formatDate,
            exportBackup: exportBackup,
            triggerFileInput: triggerFileInput,
            handleFileImport: handleFileImport,
            restoreFromHistory: restoreFromHistory,
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

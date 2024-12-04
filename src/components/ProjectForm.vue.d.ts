import type { Project } from '@/types';
type __VLS_Props = {
    project?: Project | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    cancel: () => any;
    submit: (project: Partial<Project>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCancel?: (() => any) | undefined;
    onSubmit?: ((project: Partial<Project>) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, HTMLFormElement>;
export default _default;

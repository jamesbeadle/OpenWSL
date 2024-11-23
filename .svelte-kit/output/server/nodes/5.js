

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gameplay-rules/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ClGRW8a5.js","_app/immutable/chunks/index.Df-ZQz04.js","_app/immutable/chunks/vendor.Cm84uoVT.js"];
export const stylesheets = ["_app/immutable/assets/index.709E4Fmk.css"];
export const fonts = [];

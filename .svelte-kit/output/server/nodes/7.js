

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pick-team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.C3A4zA3Y.js","_app/immutable/chunks/index.Df-ZQz04.js","_app/immutable/chunks/vendor.Cm84uoVT.js"];
export const stylesheets = ["_app/immutable/assets/index.709E4Fmk.css"];
export const fonts = [];

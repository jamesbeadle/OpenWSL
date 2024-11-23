

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DTXae12A.js","_app/immutable/chunks/index.Df-ZQz04.js","_app/immutable/chunks/vendor.Cm84uoVT.js"];
export const stylesheets = ["_app/immutable/assets/index.709E4Fmk.css"];
export const fonts = [];

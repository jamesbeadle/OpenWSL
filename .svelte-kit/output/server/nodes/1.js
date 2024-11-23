

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B51Xr4nh.js","_app/immutable/chunks/index.Df-ZQz04.js","_app/immutable/chunks/vendor.Cm84uoVT.js"];
export const stylesheets = ["_app/immutable/assets/index.709E4Fmk.css"];
export const fonts = [];



export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Cx1gAKQf.js","_app/immutable/chunks/index.DUBmNbhq.js","_app/immutable/chunks/vendor.ChzdcO-I.js"];
export const stylesheets = ["_app/immutable/assets/index.709E4Fmk.css"];
export const fonts = [];



export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.gq2JhTLU.js","_app/immutable/chunks/index.DJhnritm.js","_app/immutable/chunks/vendor.BxxNMinp.js"];
export const stylesheets = ["_app/immutable/assets/index.D7BIZ9V2.css"];
export const fonts = [];


export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/manager/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.D_3D7Ri7.js","_app/immutable/chunks/index.DJhnritm.js","_app/immutable/chunks/vendor.BxxNMinp.js"];
export const stylesheets = ["_app/immutable/assets/index.D7BIZ9V2.css"];
export const fonts = [];

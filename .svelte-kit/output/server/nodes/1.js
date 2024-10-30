

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BZ-Ln4Az.js","_app/immutable/chunks/index.DJhnritm.js","_app/immutable/chunks/vendor.BxxNMinp.js"];
export const stylesheets = ["_app/immutable/assets/index.D7BIZ9V2.css"];
export const fonts = [];

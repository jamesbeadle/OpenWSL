

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gameplay-rules/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CTo4ClqI.js","_app/immutable/chunks/index.CRdYa5ei.js","_app/immutable/chunks/vendor.B7Ok8-00.js"];
export const stylesheets = ["_app/immutable/assets/index.BUXvPZKo.css"];
export const fonts = [];

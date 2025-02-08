

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.cv5DiJnI.js","_app/immutable/chunks/index.DUBmNbhq.js","_app/immutable/chunks/vendor.ChzdcO-I.js"];
export const stylesheets = ["_app/immutable/assets/index.709E4Fmk.css"];
export const fonts = [];

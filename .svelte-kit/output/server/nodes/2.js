export const index = 2;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_page.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/2.Ddxfbk2I.js",
  "_app/immutable/chunks/index.DJhnritm.js",
  "_app/immutable/chunks/vendor.BxxNMinp.js",
];
export const stylesheets = ["_app/immutable/assets/index.D7BIZ9V2.css"];
export const fonts = [];

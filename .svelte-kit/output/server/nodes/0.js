export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/fallbacks/layout.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/0.GzeOxGvQ.js",
  "_app/immutable/chunks/index.DJhnritm.js",
  "_app/immutable/chunks/vendor.BxxNMinp.js",
];
export const stylesheets = ["_app/immutable/assets/index.D7BIZ9V2.css"];
export const fonts = [];

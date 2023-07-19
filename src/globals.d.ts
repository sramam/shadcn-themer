declare module 'tailwindcss-animate';
// At the time of developing this module, we encountered type incompatibilities:
// - postcss-import@15.1.0
// - @types/postcss-import@14.0.0 
// So we attempt to bypass the type-checker.
declare module 'postcss-import';
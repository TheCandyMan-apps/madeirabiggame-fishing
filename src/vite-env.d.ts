// Allow importing CSS files in TypeScript (Vite handles them at build time)
declare module '*.css' {
  const content: Record<string, string>
  export default content
}

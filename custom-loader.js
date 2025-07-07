// Custom image loader that bypasses all Next.js optimization
export default function customLoader({ src, width, quality }) {
  // Simply return the source URL unchanged
  // This completely bypasses Next.js image optimization
  return src;
}
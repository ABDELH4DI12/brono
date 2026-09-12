/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep development HMR manifests isolated from production builds.
  // This prevents `npm run build` from invalidating a running `npm run dev` session.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

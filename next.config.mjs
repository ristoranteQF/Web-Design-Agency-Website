/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // site static, ideal pentru Cloudflare Pages (gratuit)
  trailingSlash: true,     // /pachete/ -> pachete/index.html
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};
export default nextConfig;

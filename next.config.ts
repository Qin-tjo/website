import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/website" : "",
  },
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: "/website",
        assetPrefix: "/website/",
      }
    : {}),
};

export default nextConfig;

import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    basePath: "/pa-mir-next",
    assetPrefix: "pa-mir-next",
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;

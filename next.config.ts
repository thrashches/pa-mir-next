import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH: '',

    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;

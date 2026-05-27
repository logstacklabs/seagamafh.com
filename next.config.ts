import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "www.seagamafh.com",
                    },
                ],
                destination: "https://seagamafh.com/:path*",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

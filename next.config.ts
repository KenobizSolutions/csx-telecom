import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "telephonie-cahors.com" }],
        destination: "https://www.csx-telecom.fr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.telephonie-cahors.com" }],
        destination: "https://www.csx-telecom.fr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "telephonie-montauban.com" }],
        destination: "https://www.csx-telecom.fr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.telephonie-montauban.com" }],
        destination: "https://www.csx-telecom.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

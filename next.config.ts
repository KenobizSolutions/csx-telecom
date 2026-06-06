import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 : les qualités doivent être déclarées explicitement (défaut [75]).
    // 85 = logo header, 80 = logo footer, 75 = défaut des autres images.
    qualities: [75, 80, 85],
  },
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

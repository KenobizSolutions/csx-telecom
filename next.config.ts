import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          // Le micro n'est volontairement pas restreint : requis par le
          // widget vocal Steeve (ElevenLabs).
          { key: "Permissions-Policy", value: "camera=(), geolocation=(), payment=()" },
        ],
      },
    ];
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

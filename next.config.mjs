/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-hello",
            value: "there",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["images.unsplash.com", "img.freepik.com", "plus.unsplash.com"],
  },
};

export default nextConfig;

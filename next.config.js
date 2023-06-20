/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "images.unsplash.com",
      "images.ctfassets.net",
    ],
  },
}

module.exports = nextConfig

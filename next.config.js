/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    localeDetection: false,
  },
}

module.exports = nextConfig

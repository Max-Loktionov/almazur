/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST_TYPE: process.env.HOST_TYPE,
    PORT: process.env.PORT,
    HOST: process.env.HOST,
  },
};

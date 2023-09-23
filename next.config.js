/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'default',
        path: '/_next/image'
    }
}
module.exports = nextConfig
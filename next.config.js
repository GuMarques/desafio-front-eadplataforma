/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'desafio.eadplataforma.com',
            }
        ]
    }
}

module.exports = nextConfig

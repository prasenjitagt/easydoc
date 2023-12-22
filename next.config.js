/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname:"images.unsplash.com"}]
    },
    experimental:{
        serverActions: {
            bodySizeLimit: '100mb',
          },
    }
   
}


module.exports = nextConfig

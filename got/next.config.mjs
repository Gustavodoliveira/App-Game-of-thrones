/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'thronesapi.com',
                port: '',
                pathname: '/assets/images/**',
            },
        ],
    },

};



export default nextConfig;

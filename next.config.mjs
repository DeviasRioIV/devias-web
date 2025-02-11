/** @type {import('next').NextConfig} */

import createNextIntPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntPlugin()
const nextConfig = {
    /* async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/',
        },
      ];
    }, */
  };

  export default withNextIntl(nextConfig)

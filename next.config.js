module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'image.tmdb.org',
    ],
    path: '/_next/image',
    loader: 'default',
  },
  sassOptions: {
    prependData: `
      @import "~include-media/dist/include-media";

      $breakpoints: (phone: 640px,
      tablet: 768px,
      desktop: 1024px) !default;    
    `
  }
}

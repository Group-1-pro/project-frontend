/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "127.0.0.1",
      'images.wagwalkingweb.com',
      'www.carelink.org',
      'stpaulsfirst.org',
      'healingwithhorsesranch.org',
      'www.budgetdumpster.com',
      'uploads-ssl.webflow.com',
      'randomuser.me', // Assuming this domain is used for avatar images
      // Add more image domains if needed
      'c0.wallpaperflare.com', 'static.vecteezy.com','c0.wallpaperflare.com','wallpaperaccess.com','wanderhands.vercel.app'
    ], 
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // SVG এরর হ্যান্ডেল করার জন্য নিচের ৩টি লাইন যোগ করা হয়েছে
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // এটি সব ডোমেইন থেকে ইমেজ সাপোর্ট করবে
      },
      {
        protocol: 'http', // কিছু ইমেজ যদি http লিঙ্কে থাকে সেটার জন্য
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

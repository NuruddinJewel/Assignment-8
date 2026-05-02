// import { NextResponse } from "next/server";

// export async function middleware(request) {
//     const { pathname } = request.nextUrl;

//     // /courses/[id] — only details page is protected, not /courses list
//     const isCourseDetails = /^\/courses\/[^/]+$/.test(pathname);

//     if (isCourseDetails) {
//         // better-auth session verify via internal API
//         const sessionRes = await fetch(new URL("/api/auth/get-session", request.url), {
//             headers: {
//                 cookie: request.headers.get("cookie") || "",
//             },
//         });

//         const session = await sessionRes.json();

//         if (!session?.user) {
//             const loginUrl = new URL("/login", request.url);
//             loginUrl.searchParams.set("callbackUrl", pathname);
//             return NextResponse.redirect(loginUrl);
//         }
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/courses/:path+"],
// };

// import { NextResponse } from "next/server";

// export async function middleware(request) {
//     const { pathname } = request.nextUrl;

//     const isCourseDetails = /^\/courses\/[^/]+$/.test(pathname);

//     if (isCourseDetails) {
//         // better-auth er sob possible cookie names check koro
//         const cookies = request.cookies;

//         const session =
//             cookies.get("better-auth.session_token")?.value ||
//             cookies.get("__Secure-better-auth.session_token")?.value ||
//             cookies.get("better-auth.session")?.value ||
//             cookies.get("session")?.value;

//         if (!session) {
//             const loginUrl = new URL("/login", request.url);
//             loginUrl.searchParams.set("callbackUrl", pathname);
//             return NextResponse.redirect(loginUrl);
//         }
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/courses/:path+"],
// };

// 2

// export async function middleware(request) {
//   const session = await auth.api.getSession({
//     headers: request.headers,
//   });

//   if (session) {
//     return NextResponse.next();
//   }

//   const loginUrl = new URL("/login", request.url);
//   loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
//   return NextResponse.redirect(loginUrl);
// }

// export const config = {
//   matcher: ["/courses/:path+"],
// };

// import { NextResponse } from "next/server";
// import { auth } from "@/utils/auth";
// // import { headers } from "next/headers";

// export async function proxy(request) {
//     // return NextResponse.redirect(new URL('/login', request.url))
//     console.log(request, "request")
//     // return NextResponse.next();
//     const session = await auth.api.getSession({
//         // headers: await headers()
//         headers: request.headers
//     });
//     // console.log(session, "session")
//     // console.log("Full session object:", JSON.stringify(session, null, 2));
//     // const isLoggedIn = false;
//     // if (isLoggedIn) {
//     //     return NextResponse.next();
//     // }
//     // return NextResponse.redirect(new URL('/login', request.url))
//     // if--else
//     if (session) {
//         return NextResponse.next();
//     }
//     return NextResponse.redirect(new URL('/login', request.url))
// }

// export const config = {
//     // matcher: ['/career', '/about'],
//     matcher: ['/courses', '/courses/:path*'],
// }

/*

import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: '/about/:path*',
}

*/

// import { NextResponse } from "next/server";
// import { auth } from "@/utils/auth";

// export async function middleware(request) {
//   const session = await auth.api.getSession({
//     headers: request.headers,
//   });

//   if (session) {
//     return NextResponse.next();
//   }

//   const loginUrl = new URL("/login", request.url);
//   loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
//   return NextResponse.redirect(loginUrl);
// }

// export const config = {
//   // /courses/1, /courses/abc — protect details page only
//   // /courses — NOT protected (all users can see course list)
//   matcher: ["/courses/:id([^/]+)"],
// };


import { NextResponse } from "next/server";
import { auth } from "@/utils/auth"; // your better-auth server instance

export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (session) {
    return NextResponse.next();
  }

  // Not logged in → save intended destination, redirect to /login
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  // Protects /courses/[id] but NOT /courses (listing page is public)
  matcher: ["/courses/:id+"],
};
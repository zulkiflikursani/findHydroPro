export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/admin/:path*"],
  // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

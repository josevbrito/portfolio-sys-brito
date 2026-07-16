import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip Next internals, the metadata routes and anything with a file extension
  // (so /flags/br.svg, /projects/*.png and /downloads/*.apk are served as-is).
  matcher: "/((?!api|_next|_vercel|opengraph-image|robots.txt|sitemap.xml|.*\\..*).*)",
};

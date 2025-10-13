import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { locales, defaultLocale } from "./lib/i18n";

function getLocale(request: NextRequest): string {
  // Get locale from Accept-Language header
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    return matchLocale(
      languages,
      locales as unknown as string[],
      defaultLocale,
    );
  } catch {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes("/icon") ||
    pathname.includes("/apple-icon") ||
    pathname.includes("/og.png") ||
    pathname.includes("/manifest.json") ||
    pathname.includes("/robots.txt") ||
    pathname.includes("/sitemap.xml") ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!_next|api|static|.*\\..*|og\\.png|manifest\\.json|robots\\.txt|sitemap\\.xml).*)",
  ],
};

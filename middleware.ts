import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(id|en|de)/:path*"],
};

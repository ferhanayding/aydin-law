import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // api, Next.js iç dosyaları ve uzantılı dosyalar (favicon.ico, görseller vb.) hariç tüm yollar
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};

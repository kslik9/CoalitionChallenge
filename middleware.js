import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  //   publicRoutes: ["/"],
  publicRoutes: (req) => !req.url.includes("/dashboard"),
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}

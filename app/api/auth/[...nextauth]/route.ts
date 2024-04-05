// import { mergAnonymusCart } from "@/lib/db/cart";
import { authOptions } from "@/lib/authOption";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import { header } from "framer-motion/client";
import { cookies } from "next/headers";

import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    // const headrsList = await headers()
    const cookieStore = await cookies()
    cookieStore.delete("theme")
    return new Response("<h1>Profile api</h1>", {
        headers:{
            "Content-Type":"text/html",
            // "Set-Cookie":"theme=dark",
        }
    })
}


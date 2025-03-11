import { betterAuth } from "better-auth";
import ps from "pg"

import { username } from "better-auth/plugins"



export const auth = betterAuth({

    emailAndPassword: {
        enabled: true
    },

    plugins: [
        username()
    ] ,

    database: new ps.Pool({
        connectionString : process.env.DATABASE_URL
    })
})

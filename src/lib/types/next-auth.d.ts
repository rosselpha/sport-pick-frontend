// import NextAuth, {DefaultSession } from "next-auth";
// import NextAuth, { DefaultSession } from "next-auth"
// import { JWT } from "next-auth/jwt";


// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     accessToken: string,
//     id: string,
//     user: {
//         id: string,
//         email: string,
//         username: string,
//     }

//   }
//   interface User {
//     token: string,
//     username: string,
//     user:{
//         id: string,
//         username: string,
//         email: string,
//     }
//   }

// }
// declare module "next-auth/jwt" {
//     interface JWT {
//       id: string;
//       role: number;
//     }
//   }
    //   user: {
    //   /** The user's postal address. */
    //   id: string,
    //   username: string,
    //   accessToken: string
    // } & DefaultSession["user"]
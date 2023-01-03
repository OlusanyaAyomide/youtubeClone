import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifypassword } from "../../../lib/hashpassword";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(req.body);
        console.log(credentials.email);
        async function FetchApi() {
          const res = await fetch("http://127.0.0.1:8000/checker", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email }),
          });
          const status = res.status;
          const data = await res.json();
          return { data, status };
        }
        const { data, status } = await FetchApi();
        if (status === 400) {
          throw new Error("Username does not exists");
        } else {
          const isValid = await verifypassword(
            credentials.password,
            data.password
          );
          if (!isValid) {
            throw new Error("username and Password does not match");
          } else {
            console.log(data.id);
            console.log(data.username);
            return {
              email: {
                id: data.id,
                email: data.email,
                username: data.username,
              },
            };
          }
        }
      },
    }),
  ],
});

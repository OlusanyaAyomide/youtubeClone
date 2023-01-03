import { hashpassword } from "../../../lib/hashpassword";
export default async function handler(req, res) {
  console.log("aliveeeeee");
  const hostPath = "http://127.0.0.1:8000/testuser";
  const { email, passwords, username } = req.body;
  if (
    !email ||
    !email.includes("@") ||
    !passwords ||
    !username ||
    passwords.trim().length < 7
  ) {
    res.status(422).json({ message: "Email,username or pasword invalid" });
    return;
  }
  async function FetchApi() {
    let status;
    const password = await hashpassword(passwords);
    const res = await fetch(hostPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    });
    status = res.status;
    const data = await res.json();
    return { data, status };
  }
  const { data, status } = await FetchApi();
  console.log(data, status);
  if (status === 200) {
    res.status(200).json({ message: "Succesfully created" });
  } else {
    res.status(status).json(data);
  }
}

import { hash, compare } from "bcryptjs";
export async function hashpassword(password) {
  const encrypted = await hash(password, 12);
  return encrypted;
}
export async function verifypassword(password, former) {
  console.log(password, former);
  const isValid = await compare(password, former);
  console.log(isValid);
  return isValid;
}

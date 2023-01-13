import { hash, compare } from "bcryptjs";
export async function hashpassword(password) {
  const encrypted = await hash(password, 12);
  return encrypted;
}
export async function verifypassword(password, former) {
  const isValid = await compare(password, former);
  return isValid;
}

import { JwtPayload } from "jsonwebtoken";
import { Account } from "./Account";

// {
//   id: string
// }
export type TokenPayload = Pick<Account, "id">;

export interface DecodedToken extends JwtPayload {
  id: string;
}

import { z } from "zod";

export const userRegisterSchema = z.object({
  name: z.string().min(2,"Name required!" ),
  email: z.email({ message: "Email not valid" }),
  password: z.string().min(5, "Password must be 5 character "),
});

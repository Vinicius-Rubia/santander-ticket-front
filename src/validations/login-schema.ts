import z from "zod";

export const LoginSchema = z.object({
  email: z.email("E-mail inválido."),
  password: z
    .string()
    .trim()
    .min(8, "A senha precisa ter no mínimo 8 caracteres.")
    .max(20, "A senha precisa ter no máximo 20 caracteres."),
});

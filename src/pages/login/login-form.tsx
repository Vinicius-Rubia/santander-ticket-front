import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LoginSchema } from "@/validations/login-schema";
import type { LoginSchemaType } from "@/validations/schemas-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const navigate = useNavigate();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
    navigate("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col space-y-4 w-full max-w-sm", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-1 text-center mb-10">
          <h1 className="text-2xl font-bold">Faça login na sua conta.</h1>
          <p className="text-muted-foreground text-sm">
            Insira seu e-mail abaixo para acessar sua conta.
          </p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Senha</FormLabel>
                <a
                  href="#"
                  className="text-sm underline-offset-4 hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full">
          Entrar
        </Button>
        <p className="text-center">
          Não tem um conta?{" "}
          <a href="#" className="underline underline-offset-4">
            Criar conta
          </a>
        </p>
      </form>
    </Form>
  );
}

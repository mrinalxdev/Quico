"use client";

import * as z from "zod";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Twitter, Facebook } from "lucide-react";


// import { Section, Container } from "../craft";
// import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Container, Section } from "./craft";
import { Button } from "./ui/button";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function Footer() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <footer>
      <Section>
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h1 className="text-[3rem] font-sans font-bold">Quicko 💻</h1>
            </Link>
            <p>
              <Balancer>
                brijr/components is a collection of Next.js, React, Typescript
                components for building landing pages and websites.
              </Balancer>
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Github />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook />
              </Button>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="not-prose space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subscribe for Company Updates</FormLabel>
                    <FormControl>
                      <input type="text" className="md:w-96" placeholder="email here" />
                    </FormControl>
                    <FormDescription>
                      Lorem ipsum dolor sit amet.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </Container>
        <Container className="not-prose items-center justify-between border-t text-sm md:flex">
          <div className="mb-6 flex flex-col gap-4 underline decoration-muted underline-offset-4 md:mb-0 md:flex-row">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
          <p className="text-muted-foreground">
            ©{" "}
            <a href="https://github.com/brijr/components">brijr/components</a>.
            All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}

"use client"

import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"

const formSchema = z.object({
  name_4171387175: z.string().min(1),
  name_2062010259: z.string()
});

export default function MyForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        <FormField
          control={form.control}
          name="name_4171387175"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="">Full Name</FormLabel>
              <FormControl className="">
                <Input 
                  placeholder="Enter your name"
                  type="text"
                  {...field} />
              </FormControl>
              <FormDescription className="">Enter your name</FormDescription>
              <FormMessage className="" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_2062010259"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="">Email</FormLabel>
              <FormControl className="">
                <Input 
                  placeholder="Enter your email"
                  type="email"
                  {...field} />
              </FormControl>
              <FormDescription className="">This is your public display name.</FormDescription>
              <FormMessage className="" />
            </FormItem>
          )}
        />
        <Button className="" type="submit" variant="default" size="default">Submit</Button>
      </form>
    </Form>
  )
}
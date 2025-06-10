"use client"

import {

  useState

} from "react"

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

  cn

} from "@/lib/utils"

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



import {

  Textarea

} from "@/components/ui/textarea"

const formSchema = z.object({

  name_5599788793: z.string().min(1),

  name_3050094251: z.string().min(1),

  name_9609086058: z.number(),

  name_6790550515: z.string()

});
 
export default function MyForm() {
 
  const form = useForm({
    resolver: zodResolver(formSchema),
 
  })
 
  function onSubmit(values) {

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
    <>
      <h2 className="text-2xl font-bold text-foreground mb-8 max-w-3xl mx-auto">Post Review</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
          <FormField
            control={form.control}
            name="name_5599788793"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Talent name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    disabled
                    type=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name_3050094251"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Social media campaign"
                    disabled
                    type=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name_9609086058"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Rating</FormLabel>
                <FormControl className="w-full">
                  <StarRating value={field.value || 0} onChange={field.onChange} />
                </FormControl>
                <FormDescription>Please provide your rating (1-5 stars).</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name_6790550515"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feed Back</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share your Experience"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  )

}

// Add a simple star rating component inside this file
function StarRating({ value, onChange, max = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <button
          type="button"
          key={i}
          className={
            (i < value ? "text-yellow-400" : "text-gray-300 dark:text-gray-600") +
            " text-2xl focus:outline-none hover:scale-110 transition-transform"
          }
          onClick={() => onChange(i + 1)}
          aria-label={`Rate ${i + 1} star${i === 0 ? '' : 's'}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

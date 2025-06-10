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

  Select,

  SelectContent,

  SelectItem,

  SelectTrigger,

  SelectValue

} from "@/components/ui/select"

import {

  Slider

} from "@/components/ui/slider"

import {

  format

} from "date-fns"

import {

  Popover,

  PopoverContent,

  PopoverTrigger

} from "@/components/ui/popover"

import {

  Calendar

} from "@/components/ui/calendar"

import {

  Calendar as CalendarIcon

} from "lucide-react"

import {

  Textarea

} from "@/components/ui/textarea"

import {

  CloudUpload,

  Paperclip

} from "lucide-react"

import {

  FileInput,

  FileUploader,

  FileUploaderContent,

  FileUploaderItem

} from "@/components/file-upload"
 
const formSchema = z.object({

  name_1193074974: z.string().min(1),

  name_0583136316: z.string(),

  name_2146074541: z.number().min(1000).max(50000),

  name_8600082975: z.string().min(1),

  name_0930666388: z.coerce.date(),

  name_1599643239: z.string(),

  name_5253075763: z.string()

});
 
export default function MyForm() {
 
  const [files, setFiles] = useState(null);
 
  const dropZoneConfig = {

    maxFiles: 5,

    maxSize: 1024 * 1024 * 4,

    multiple: true,

  };

  const form = useForm({

    resolver: zodResolver(formSchema),

    defaultValues: {

      "name_0930666388": new Date()

    },

  })
 
  function onSubmit(values) {

    try {

      console.log(values);

      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{`${JSON.stringify(values, null, 2)}`}</code>
        </pre>
      );

    } catch (error) {

      console.error("Form submission error", error);

      toast.error("Failed to submit the form. Please try again.");

    }

  }
 
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-8 max-w-3xl mx-auto">Post Project</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
          <FormField

          control={form.control}

          name="name_1193074974"

          render={({ field }) => (
<FormItem>
<FormLabel>Project Title</FormLabel>
<FormControl>
<Input 

                placeholder="Social Media Campaign"

                type=""

                {...field} />
</FormControl>
<FormMessage />
</FormItem>

          )}

        />
<FormField

          control={form.control}

          name="name_0583136316"

          render={({ field }) => (
<FormItem>
<FormLabel>Category</FormLabel>
<Select onValueChange={field.onChange} defaultValue={field.value}>
<FormControl>
<SelectTrigger>
<SelectValue placeholder="Select Category" />
</SelectTrigger>
</FormControl>
<SelectContent>
<SelectItem value="m@example.com">m@example.com</SelectItem>
<SelectItem value="m@google.com">m@google.com</SelectItem>
<SelectItem value="m@support.com">m@support.com</SelectItem>
</SelectContent>
</Select>
<FormMessage />
</FormItem>

          )}

        />
<FormField

              control={form.control}

              name="name_2146074541"

              render={({ field: { value, onChange } }) => (
<FormItem>
<FormLabel>Price - {value}</FormLabel>
<FormControl>
<Slider

                    min={1000}

                    max={50000}

                    step={1000}

                    defaultValue={[5]}

                    onValueChange={(vals) => {

                      onChange(vals[0]);

                    }}

                  />
</FormControl>
<FormMessage />
</FormItem>

              )}

            />
<FormField

          control={form.control}

          name="name_8600082975"

          render={({ field }) => (
<FormItem>
<FormLabel>City / Location</FormLabel>
<FormControl>
<Input 

                placeholder="eg; hyderabad, mumbai"

                type=""

                {...field} />
</FormControl>
<FormMessage />
</FormItem>

          )}

        />
<FormField

      control={form.control}

      name="name_0930666388"

      render={({ field }) => (
<FormItem className="flex flex-col">
<FormLabel>Project Timeline</FormLabel>
<Popover>
<PopoverTrigger asChild>
<FormControl>
<Button

                  variant={"outline"}

                  className={cn(

                    "w-[240px] pl-3 text-left font-normal",

                    !field.value && "text-muted-foreground"

                  )}
>

                  {field.value ? (

                    format(field.value, "PPP")

                  ) : (
<span>Pick a date</span>

                  )}
<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
</Button>
</FormControl>
</PopoverTrigger>
<PopoverContent className="w-auto p-0" align="start">
<Calendar

                mode="single"

                selected={field.value}

                onSelect={field.onChange}

                initialFocus

              />
</PopoverContent>
</Popover>
<FormDescription>Your date of birth is used to calculate your age.</FormDescription>
<FormMessage />
</FormItem>

      )}

    />
<FormField

          control={form.control}

          name="name_1599643239"

          render={({ field }) => (
<FormItem>
<FormLabel>Project Description</FormLabel>
<FormControl>
<Textarea

                  placeholder="Describe Your Project"

                  className="resize-none"

                  {...field}

                />
</FormControl>
<FormMessage />
</FormItem>

          )}

        />
<FormField

              control={form.control}

              name="name_5253075763"

              render={({ field }) => (
<FormItem>
<FormLabel>Select File</FormLabel>
<FormControl>
<FileUploader

                      value={files}

                      onValueChange={setFiles}

                      dropzoneOptions={dropZoneConfig}

                      className="relative bg-background rounded-lg p-2"
>
<FileInput

                        id="fileInput"

                        className="outline-dashed outline-1 outline-slate-500"
>
<div className="flex items-center justify-center flex-col p-8 w-full ">
<CloudUpload className='text-gray-500 w-10 h-10' />
<p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
<span className="font-semibold">Click to upload</span>
&nbsp; or drag and drop
</p>
<p className="text-xs text-gray-500 dark:text-gray-400">

                            SVG, PNG, JPG or GIF
</p>
</div>
</FileInput>
<FileUploaderContent>

                        {files &&

                          files.length > 0 &&

                          files.map((file, i) => (
<FileUploaderItem key={i} index={i}>
<Paperclip className="h-4 w-4 stroke-current" />
<span>{file.name}</span>
</FileUploaderItem>

                          ))}
</FileUploaderContent>
</FileUploader>
</FormControl>
<FormDescription>Select a file to upload.</FormDescription>
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

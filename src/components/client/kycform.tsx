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
  name_7781939807: z.string().min(1),
  name_9671072775: z.string().min(1),
  name_7149700632: z.string(),
  name_5172549465: z.string(),
  name_4687564149: z.string().min(1),
  name_1502582003: z.string()
});

export default function MyForm() {

  const [files, setFiles] = useState < File[] | null > (null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10 px-2 sm:px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            {/* First Name */}
            <FormField
              control={form.control}
              name="name_7781939807"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">First Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Surname"
                      type="text"
                      {...field} />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
          </div>
          <div>
            {/* Last Name */}
            <FormField
              control={form.control}
              name="name_9671072775"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">Last Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Name"
                      type="text"
                      {...field} />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 w-full">
            {/* Document Type */}
            <FormField
              control={form.control}
              name="name_7149700632"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="">Document Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Upload Government ID" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="aadhaar">Aadhaar</SelectItem>
                      <SelectItem value="pan">PAN</SelectItem>
                      <SelectItem value="driving">Driving Licence</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
          </div>
          <div>
            {/* Email */}
            <FormField
              control={form.control}
              name="name_5172549465"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your email"
                      type="email"
                      {...field} />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
          </div>
          <div>
            {/* Phone */}
            <FormField
              control={form.control}
              name="name_4687564149"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">Phone</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your phone number"
                      type=""
                      {...field} />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* File Upload */}
        <FormField
          control={form.control}
          name="name_1502582003"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="">Select File</FormLabel>
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
                    <div className="flex items-center justify-center flex-col p-6 sm:p-8 w-full ">
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
                          <span className="truncate max-w-[120px] sm:max-w-xs">{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>
              <FormDescription>Select a file to upload.</FormDescription>
              <FormMessage className="" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-auto">Submit</Button>
      </form>
    </Form>
  )
}
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
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
  reason: z.string(),
  name_0994130846: z.string(),
  name_0249317447: z.string()
});

export default function DisputeForm() {

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="">Dispute Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="">
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select a dispute type" className="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="">
                  <SelectItem className="" value="not-delivered">Content not delivered</SelectItem>
                  <SelectItem className="" value="quality">Content quality/format issue</SelectItem>
                  <SelectItem className="" value="delay">Missed deadline/delayed campaign</SelectItem>
                  <SelectItem className="" value="payment">Payment/compensation issue</SelectItem>
                  <SelectItem className="" value="misuse">Misuse of brand assets</SelectItem>
                  <SelectItem className="" value="other">Other breach of contract</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name_0994130846"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="">Description</FormLabel>
              <FormControl className="">
                <Textarea
                  placeholder="Explain in detail"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_0249317447"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="">Select File</FormLabel>
              <FormControl className="">
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
                  <FileUploaderContent className="">
                    {files &&
                      files.length > 0 &&
                      files.map((file, i) => (
                        <FileUploaderItem className="" key={i} index={i}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>
              <FormDescription className="">Select a file to upload.</FormDescription>
              <FormMessage className="" />
            </FormItem>
          )}
        />
        <Button className="" type="submit" variant="default" size="default">Submit</Button>
      </form>
    </Form>
  )
}
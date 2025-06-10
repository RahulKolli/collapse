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
  Textarea
} from "@/components/ui/textarea"
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
  name_4923708719: z.string(),
  name_3319250002: z.number().min(1000).max(50000),
  name_0221175184: z.coerce.date(),
  name_4801478992: z.coerce.date(),
  name_7474687923: z.string()
});

export default function MyForm() {

  const [files, setFiles] = useState < File[] | null > (null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const today = new Date();
const defaultDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_4923708719: '',
      name_3319250002: 1000,
      name_0221175184: defaultDate,
      name_4801478992: defaultDate,
      name_7474687923: '',
    },
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
          name="name_4923708719"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="">Scope of Work</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your approach, content ideas, or creative direction…"
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
              name="name_3319250002"
              render={({ field: { value, onChange } }) => (
                <FormItem className="">
                  <FormLabel className="">Price - {value}</FormLabel>
                  <FormControl>
                    <Slider
                      min={1000}
                      max={50000}
                      step={1000}
                      value={[value]}
                      onValueChange={(vals) => {
                        onChange(vals[0]);
                      }}
                    />
                  </FormControl>
                  <FormDescription className="">Adjust the price by sliding.</FormDescription>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
      <FormField
      control={form.control}
      name="name_0221175184"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="">Start Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  size="default"
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
              <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
            </PopoverContent>
          </Popover>
          <FormMessage className="" />
        </FormItem>
      )}
    />
          </div>
          
          <div className="col-span-6">
            
      <FormField
      control={form.control}
      name="name_4801478992"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="">End Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  size="default"
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
              <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
            </PopoverContent>
          </Popover>
       
          <FormMessage className="" />
        </FormItem>
      )}
    />
          </div>
          
        </div>
        
            <FormField
              control={form.control}
              name="name_7474687923"
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
                  <FormDescription className="">Select a file to upload.</FormDescription>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
        <Button type="submit" className="" variant="default" size="default">Submit</Button>
      </form>
    </Form>
  )
}
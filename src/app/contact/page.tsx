import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(5, "Message must be at least 5 characters")
})

export default function ContactPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {name: "", email: "", message: ""}
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form submitted:", values);
    }
    return (
        <div>
            <Header />
            <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-center mb-4">Contact Us</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Input placeholder="Your Message" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </Form>
                
            </div>
        </div>
    )
}
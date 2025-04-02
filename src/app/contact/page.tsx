import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div>
            <Header />
            <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-center mb-4">Contact Us</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <Input placeholder="Your Name"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <Input type="email" placeholder="Your Email" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Message</label>
                        <Input placeholder="Your Message" />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
            </div>
        </div>
    )
}
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Form submitted successfully');
        reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[#0A2647] p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Let's chat.</h2>
              <p className="mb-6">Tell me about your property.</p>
              <div className="flex items-center mb-4">
                <Mail className="mr-2 h-5 w-5 text-[#d7b971]" />
                <a href="mailto:zach@Insightpropertytax.com" className="hover:text-[#d7b971]">zach@Insightpropertytax.com</a>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="mr-2 h-5 w-5 text-[#d7b971]" />
                <a href="tel:612-208-4419" className="hover:text-[#d7b971]">612-208-4419</a>
              </div>
              <div className="flex items-center">
                <Linkedin className="mr-2 h-5 w-5 text-[#d7b971]" />
                <a href="https://www.linkedin.com/in/zach-hepburn" target="_blank" rel="noopener noreferrer" className="hover:text-[#d7b971]">LinkedIn Profile</a>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#0A2647]">Send us a message</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" {...register("firstName", { required: true })} />
                  {errors.firstName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" {...register("lastName", { required: true })} />
                  {errors.lastName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" {...register("email", { required: true })} />
                  {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" {...register("phone")} />
                </div>
                <div className="mb-4">
                  <Label htmlFor="propertyId">Property Identification # (Optional)</Label>
                  <Input id="propertyId" {...register("propertyId")} />
                </div>
                <div className="mb-4">
                  <Label htmlFor="propertyDetails">Tell me about your property (Optional)</Label>
                  <Textarea id="propertyDetails" {...register("propertyDetails")} />
                </div>
                <Button type="submit" className="w-full bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

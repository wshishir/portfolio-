'use client';

import type React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, ChevronsDown, Download, Mail, MapPin, Phone, Send } from 'lucide-react';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks for your message! I'll get back to you soon.");
    }, 1500);
  };

  return (
    <section id='contact' className='space-y-6 pt-8 bg-black pb-20'>
      <div className='space-y-4 text-center mb-4'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl hello'>
          Great design starts with a conversation. Let’s talk!
        </h2>
        <p className='text-muted-foreground max-w-[600px] mx-auto'>
          Have a project in mind? Let's discuss how I can help bring your vision
          to life.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card className='bg-card/50 backdrop-blur-sm border-[#7600DE]/20'>
          <CardContent className='p-6 space-y-6'>
            <h3 className='text-xl font-semibold'>Contact Information</h3>

            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-full bg-[#7600DE]/10'>
                  <Mail className='h-4 w-4 text-[#7600DE]' />
                </div>
                <p>designbylakshmika@gmail.com</p>
              </div>

              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-full bg-[#7600DE]/10'>
                  <Phone className='h-4 w-4 text-[#7600DE]' />
                </div>
                <p>+91 7569794617</p>
              </div>

              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-full bg-[#7600DE]/10'>
                  <MapPin className='h-4 w-4 text-[#7600DE]' />
                </div>
                <p>Hyderabad, India</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-card/50 backdrop-blur-sm border-[#7600DE]/20'>
          <CardContent className='p-6'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' placeholder='Your name' required />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Your email'
                  required
                />
              </div>
              <div className='space-y-2'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='w-full text-gray-400 '>
                      Kind of Service
                      <ChevronsDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent id='service'>
                    <DropdownMenuItem>Logo Design</DropdownMenuItem>
                    <DropdownMenuItem>Social Media Design</DropdownMenuItem>
                    <DropdownMenuItem>Package Design</DropdownMenuItem>
                    <DropdownMenuItem>
                      Brand & Visual Identity Design
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  placeholder='Tell me about your project'
                  rows={4}
                  required
                />
              </div>

              <Button
                type='submit'
                className='w-full bg-[#7600DE] hover:bg-[#7600DE] text-white'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className='flex items-center gap-2'>
                    <div className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
                    Sending...
                  </span>
                ) : (
                  <span className='flex items-center gap-2'>
                    Send Message <Send className='h-4 w-4' />
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

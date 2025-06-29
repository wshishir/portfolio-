'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Paperclip, Phone, PlaneIcon, Send } from 'lucide-react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const ContactSection: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section id='contact' className='space-y-12 py-6'>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold sm:text-3xl md:text-5xl'>
          Great design starts with a conversation.<br />
          Let’s talk!
        </h2>
        <p className='text-muted-foreground max-w-[600px] mx-auto'>
          Have a project in mind? Let's discuss how I can help bring your vision
          to life.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card className='bg-card/50 backdrop-blur-sm border-[#7600DE]/20'>
          <CardContent className='p-6 space-y-6'>
            <h3 className='text-xl font-semibold tracking-wide'>
              Contact Information
            </h3>

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
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
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
                  {...register('name', { required: true })}
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='service'>Service Needed</Label>
                <select
                  id='service'
                  required
                  className='flex h-10 w-full rounded-md border border-input bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-black file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  {...register('service', { required: true })}
                >
                  <option value=''>Select a service</option>
                  <option value='logo-design'>Logo Design</option>
                  <option value='social-media-design'>
                    Social Media Design
                  </option>
                  <option value='package-design'>Package Design</option>
                  <option value='brand-identity'>
                    Brand & Visual Identity Design
                  </option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  placeholder='Tell me about your project'
                  rows={4}
                  required
                  {...register('message', { required: true })}
                />
              </div>

              <Button
                type='submit'
                className='w-full  bg-[#7600DE] hover:bg-[#7600DE]/40 text-white'
              >
                Send Message
                <PlaneIcon />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;

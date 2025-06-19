'use client';
import React from 'react';
import { PenTool, Gem, Printer, SquareChartGantt } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import LoopingVideo from './LoopingVideo';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Logo Design',
      description:
        'A logo isn’t just a symbol—it’s your brand’s first impression. Let’s create a mark that speaks volumes at a glance and sets you apart.',
      icon: PenTool,
    },
    {
      id: 2,
      title: 'Brand Identity',
      description:
        'Your brand is more than just visuals; it’s an experience. Let’s craft a bold, unforgettable identity that captivates and connects with your audience.',
      icon: Gem,
    },
    {
      id: 3,
      title: 'Print Design',
      description:
        'Eye-catching print materials like business cards, posters, and brochures—designed to reflect your brand with clarity and style.',
      icon: Printer,
    },
    {
      id: 4,
      title: 'Graphic Design',
      description:
        'From concept to creation, we design visuals that demand attention. Let’s turn your ideas into stunning graphics that make an impact.',
      icon: SquareChartGantt,
    },
  ];
  return (
    <section id='services' className='relative'>
      <div className='text-center space-y-4'>
        <Image
          src='/arrow.png'
          alt='arrow'
          className='text-white absolute -rotate-180 right-[9%] top-2 md:top-4 md:right-28'
          width={40}
          height={40}
        />
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl hello'>
          Offered Services
        </h2>
        <p className='text-muted-foreground max-w-[600px] mx-auto'>
          Transforming ideas into digital experiences with creative solutions.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-4'>
        {services.map((service) => (
          <Card
            key={service.id}
            className='overflow-hidden bg-card/50 backdrop-blur-sm hover:border-[#7600DE]'
          >
            <CardContent className='mt-5'>
              <div className='flex flex-col gap-3'>
                <div className='p-2 bg-white rounded-full w-10'>
                  {/*proper react create element for icons, image tag cannot be used here  */}
                  {React.createElement(service.icon, {
                    className: 'w-6 h-6 text-[#7600DE]/60',
                  })}
                </div>
                <div>
                  <h3 className='text-xl font-semibold hello'>{service.title}</h3>
                  <p className='text-muted-foreground mt-2 text-start'>
                    {service.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

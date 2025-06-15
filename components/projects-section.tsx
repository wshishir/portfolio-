'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Beam & Bow',
      description:
        'Designed a bespoke logo and brand identity for Beam & Bow, inspired by the interplay of light and movement.',
      tags: ['Logo Design', 'Branding'],
      image: '/project1.png?height=400&width=600',
    },
    {
      id: 2,
      title: 'Pitch Deck',
      description:
        'Created a dynamic pitch deck for a personal branding agency that blends storytelling, data, and bold design.',
      tags: ['Graphic Design', 'Pitch Deck'],
      image: '/project2.png?height=400&width=600',
    },
    {
      id: 3,
      title: 'Sannala Ravi Chandra',
      description:
        'Designed the full brand identity for Sannala Ravi Chandhra’s e-commerce site — clean, sharp, and built to stand out in the digital crowd.',
      tags: ['Branding Identity', 'Logo'],
      image: '/project3.png?height=400&width=600',
    },
    {
      id: 4,
      title: 'Carousel Design',
      description:
        'Developed a cohesive carousel design tailored for Instagram, focusing on brand tone, and seamless slide transitions to boost engagement.',
      tags: ['Graphic Design', 'Social Media'],
      image: '/project4.png?height=400&width=600',
    },
  ];

  return (
    <section id='projects' className='space-y-12'>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          Featured Projects
        </h2>
        <p className='text-muted-foreground max-w-[600px] mx-auto'>
          A selection of my recent work across various industries and design
          disciplines.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
        {projects.map((project) => (
          <Card
            key={project.id}
            className='overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-white/20'
          >
            <div className='aspect-video relative overflow-hidden'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover transition-transform hover:scale-105 duration-500'
              />
            </div>
            <CardContent className='p-6 space-y-4'>
              <div>
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <p className='text-muted-foreground mt-2'>
                  {project.description}
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant='secondary'
                    className='bg-white text-black hover:bg-white/80'
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className='p-6 pt-0'>
              <Button
                variant='outline'
                size='sm'
                className='gap-2'
                onClick={() =>
                  (window.location.href =
                    'https://www.behance.net/lakshmikesired')
                }
              >
                View Details <ExternalLink className='h-4 w-4' />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className='flex justify-center pt-2'>
        <Button
          variant='outline'
          size='lg'
          className='gap-2'
          onClick={() =>
            (window.location.href = 'https://www.behance.net/lakshmikesired')
          }
        >
          View More Projects <ExternalLink className='h-4 w-4' />
        </Button>
      </div>
    </section>
  );
}

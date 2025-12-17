import { SignUpButton } from '@clerk/nextjs';
import React from 'react'
import { Button } from '../button';
import { Calendar, CalendarIcon, MicIcon, StarIcon } from 'lucide-react';

function Hero() {
  return <section className="relative h-screen flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

     <div className="absolute top-20 left-1/4 w-72 h-72 bg-linear-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-linear-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

  <div className='relative z-10 w-full px-6'>
  <div className='max-w-7xl mx-auto '>
    <div className='grid lg:grid-cols-2 gap-16 items-center'>
      <div className='space-y-10'>
        <div className='space-y-6'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-promary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm'>
          <div className='w-2 h-2 bg-primary rounded-full animate-pulse'>

          </div>
          <span className='text-sm font-medium text-primary'>
            AI-Powered Dental Assistant
          </span>
          </div>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
            <span className='bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent'>
              Your Dental
            </span>
            <br />
            <span className='bg-linear-to-r from-primary  to-primary/70 bg-clip-text text-transparent'>
              questions
            </span>
            <br />
            <span className='bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent'>
              answered instantly
            </span>
            <br />
          </h1>
 
         <p className='text-lg text-muted-foreground leading-relaxed max-w-xl font-medium'>
          Chat with our AI dental assistant for instant advice, book smart appointments, and get personalised care recommendations. Available 24/7.
         </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4'>
          <SignUpButton mode='modal'>
            <Button size={'lg'}>
              <MicIcon className='mr-2 size-5' />
              Try Voice agent
            </Button>
          </SignUpButton>

          <SignUpButton mode='modal'>
            <Button size={'lg'} variant={'outline'}>
              <CalendarIcon className='mr-2 size-5' />
              Book Appointment 
            </Button>
          </SignUpButton>

        </div>

        <div className='pt-8'>
          <div className='flex items-center gap-6'>
            <div className='flex -space-x-3'>
            <img src="https://www.shutterstock.com/image-photo/beauty-charisma-head-shot-portrait-260nw-2647728057.jpg" alt="Julli" width={48} height={48} className='w-12 h-12 rounded-full object-cover ring-4 ring-background' />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQub5HfimngUphwASDF0xgGGZ7mbPLVsHxYVDHs-5cnPxDcT8L6bDlmWQi45oT-x8JyeI0&usqp=CAU" alt="Mack" width={48} height={48} className='w-12 h-12 rounded-full object-cover ring-4 ring-background' />
            <img src="https://thumbs.dreamstime.com/b/studio-businessman-thinking-smile-corporate-arms-crossed-ideas-fashion-mockup-space-sales-person-studio-363590148.jpg" alt="Luice" width={48} height={48} className='w-12 h-12 rounded-full object-cover ring-4 ring-background' />

            </div>

            <div className='space-y-1'>
              <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1'>
                  {[1,2,3,4,5].map((star)=>(
                    <StarIcon key={star} className='h-4 w-4 fill-amber-400 text-amber-400'/>
                  ))}
                </div>
                <span className='text-sm font-bold text-foreground'>4.9/5</span>
              </div>
              <p className='text-sm text-muted-foreground'>
                Trusted by{""}
                <span className='font-semibold text-foreground'>1,500+ patients</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='relative lg:pl-8'>
        <div className='absolute -top-4 -left-4 w-24 h-24 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl'> </div>
        <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-primary/15 to-primary/5 rounded-full blur-xl'> </div>
      <img src="/hero.png" alt="dentwise AI" width={600} height={600} className='w-full h-auto' />
      </div>
      
    </div>
  </div>
  </div>

  </section>;
}

export default Hero 

 
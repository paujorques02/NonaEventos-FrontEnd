
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioEvents, PortfolioEvent, PortfolioCategory, portfolioCategories } from '@/lib/portfolio-data';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Instagram, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PortfolioPage() {
  const [selectedEvent, setSelectedEvent] = useState<PortfolioEvent | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | null>(null);

  const handleCategoryClick = (category: PortfolioCategory) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const eventsForCategory = selectedCategory
    ? portfolioEvents.filter(event => event.category === selectedCategory.id)
    : [];

  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Nuestro Portafolio</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Un vistazo a los hermosos momentos y eventos inolvidables que hemos tenido el honor de crear.
          </p>
        </div>
      </section>

      <Dialog open={!!selectedEvent} onOpenChange={(isOpen) => !isOpen && setSelectedEvent(null)}>
        <section className="container mx-auto">
          {selectedCategory ? (
            // Vista de eventos de una categoría
            <div>
              <Button variant="ghost" onClick={handleBackToCategories} className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Categorías
              </Button>
              <h2 className="font-headline text-3xl font-semibold mb-8 text-center">{selectedCategory.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {eventsForCategory.map(event => (
                  <DialogTrigger asChild key={event.id} onClick={() => setSelectedEvent(event)}>
                    <div className="group aspect-square relative rounded-lg overflow-hidden cursor-pointer">
                      <Image
                        src={event.coverImage}
                        alt={`Portada de ${event.title}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-headline text-xl text-center p-2">{event.title}</h3>
                      </div>
                    </div>
                  </DialogTrigger>
                ))}
              </div>
            </div>
          ) : (
            // Vista de categorías
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {portfolioCategories.map(category => (
                <div key={category.id} className="flex flex-col items-center gap-4 cursor-pointer group" onClick={() => handleCategoryClick(category)}>
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <Image
                      src={category.coverImage}
                      alt={category.title}
                      fill
                      className="rounded-full object-cover border-4 border-transparent group-hover:border-primary/50 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="font-headline text-2xl font-semibold group-hover:text-primary transition-colors">{category.title}</h2>
                </div>
              ))}
            </div>
          )}
        </section>

        {selectedEvent && (
          <DialogContent className="max-w-4xl w-full h-auto bg-transparent border-none shadow-none p-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-90">
             <DialogTitle className="sr-only">{selectedEvent.title}</DialogTitle>
             <DialogDescription className="sr-only">
                Galería de imágenes para el evento: {selectedEvent.title}.
             </DialogDescription>
             <Carousel className="w-full h-full" opts={{ loop: true }}>
              <CarouselContent>
                {selectedEvent.galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src={image.url}
                        alt={`${selectedEvent.title} - Imagen ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                        data-ai-hint={image.hint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 md:-left-12 text-white bg-black/50 hover:bg-black/80 hover:text-white border-none h-10 w-10" />
              <CarouselNext className="absolute right-4 md:-right-12 text-white bg-black/50 hover:bg-black/80 hover:text-white border-none h-10 w-10" />
            </Carousel>
            {selectedEvent.clientContact && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full text-sm flex items-center gap-6">
                <span className='font-semibold'>Cliente:</span>
                 {selectedEvent.clientContact.instagram && (
                    <Link href={selectedEvent.clientContact.instagram} target="_blank" className='flex items-center gap-2 hover:text-primary transition-colors'>
                        <Instagram className='w-5 h-5' />
                        <span>Instagram</span>
                    </Link>
                 )}
                 {selectedEvent.clientContact.phone && (
                    <a href={`tel:${selectedEvent.clientContact.phone}`} className='flex items-center gap-2 hover:text-primary transition-colors'>
                        <Phone className='w-5 h-5' />
                        <span>Teléfono</span>
                    </a>
                 )}
              </div>
            )}
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}

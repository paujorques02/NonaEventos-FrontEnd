
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Cake, Briefcase, ArrowRight } from 'lucide-react';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
const services = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Bodas',
    description: 'Desde ceremonias íntimas hasta grandes celebraciones, creamos la boda de tus sueños.',
    link: '/services#weddings'
  },
  {
    icon: <Cake className="h-8 w-8 text-primary" />,
    title: 'Cumpleaños y Fiestas',
    description: 'Cumpleaños importantes, aniversarios o simplemente una reunión especial con seres queridos.',
    link: '/services#birthdays'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Eventos Corporativos',
    description: 'Eventos profesionales y pulcros que reflejan la marca y visión de tu empresa.',
    link: '/services#corporate'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">

      <div className="w-full h-[150vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover sticky-hero-image"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sticky-hero-text opacity-0">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hacemos de tus sueños, una celebración inolvidable
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              NonaEventos hace realidad tu visión con una planificación meticulosa y un diseño impresionante. Creadora de momentos únicos e irrepetibles.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Comienza Tu Historia</Link>
            </Button>
          </div>
        </div>
      </div>

      <section id="services-preview" className="container mx-auto -mt-[50vh] relative bg-background rounded-t-3xl z-20">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold">Nuestros Servicios</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Sea cual sea la ocasión, la hacemos extraordinaria.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                 <Button variant="ghost" asChild className="text-primary hover:text-primary">
                   <Link href={service.link}>Saber Más <ArrowRight className="ml-2 h-4 w-4"/></Link>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

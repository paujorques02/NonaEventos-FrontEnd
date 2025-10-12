
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plannerImage = PlaceHolderImages.find(img => img.id === 'about-planner');

const passions = [
  "Hacerte soñar",
  "Nuevas aventuras",
  "La calma y la ilusión",
  "Diseño y estilismo"
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Sobre Mí</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Hola, soy Elsa Heredia, el corazón y el alma detrás de NonaEventos. Apasionada por crear momentos únicos e irrepetibles.
          </p>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <Card className="overflow-hidden shadow-xl animate-fade-in">
              {plannerImage && (
                <Image
                  src={plannerImage.imageUrl}
                  alt="Elsa Heredia, fundadora de NonaEventos"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                  data-ai-hint="woman smiling"
                />
              )}
            </Card>
          </div>
          <div className="md:col-span-7 animate-fade-in-delay">
            <h2 className="font-headline text-3xl font-semibold mb-4 text-primary">Adicción por mi Trabajo</h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                ¡Hola! Soy Elsa H., Wedding Planner y Decoradora, y me declaro adicta a mi trabajo. Cada evento es una nueva aventura que me hace soñar, un viaje en el que me embarco con sus protagonistas. Mi objetivo es que desde el primer minuto se sientan como en casa, que confíen, deleguen y vivan el proceso de preparación de su gran día desde la ilusión y la calma.
              </p>
              <p>
                Acompañarles en este proceso, dibujar y diseñar el estilismo, el contenido y el protocolo de su día especial, cuidar cada rincón y cada detalle... es una tarea fantástica y creativa que me emociona y me carga de energía. En NonaEventos, nos dedicamos a crear eventos únicos y personalizados que se adaptan a los deseos de nuestros clientes.
              </p>
              <p>
                Aparte de mi trabajo, me encanta viajar, bailar, la gastronomía, y compartir sueños y risas con mi familia, mi perro salchicha y mis amigos. Mi reto diario es seguir creciendo como profesional y que esa pasión se refleje en cada proyecto. No puedo sentirme más afortunada. ¡Os cuento más en nuestra primera cita!
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-headline text-2xl font-semibold mb-4">Mi Filosofía</h3>
              <ul className="grid grid-cols-2 gap-4">
                {passions.map(value => (
                  <li key={value} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

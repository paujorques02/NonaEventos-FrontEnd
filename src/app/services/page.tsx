'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Star, Briefcase, Sparkles, PencilRuler, Users, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from '@/components/ui/scroll-area';


const services = [
  {
    id: "weddings",
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Bodas",
    description: "Desde grandes galas hasta fugas íntimas, orquestamos cada detalle de tu día especial, asegurando una celebración de tu amor perfecta e inolvidable.",
    features: [
      "Planificación de Servicio Completo",
      "Coordinación del Día del Evento",
      "Selección y Gestión de Proveedores",
      "Diseño y Decoración"
    ],
    details: {
      introTitle: "¡Bienvenidos a nuestra sección de organización de bodas!",
      introText: "Somos una empresa especializada en la planificación y decoración de eventos especiales, y estamos listos para hacer de vuestra boda un día inolvidable. Desde la selección del lugar perfecto hasta la elección de la decoración y el menú, nos encargamos de cada detalle para que vosotros os podais relajar y disfrutar del día más importante de vuestras vidas. Trabajamos en estrecha colaboración con cada pareja para crear una experiencia personalizada y única que refleje vuestro estilo y personalidad. Ofrecemos una amplia gama de servicios, desde la coordinación del día de la boda hasta la planificación completa del evento, para que nuestros clientes puedan elegir la opción que mejor se adapte a sus necesidades.",
      uniqueTitle: "Organización de bodas únicas",
      uniqueText: "Nos apasiona crear bodas personalizadas y memorables para cada pareja. Nuestro equipo de expertos en planificación y diseño trabaja en estrecha colaboración con cada pareja para plasmar su visión en una celebración única y especial. Nos enfocamos en cada detalle, desde la selección de la ubicación hasta la decoración, la elección del menú y la música para asegurarnos de que cada aspecto de la boda refleje la personalidad y el estilo de la pareja. Confía en nosotros para hacer que cada detalle cuente en tu gran día.",
      howTitle: "Cómo lo hacemos?",
      howSteps: [
        { id: "01", title: "Fijamos un presupuesto para organizar la boda", description: "Definimos el tipo de eventos y cómo queremos llevarlo a cabo" },
        { id: "02", title: "Nos coordinamos y transformamos tus sueños en realidad", description: "" }
      ],
      includesTitle: "Lo imprescindible - ¿Qué incluye?",
      includesText: "Celebra momentos especiales con nuestra empresa de organización de eventos. Deja que nuestro equipo apasionado y dedicado haga realidad tus sueños y cree una experiencia inolvidable para ti y tus seres queridos. Confía en nosotros para hacer que cada detalle cuente en tu gran día.",
      serviceLists: [
        { title: "Planificación", items: ["Establecer la fecha y el lugar", "Definir el presupuesto disponible", "Seleccionar los proveedores", "Diseñar la temática del evento", "Crear un programa del evento", "Definir el número de invitados", "Enviar las invitaciones", "Planificar la logística del evento", "Considerar los aspectos legales"] },
        { title: "Ejecución", items: ["Coordinar la llegada de los proveedores", "Montar la decoración y la ambientación", "Preparar la comida y la bebida", "Configurar el equipo de sonido y la iluminación", "Supervisar el evento", "Resolver cualquier problema que surja"] },
        { title: "Seguimiento", items: ["Evaluar la satisfacción de los participantes y recoger sus opiniones", "Evaluar el trabajo de los proveedores", "Hacer un balance económico del evento", "Hacer un informe del evento", "Revisión final de la documentación, permisos, facturas, etc."] }
      ]
    }
  },
  {
    id: "corporate",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Eventos Corporativos",
    description: "Diseñamos y ejecutamos eventos pulcros y profesionales que se alinean con tus objetivos comerciales, desde lanzamientos de productos y conferencias hasta fiestas de fin de año y retiros de team-building.",
    features: [
      "Conferencias y Seminarios",
      "Lanzamientos de Productos",
      "Galas de Empresa y Noches de Premios",
      "Eventos de Team-Building"
    ],
    details: {
        introTitle: "¡Bienvenidos a la sección de Eventos Corporativos!",
        introText: "Aquí es donde nos enfocamos en hacer realidad los eventos corporativos de nuestros clientes. Ya sea que esté planeando una conferencia, una reunión de negocios, un lanzamiento de producto o cualquier otro tipo de evento corporativo, nuestro equipo de profesionales altamente capacitados está listo para ayudarlo a crear un evento memorable y exitoso. Desde la planificación hasta la ejecución, nos aseguramos de que cada detalle se ajuste a sus necesidades y expectativas, garantizando un evento exitoso y de calidad. ¡Contáctanos hoy mismo para comenzar a planificar tu próximo evento corporativo!",
        uniqueTitle: "Eventos corporativos únicos",
        uniqueText: "Nos enfocamos en crear eventos corporativos únicos e impactantes que ayuden a impulsar la imagen y el crecimiento de su empresa. Ya sea que esté planeando una cena de gala, una reunión de accionistas, un lanzamiento de producto o cualquier otro tipo de evento corporativo, nuestro equipo de expertos trabajará en estrecha colaboración con usted para crear una experiencia a medida que refleje su marca y valores corporativos. Nos encargamos de cada detalle, desde la selección del lugar y la decoración, hasta la logística y el entretenimiento. Nuestro objetivo es hacer que su evento sea verdaderamente memorable para sus invitados y genere un impacto positivo en su empresa.",
        howTitle: "Cómo lo hacemos?",
        howSteps: [
            { "id": "01", "title": "Fijamos un presupuesto para organizar el evento", "description": "Definimos el tipo de evento y cómo queremos llevarlo a cabo." },
            { "id": "02", "title": "Coordinamos y transformamos tus ideas en realidad", "description": "Nos encargamos de toda la logística para que tu evento sea un éxito." }
        ],
        includesTitle: "Lo imprescindible - ¿Qué incluye?",
        includesText: "Deja que nuestro equipo apasionado y dedicado haga realidad tus sueños y cree una experiencia inolvidable para ti y tus seres queridos. Confía en nosotros para hacer que cada detalle cuente en tu gran día.",
        serviceLists: [
            { "title": "Planificación", "items": ["Establecer la fecha y el lugar", "Definir el presupuesto disponible", "Seleccionar los proveedores", "Diseñar la temática del evento", "Crear un programa del evento", "Definir el número de invitados", "Enviar las invitaciones", "Planificar la logística del evento", "Considerar los aspectos legales"] },
            { "title": "Ejecución", "items": ["Coordinar la llegada de los proveedores", "Montar la decoración y la ambientación", "Preparar la comida y la bebida", "Configurar el equipo de sonido y la iluminación", "Supervisar el evento", "Resolver cualquier problema que surja"] },
            { "title": "Seguimiento", "items": ["Evaluar la satisfacción de los participantes y recoger sus opiniones", "Evaluar el trabajo de los proveedores", "Hacer un balance económico del evento", "Hacer un informe del evento", "Revisión final de la documentación, permisos, facturas, etc."] }
        ]
    }
  },
  {
    id: "others",
    icon: <Star className="h-10 w-10 text-primary" />,
    title: "Otros Eventos",
    description: "Fiestas de graduación, aniversarios, baby showers... cualquier ocasión especial que desees celebrar, la hacemos realidad con un toque único y personal.",
    features: [
        "Fiestas Temáticas y Aniversarios",
        "Baby Showers y Revelaciones de Género",
        "Cenas de Gala y Eventos Deportivos",
        "Planificación a Medida para Cualquier Ocasión"
    ],
    details: {
        introTitle: "Eventos a medida para cualquier ocasión especial",
        introText: "En esta sección, nos enfocamos en la creación de eventos personalizados y a medida para cualquier ocasión especial que desee celebrar. Ya sea que esté planeando una fiesta de graduación, una cena de aniversario, un baby shower o cualquier otro evento especial, nuestro equipo de expertos trabajará en estrecha colaboración con usted para hacer realidad su visión. Nos encargamos de cada detalle, desde la selección del lugar, la decoración, la comida y la bebida, hasta la música y el entretenimiento. Nuestro objetivo es hacer que su evento sea verdaderamente único e inolvidable para usted y sus invitados.",
        uniqueTitle: "Otros eventos únicos",
        uniqueText: "Nos enfocamos en crear eventos únicos e inolvidables para cualquier ocasión especial que desee celebrar. Ya sea que esté planeando una fiesta temática, una cena de gala, un evento deportivo o cualquier otro tipo de evento, nuestro equipo de expertos trabajará en estrecha colaboración con usted para hacer realidad su visión. Nos encargamos de cada detalle, desde la selección del lugar, la decoración, la comida y la bebida, hasta la música y el entretenimiento. Nuestro objetivo es hacer que su evento sea verdaderamente personalizado y memorable para usted y sus invitados.",
        howTitle: "Cómo lo hacemos?",
        howSteps: [
            { "id": "01", "title": "Fijamos un presupuesto para organizar el evento", "description": "Definimos el tipo de evento y cómo queremos llevarlo a cabo." },
            { "id": "02", "title": "Coordinamos y transformamos tus sueños en realidad", "description": "Nos encargamos de toda la logística para que tu evento sea un éxito." }
        ],
        includesTitle: "Lo imprescindible - ¿Qué incluye?",
        includesText: "Celebra momentos especiales con nuestra empresa de organización de eventos. Deja que nuestro equipo apasionado y dedicado haga realidad tus sueños y cree una experiencia inolvidable para ti y tus seres queridos. Confía en nosotros para hacer que cada detalle cuente en tu gran día.",
        serviceLists: [
            { "title": "Planificación", "items": ["Establecer la fecha y el lugar", "Definir el presupuesto disponible", "Seleccionar los proveedores", "Diseñar la temática del evento", "Crear un programa del evento", "Definir el número de invitados", "Enviar las invitaciones", "Planificar la logística del evento", "Considerar los aspectos legales"] },
            { "title": "Ejecución", "items": ["Coordinar la llegada de los proveedores", "Montar la decoración y la ambientación", "Preparar la comida y la bebida", "Configurar el equipo de sonido y la iluminación", "Supervisar el evento", "Resolver cualquier problema que surja"] },
            { "title": "Seguimiento", "items": ["Evaluar la satisfacción de los participantes y recoger sus opiniones", "Evaluar el trabajo de los proveedores", "Hacer un balance económico del evento", "Hacer un informe del evento", "Revisión final de la documentación, permisos, facturas, etc."] }
        ]
    }
  }
];

const processSteps = [
    { icon: Sparkles, title: "Consulta y Visión", description: "Comenzamos por conocerte a ti y tu visión para el evento." },
    { icon: PencilRuler, title: "Diseño y Planificación", description: "Nuestro equipo elabora un plan detallado, desde la selección de proveedores hasta la creación del cronograma." },
    { icon: Users, title: "Ejecución y Coordinación", description: "El día del evento, gestionamos todo para que puedas relajarte y disfrutar." }
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Lo Que Hacemos</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una gama de servicios de planificación a medida para que tu evento sea perfecto, elegante y sin estrés. Nota: El precio se proporciona después de una consulta personal.
          </p>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Dialog key={service.id}>
              <DialogTrigger asChild>
                <Card id={service.id} className="flex flex-col animate-fade-in hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-3xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground text-center mb-6">{service.description}</p>
                    <div className="mt-auto">
                      <Separator className="my-4" />
                      <ul className="space-y-2 text-sm">
                        {service.features.map(feature => (
                          <li key={feature} className="flex items-center gap-3">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                             <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              {service.details && (
                <DialogContent className="max-w-4xl max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-3xl text-primary flex items-center gap-4">
                      {service.icon}
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[70vh] pr-6">
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-headline text-2xl font-semibold mb-3">{service.details.introTitle}</h3>
                            <p className="text-muted-foreground leading-relaxed">{service.details.introText}</p>
                        </div>
                        <Separator />
                         <div>
                            <h3 className="font-headline text-2xl font-semibold mb-3">{service.details.uniqueTitle}</h3>
                            <p className="text-muted-foreground leading-relaxed">{service.details.uniqueText}</p>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="font-headline text-2xl font-semibold mb-3">{service.details.howTitle}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.details.howSteps.map(step => (
                                    <div key={step.id} className="flex items-start gap-4">
                                        <div className="font-headline text-4xl text-primary/30">{step.id}</div>
                                        <div>
                                            <h4 className="font-semibold text-lg">{step.title}</h4>
                                            {step.description && <p className="text-sm text-muted-foreground">{step.description}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Separator />
                        <div>
                           <h3 className="font-headline text-2xl font-semibold mb-3">{service.details.includesTitle}</h3>
                           <p className="text-muted-foreground mb-6">{service.details.includesText}</p>
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {service.details.serviceLists.map(list => (
                                <div key={list.title}>
                                    <h4 className="font-semibold text-xl mb-3 border-b-2 border-primary/20 pb-2">{list.title}</h4>
                                    <ul className="space-y-2">
                                        {list.items.map(item => (
                                            <li key={item} className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary/70 mt-0.5 flex-shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                           </div>
                        </div>
                        <div className="text-center pt-4">
                            <Button asChild>
                                <a href="/contact">Contactar</a>
                            </Button>
                        </div>
                    </div>
                  </ScrollArea>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-semibold">Nuestro Proceso</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Un viaje simple y colaborativo hacia tu evento perfecto.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {processSteps.map((step, index) => (
                    <div key={step.title} className="relative flex flex-col items-center">
                       <div className="p-4 bg-background border rounded-full mb-4 shadow-sm">
                            <step.icon className="w-8 h-8 text-primary" />
                       </div>
                       <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                       <p className="text-muted-foreground text-sm">{step.description}</p>
                       {index < processSteps.length - 1 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border -z-10 mt-1" style={{transform: 'translateX(50%)'}}></div>}
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
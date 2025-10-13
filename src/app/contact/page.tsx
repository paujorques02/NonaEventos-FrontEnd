'use client';

import { useState } from 'react';
import { ContactForm } from '@/components/contact-form';
import { Chatbot } from '@/components/chatbot';
import { Mail, Phone, MapPin } from 'lucide-react';

// Define a type for the shared form data
export type FormData = {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  message?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({});

  const handleChatUpdate = (newData: Partial<FormData>) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  const address = "C/ Ruiz Zorrilla 2, 2º Puerta 6, 12001 Castellón de la Plana, Castellón";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Ponte en Contacto</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Habla con nuestro asistente para rellenar el formulario o complétalo tú mismo.
          </p>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="lg:order-2">
            <h2 className="font-headline text-3xl font-semibold mb-6">Envíanos un Mensaje</h2>
            <ContactForm initialData={formData} />
          </div>

          <div className="lg:order-1">
            <div className="mb-8">
              <h2 className="font-headline text-3xl font-semibold mb-6">Habla con Nuestro Asistente</h2>
              <Chatbot onUpdate={handleChatUpdate} />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Correo Electrónico</h4>
                    <a href="mailto:info@nonaeventos.es" className="text-muted-foreground hover:text-primary transition-colors">info@nonaeventos.es</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <a href="tel:1234567890" className="text-muted-foreground hover:text-primary transition-colors">(123) 456-7890</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Estudio</h4>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {address}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

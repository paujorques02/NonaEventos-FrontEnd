'use server';

import { z } from 'zod';

// --- Contact Form Action ---

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email(),
  phone: z.string().optional(),
  eventType: z.string(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export async function submitContactForm(data: unknown) {
  const parsedData = contactFormSchema.safeParse(data);

  if (parsedData.success) {
    // In a real application, you would send an email, save to a database, etc.
    console.log("Formulario enviado con éxito:", parsedData.data);
    return { success: true, message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto." };
  } else {
    // This part of the error won't be sent to the client, but is useful for server logs
    console.error("Falló la validación del formulario:", parsedData.error.flatten().fieldErrors);
    return { success: false, message: "Por favor, revisa tus datos e inténtalo de nuevo." };
  }
}
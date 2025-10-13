'use client';

import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Loader } from 'lucide-react';
import type { FormData as ContactFormData } from '@/app/contact/page';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Por favor, introduce una dirección de correo electrónico válida.',
  }),
  phone: z.string().min(9, { message: "El número de teléfono debe tener al menos 9 dígitos."}).optional().or(z.literal('')),
  eventType: z.string().min(1, {
    message: 'Por favor, selecciona un tipo de evento.',
  }),
  message: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres.',
  }),
});

type ContactFormProps = {
  initialData?: ContactFormData;
};

export function ContactForm({ initialData }: ContactFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || '',
      email: initialData?.email || '',
      phone: initialData?.phone || '',
      eventType: initialData?.eventType || '',
      message: initialData?.message || '',
    },
  });

  useEffect(() => {
    if (initialData) {
      for (const [key, value] of Object.entries(initialData)) {
        if (value) {
          form.setValue(key as keyof z.infer<typeof formSchema>, value);
        }
      }
    }
  }, [initialData, form]);

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: '¡Mensaje Enviado!',
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: '¡Oh, no! Algo salió mal.',
        description: result.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="María Pérez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="maria.perez@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de Teléfono <span className="text-muted-foreground">(Opcional)</span></FormLabel>
              <FormControl>
                <Input placeholder="600 123 456" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Evento</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tipo de evento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Wedding">Boda</SelectItem>
                  <SelectItem value="Birthday / Social">Cumpleaños / Social</SelectItem>
                  <SelectItem value="Corporate">Evento Corporativo</SelectItem>
                  <SelectItem value="Other">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tu Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hola, me gustaría organizar una boda para 100 personas en junio..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting && <Loader className="mr-2 h-4 w-4 animate-spin" />}
          Enviar Consulta
        </Button>
      </form>
    </Form>
  );
}
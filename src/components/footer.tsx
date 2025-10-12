import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/nonaeventos/' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/1234567890' }, // Reemplaza con tu número
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Link href="/">
                <Image src="/images/logo.svg" alt="NonaEventos Logo" width={120} height={50} className="dark:invert h-10 w-auto"/>
            </Link>
          </div>
          <div className="text-center md:text-left text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NonaEventos. Todos los derechos reservados. <br/>
            Creadora de momentos únicos e irrepetibles.
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.href} aria-label={social.name} target="_blank">
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Sparkles } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import type { FormData as ContactFormData } from '@/app/contact/page';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

type ChatbotProps = {
  onUpdate?: (data: Partial<ContactFormData>) => void;
};

export function Chatbot({ onUpdate }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ sender: 'bot', text: "¡Hola! Soy Nona, la asistente virtual de NonaEventos. ¿En qué puedo ayudarte hoy? A medida que hablemos, rellenaré el formulario por ti." }]);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if(e) e.preventDefault();
    if (inputValue.trim() === '' || isTyping) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    let botMessage: Message;

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: currentInput,
          session_id: sessionId
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.session_id) setSessionId(result.session_id);
      
      // Use the structured form data from the backend
      if (result.formData && onUpdate) {
        onUpdate(result.formData);
      }

      botMessage = { 
        sender: 'bot', 
        text: result.reply || "No he recibido una respuesta válida."
      };

    } catch (error) {
      console.error("Failed to fetch chatbot response:", error);
      botMessage = { 
        sender: 'bot', 
        text: "Lo siento, algo salió mal al contactar al asistente. Inténtalo de nuevo."
      };
    }

    setIsTyping(false);
    setMessages(prev => [...prev, botMessage]);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    }
  };

  return (
    <Card className="flex flex-col h-[500px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary h-5 w-5" />
          <span>Asistente Virtual</span>
        </CardTitle>
      </CardHeader>
      <CardContent ref={scrollContainerRef} className="flex-grow overflow-y-auto pr-2">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn('flex items-end gap-2', {
                'justify-end': message.sender === 'user',
              })}
            >
              {message.sender === 'bot' && (
                <Avatar className="h-8 w-8">
                  <Image src="/images/logo_chatbot.png" alt="Logo del chatbot" width={32} height={32} />
                </Avatar>
              )}
              <div
                className={cn('max-w-[75%] rounded-lg px-4 py-2', {
                  'bg-primary text-primary-foreground': message.sender === 'user',
                  'bg-muted': message.sender === 'bot',
                })}
              >
                {message.sender === 'bot' ? (
                  <div className="prose prose-sm dark:prose-invert max-w-full">
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-sm">{message.text}</p>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex items-end gap-2">
                <Avatar className="h-8 w-8">
                  <Image src="/images/logo_chatbot.png" alt="Logo del chatbot" width={32} height={32} />
                </Avatar>
                <div className="bg-muted rounded-lg px-4 py-2">
                    <div className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:-0.3s]" />
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:-0.15s]" />
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" />
                    </div>
                </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center gap-2">
          <Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            autoComplete="off"
            disabled={isTyping}
          />
          <Button type="button" size="icon" onClick={handleSendMessage} disabled={isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
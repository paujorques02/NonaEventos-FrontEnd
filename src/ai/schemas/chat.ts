/**
 * @fileOverview Schemas and types for the chatbot flow.
 */
import { z } from 'genkit';

const RoleSchema = z.enum(['user', 'model']);

const MessageSchema = z.object({
  role: RoleSchema,
  content: z.string(),
});

export const ChatInputSchema = z.object({
  messages: z.array(MessageSchema),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

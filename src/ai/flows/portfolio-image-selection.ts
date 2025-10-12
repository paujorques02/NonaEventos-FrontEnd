'use server';

/**
 * @fileOverview A flow for selecting the best images from an event portfolio using AI.
 *
 * - selectBestImages - A function that takes an array of image data URIs and returns an array of the best images.
 * - PortfolioImageSelectionInput - The input type for the selectBestImages function.
 * - PortfolioImageSelectionOutput - The return type for the selectBestImages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioImageSelectionInputSchema = z.object({
  imageDataUris: z
    .array(z.string())
    .describe(
      'An array of image data URIs that must include a MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.'
    ),
});
export type PortfolioImageSelectionInput = z.infer<typeof PortfolioImageSelectionInputSchema>;

const PortfolioImageSelectionOutputSchema = z.object({
  bestImageDataUris: z
    .array(z.string())
    .describe('An array of the best image data URIs selected by the AI.'),
});
export type PortfolioImageSelectionOutput = z.infer<typeof PortfolioImageSelectionOutputSchema>;

export async function selectBestImages(input: PortfolioImageSelectionInput): Promise<PortfolioImageSelectionOutput> {
  return portfolioImageSelectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioImageSelectionPrompt',
  input: {schema: PortfolioImageSelectionInputSchema},
  output: {schema: PortfolioImageSelectionOutputSchema},
  prompt: `You are an expert event photographer with an eye for selecting the most impactful and visually appealing images from a portfolio.

  Given the following images, select the best ones to showcase in a portfolio. Consider factors such as composition, lighting, emotional impact, and overall representation of the event.

  Return only the data URIs of the best images.

  Images: {{#each imageDataUris}}{{media url=this}}{{#unless @last}}\n\n{{/unless}}{{/each}}`,
});

const portfolioImageSelectionFlow = ai.defineFlow(
  {
    name: 'portfolioImageSelectionFlow',
    inputSchema: PortfolioImageSelectionInputSchema,
    outputSchema: PortfolioImageSelectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

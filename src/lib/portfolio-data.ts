
import { PlaceHolderImages } from "./placeholder-images";

export interface PortfolioCategory {
  id: 'bodas' | 'corporativos' | 'otros';
  title: string;
  coverImage: string;
}

export interface PortfolioEvent {
  id: string;
  title: string;
  category: 'bodas' | 'corporativos' | 'otros';
  coverImage: string;
  galleryImages: { url: string; hint: string }[];
  clientContact?: {
    instagram?: string;
    phone?: string;
  };
}

export const portfolioEvents: PortfolioEvent[] = [
  {
    id: 'boda-julia-y-diego',
    title: 'Boda de Julia y Diego',
    category: 'bodas',
    coverImage: '/images/boda_julia_diego/marshoots-adelanto-julia-diego-57-scaled.jpg',
    galleryImages: [
      {
        url: '/images/boda_julia_diego/marshoots-adelanto-julia-diego-57-scaled.jpg',
        hint: 'bridal bouquet'
      },
      {
        url: '/images/boda_julia_diego/marshoots-adelanto-julia-diego-52-scaled.jpg',
        hint: 'bridal bouquet'
      },
      {
        url: '/images/boda_julia_diego/marshoots-adelanto-julia-diego-1-scaled.jpg',
        hint: 'bridal bouquet'
      },
      {
        url: '/images/boda_julia_diego/marshoots-adelanto-julia-diego-3-scaled.jpg',
        hint: 'bridal bouquet'
      }
    ],
    clientContact: {
      instagram: "https://www.instagram.com/cliente_ejemplo",
      phone: "123-456-7890"
    }
  },
  {
    id: 'evento-ube',
    title: 'Evento UBE',
    category: 'corporativos',
    coverImage: '/images/evento_ube/evento_ube_01.jpeg',
    galleryImages: [
       {
        url: '/images/evento_ube/evento_ube_01.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_02.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_03.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_04.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_05.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_06.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_07.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_08.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_09.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_10.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_11.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_12.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_13.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_14.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_15.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_16.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_17.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_18.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_19.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_20.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_21.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_22.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_23.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_24.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_25.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_26.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_27.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_28.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_29.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_30.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_31.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_32.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_33.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_34.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_35.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_36.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_37.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_38.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_39.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_40.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_41.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_42.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_43.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_44.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_45.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_46.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_47.jpeg',
        hint: 'corporate event'
      },

      {
        url: '/images/evento_ube/evento_ube_48.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_49.jpeg',
        hint: 'corporate event'
      },
      {
        url: '/images/evento_ube/evento_ube_50.jpeg',
        hint: 'corporate event'
      }
    ]
  },
  {
    id: 'cumple-50-ana',
    title: 'Comunión de Ana',
    category: 'otros',
    coverImage: '/images/comunion_ana/comunion_ana_01-scaled.jpg',
    galleryImages: [
       {
        url: '/images/comunion_ana/comunion_ana_01-scaled.jpg',
        hint: 'birthday party'
      },
       {
        url: '/images/comunion_ana/comunion_ana_02-scaled.jpg',
        hint: 'birthday cake'
      },
      {
        url: '/images/comunion_ana/comunion_ana_03-scaled.jpg',
        hint: 'birthday party'
      },
       {
        url: '/images/comunion_ana/comunion_ana_04-scaled.jpg',
        hint: 'birthday cake'
      },
      {
        url: '/images/comunion_ana/comunion_ana_05-scaled.jpg',
        hint: 'birthday party'
      },
       {
        url: '/images/comunion_ana/comunion_ana_06-scaled.jpg',
        hint: 'birthday cake'
      },
      {
        url: '/images/comunion_ana/comunion_ana_07-scaled.jpg',
        hint: 'birthday party'
      },
       {
        url: '/images/comunion_ana/comunion_ana_08-scaled.jpg',
        hint: 'birthday cake'
      },
      {
        url: '/images/comunion_ana/comunion_ana_09-scaled.jpg',
        hint: 'birthday party'
      },
       {
        url: '/images/comunion_ana/comunion_ana_10-scaled.jpg',
        hint: 'birthday cake'
      },
      {
        url: '/images/comunion_ana/comunion_ana_11-scaled.jpg',
        hint: 'birthday party'
      },
       {
        url: '/images/comunion_ana/comunion_ana_12-scaled.jpg',
        hint: 'birthday cake'
      },
      {
        url: '/images/comunion_ana/comunion_ana_13-scaled.jpg',
        hint: 'birthday party'
      },
       {
        url: '/images/comunion_ana/comunion_ana_14-scaled.jpg',
        hint: 'birthday cake'
      },
    ]
  },
  {
    id: 'cumple-borja',
    title: 'Cumpleaños de Borja',
    category: 'otros',
    coverImage: '/images/cumple_borja/cumple_borja_01-scaled.jpg',
    galleryImages: [
       {
        url: '/images/cumple_borja/cumple_borja_01-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_00-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_02-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_03-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_04-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_05-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_06-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_07-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_08-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_10-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_11-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_12-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_13-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_14-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_15-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_16-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_17-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_18-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_19-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_20-scaled.jpg',
        hint: 'birthday party'
      },
      {
        url: '/images/cumple_borja/cumple_borja_21-scaled.jpg',
        hint: 'birthday party'
      }
    ]
  }
];


export const portfolioCategories: PortfolioCategory[] = [
  { 
    id: 'bodas', 
    title: 'Bodas', 
    coverImage: '/images/boda_julia_diego/marshoots-adelanto-julia-diego-57-scaled.jpg' 
  },
  { 
    id: 'corporativos', 
    title: 'Eventos Corporativos', 
    coverImage: '/images/evento_ube/evento_ube_01.jpeg' 
  },
  { 
    id: 'otros', 
    title: 'Otros Eventos', 
    coverImage: '/images/comunion_ana/comunion_ana_01-scaled.jpg' 
  },
];

import Alps from '@/assets/images/browse/alpene.jpg'
import CalaMacarelleta from '@/assets/images/browse/calaMacarelleta.jpg'
import Disney from '@/assets/images/browse/disney.jpg'
import France from '@/assets/images/browse/France.jpg'
import PachamamaParis from '@/assets/images/browse/frenchNightlife.jpg'
import Italy from '@/assets/images/browse/Italy.jpg'
import MallEmirates from '@/assets/images/browse/mall-emirates.jpg'
import Mallorca from '@/assets/images/browse/Mallorca.jpg'
import Omnia from '@/assets/images/browse/omnia-nightclub.jpg'
import ParisShopping from '@/assets/images/browse/ParisShopping.jpg'
import QuattroPassi from '@/assets/images/browse/quattro-passi.jpg'
import Roskilde from '@/assets/images/browse/roskilde.jpg'
import SevenSisters from '@/assets/images/browse/seven-sis.jpg'
import SwissAlps from '@/assets/images/browse/swissAlps.jpg'
import TivoliGardens from '@/assets/images/browse/tivoliDenmark.jpg'

interface Location {
  id: number
  title: string
  titleQuestion?: string
  description: string
  categories: string[]
  country: string
  region?: string
  image: string
  alt: string
  rating: number
}

const LocationsData: Location[] = [
  {
    id: 1,
    image: Mallorca,
    title: 'Spain',
    titleQuestion: 'Swim in Spain?',
    alt: 'Mallorca beach',
    categories: ['Activities'],
    country: 'Spain',
    description: 'Enjoy a swim in the beautiful beaches of Spain.',
    rating: 4.0,
  },
  {
    id: 2,
    title: 'Italy',
    titleQuestion: 'Dinner in Italy?',
    alt: 'Italian restaurant',
    image: Italy,
    categories: ['Restaurants'],
    country: 'Italy',
    description: 'Experience fine dining in Italy.',
    rating: 4.5,
  },
  {
    title: 'France',
    id: 3,
    titleQuestion: 'Party in France?',
    alt: 'French nightlife',
    image: France,
    categories: ['Nightlife'],
    country: 'France',
    description: 'Enjoy the vibrant nightlife in France.',
    rating: 4.2,
  },
  {
    title: 'Alps',
    id: 4,
    titleQuestion: 'Ski in the alps?',
    image: Alps,
    alt: 'Swiss Alps',
    categories: ['Sights'],
    country: 'Switzerland',
    description: 'Ski in the beautiful Swiss Alps.',
    rating: 4.8,
  },
  {
    title: 'Disneyland',
    id: 5,
    description: 'A magical place for kids and adults alike',
    image: Disney,
    alt: 'Disneyland',
    categories: ['Activities'],
    country: 'United States',
    region: 'California',
    rating: 3.5,
  },
  {
    id: 6,
    title: 'Seven Sisters Waterfall',
    description: 'A beautiful mountain range with a stunning waterfall',
    alt: 'Seven Sisters waterfall',
    image: SevenSisters,
    categories: ['Sights'],
    country: 'Norway',
    region: 'Geiranger',
    rating: 4.5,
  },
  {
    id: 7,
    title: 'Omnia Nightclub',
    image: Omnia,
    alt: 'Omnia Nightclub',
    categories: ['Nightlife'],
    country: 'United States',
    region: 'Las Vegas',
    description: 'A popular nightclub in Las Vegas',
    rating: 4.0,
  },
  {
    id: 8,
    title: 'Quattro Passi',
    image: QuattroPassi,
    categories: ['Restaurants'],
    country: 'Italy',
    region: 'Naples',
    description: 'A Michelin star restaurant in Naples',
    alt: 'Mall of the Emirates',
    rating: 4.5,
  },
  {
    id: 9,
    title: 'Mall of the Emirates',
    image: MallEmirates,
    categories: ['Shopping'],
    country: 'United Arab Emirates',
    region: 'Dubai',
    description: 'A large shopping mall in Dubai',
    alt: 'Mall of the Emirates',
    rating: 4.5,
  },
  {
    id: 10,
    title: 'Roskilde Festival',
    image: Roskilde,
    categories: ['Entertainment'],
    country: 'Denmark',
    description: 'A large music festival in Denmark',
    alt: 'Roskilde Festival',
    rating: 4.0,
  },
  {
    id: 11,
    title: 'Cala Macarelleta',
    image: CalaMacarelleta,
    categories: ['Activities'],
    description: 'A beautiful beach in Menorca',
    alt: 'Cala Macarelleta beach',
    country: 'Spain',
    region: 'Menorca',
    rating: 4.5,
  },
  {
    id: 12,
    title: 'Swiss Alps',
    image: SwissAlps,
    alt: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Zermatt',
    categories: ['Sights'],
    description: 'A beautiful mountain range in Switzerland',
    rating: 4.0,
  },
  {
    id: 14,
    title: 'Pachamama Paris',
    image: PachamamaParis,
    alt: 'Pachamama Paris',
    categories: ['Nightlife'],
    country: 'France',
    region: 'Paris',
    description: 'A vibrant nightlife at Pachamama Paris',
    rating: 2.6,
  },
  {
    id: 15,
    title: 'Paris Shopping Mall',
    image: ParisShopping,
    alt: 'Paris Shopping Mall',
    categories: ['Shopping'],
    country: 'France',
    region: 'Paris',
    description: 'A beautiful shopping mall in Paris',
    rating: 4.0,
  },
  {
    id: 16,
    title: 'Tivoli Gardens',
    image: TivoliGardens,
    alt: 'Tivoli Gardens',
    categories: ['Activities'],
    country: 'Denmark',
    region: 'Copenhagen',
    description: 'A magical tivoli in Copenhagen',
    rating: 3.8,
  },
]

export default LocationsData
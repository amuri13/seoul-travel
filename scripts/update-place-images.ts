import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PLACES_DATA } from '../src/data/places';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PLACES_FILE_PATH = path.resolve(__dirname, '../src/data/places.ts');

const imageMap: Record<string, string> = {
  'place-jeju-sinjungsangan-black-pork-3912': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  'place-tosokchon': 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80',
  'place-myeongdong-kyoja': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80',
  'place-geumdwaeji': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  'place-gwangjang-bindaetteok': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
  'place-woolaeok': 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80',
  'place-mabongnim': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
  'place-balwoo-gongyang': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  'place-onion-seongsu': 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
  'place-hanchoo': 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80',
  'place-jinmi-sikdang': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
  'place-mokmeoksanbang': 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
  'place-eid-halal': 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
  'place-cheongsudang': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  'place-mingles': 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
  'place-hadongkwan': 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
  'place-neulbom-jeju': 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
  'place-odolang-bakery': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  'place-jejugot-ramyeon': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
  'place-jayeondo-seongsu': 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
  'place-hanjeongseon-seongsu': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
  'place-myeongdong-joomak': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
  'place-seouljip-euljiro': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  'place-yoogane': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
  'place-cafe-onion-anguk': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
};

const updatedPlaces = PLACES_DATA.map((p) => ({
  ...p,
  imageUrl: imageMap[p.id] || p.imageUrl,
}));

const outputContent = `import { Place } from '../types';

export const PLACES_DATA: Place[] = ${JSON.stringify(updatedPlaces, null, 2)};
`;

fs.writeFileSync(PLACES_FILE_PATH, outputContent, 'utf-8');
console.log('✅ Updated PLACES_DATA with unique images successfully!');

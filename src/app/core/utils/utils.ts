import { Product } from '../models/interfaces/productsInterface';

export function mapSerializer(map: Map<number, Product>) {
  return JSON.stringify(Array.from(map.entries()));
}
import 'server-only';
import { Products } from 'prisma/generated/zod';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: Products[];
  newOffset: number | null;
  totalProducts: number;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      products: await prisma.products.findMany({
        where: { name: { startsWith: search } }
      }),
      newOffset: null,
      totalProducts: 0
    };
  }

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }

  let totalProducts = await prisma.products.count();
  let moreProducts = await prisma.products.findMany({ take: 5, skip: offset });
  let newOffset = moreProducts.length >= 5 ? offset + 5 : null;

  return {
    products: moreProducts,
    newOffset,
    totalProducts: totalProducts
  };
}

export async function deleteProductById(id: number) {
  await prisma.products.delete({ where: { id } });
}

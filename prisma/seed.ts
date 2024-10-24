import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
import ProductsCreateInput = Prisma.ProductsCreateInput;

const _mockProduct: ProductsCreateInput = {
  imageUrl:
    'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp',
  name: 'Wireless Earbuds Ultra',
  status: 'ACTIVE',
  price: 199,
  stock: 300,
  availableAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  createdAt: new Date().toISOString()
};

const products: Prisma.ProductsCreateInput[] = [
  _mockProduct,
  _mockProduct,
  _mockProduct,
  _mockProduct,
  _mockProduct,
  _mockProduct,
  _mockProduct,
  _mockProduct
];

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'me@site.com',
        name: 'Me',
        username: 'username'
      }
    ]
  });

  await prisma.products.createMany({ data: products });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

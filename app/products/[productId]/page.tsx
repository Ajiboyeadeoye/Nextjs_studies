import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = params.productId;
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${id}`);
    }, 500);
  })
  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: { params: { productId: string } }) {
  const productId = (await params).productId;
  return <h1>Details about the product {productId}</h1>;
}

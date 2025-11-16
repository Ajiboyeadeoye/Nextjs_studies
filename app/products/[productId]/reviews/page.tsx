export default async function ProdcutReviews({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;
    return <h1>Reviews for Product {productId}</h1>;
}
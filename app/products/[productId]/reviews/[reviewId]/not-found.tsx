"use client";

import { usePathname } from "next/navigation";

export default function NonFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
    <h1>404- page</h1>
    <p>Review { reviewId } not found for { productId }</p>
        </div>
    )
}
 
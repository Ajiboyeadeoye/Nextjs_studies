import React from "react";

export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>
        {children}
        <h2>Featured slugs</h2>

    </>
}
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InnerF2() {
    return (
        <>
            <h1>Inner F2 page</h1>

            <Link href="/f5" className="flex items-center gap-2">
                Go to F5 Page <ArrowRight size={16} />
            </Link>
        </>
    );
}

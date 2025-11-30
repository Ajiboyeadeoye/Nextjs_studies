import { Card } from "@/components/card"
import Link from "next/link"    


export default function RevenueMetrics() {
    return <Card>
        <div>Revenue Metrics</div>
        <div>
            <Link href="/complex-dashboard/long-revenue">Long Revenue Details</Link>
        </div>


    </Card>;
}
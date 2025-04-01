import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  name: string
  achievement: string
  image: string
  quote: string
}

export default function TestimonialCard({ name, achievement, image, quote }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex justify-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-primary/20">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
        </div>
        <div className="text-center">
          <QuoteIcon className="mx-auto mb-4 h-8 w-8 text-primary/30" />
          <p className="mb-4 italic text-muted-foreground">"{quote}"</p>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-accent">{achievement}</p>
        </div>
      </CardContent>
    </Card>
  )
}


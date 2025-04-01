import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface FacultyCardProps {
  name: string
  position: string
  image: string
  experience: string
  education: string
}

export default function FacultyCard({ name, position, image, experience, education }: FacultyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[3/4] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-primary">{position}</p>
        <div className="mt-2 text-xs text-muted-foreground">
          <p>Experience: {experience}</p>
          <p>Education: {education}</p>
        </div>
      </CardContent>
    </Card>
  )
}


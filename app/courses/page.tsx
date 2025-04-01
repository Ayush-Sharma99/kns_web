import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Courses</h1>
              <p className="mt-4 text-primary-foreground/80">
                Comprehensive programs designed to help students excel in competitive exams and build a strong academic
                foundation.
              </p>
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image src="/images/courses-hero.jpg" alt="KNS Education Courses" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="iit-jee" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="iit-jee">IIT-JEE</TabsTrigger>
              <TabsTrigger value="neet">NEET</TabsTrigger>
              <TabsTrigger value="foundation">Foundation</TabsTrigger>
              <TabsTrigger value="crash">Crash Courses</TabsTrigger>
            </TabsList>

            <TabsContent value="iit-jee" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-jee.jpg"
                      alt="IIT-JEE Two-Year Program"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">IIT-JEE Two-Year Program</h3>
                    <p className="mt-2 text-muted-foreground">
                      Comprehensive preparation for Class 11 students aiming for JEE Main & Advanced.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Complete syllabus coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Regular mock tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Doubt clearing sessions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Personalized mentorship</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/iit-jee-two-year">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-jee-intensive.jpg"
                      alt="IIT-JEE One-Year Program"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">IIT-JEE One-Year Program</h3>
                    <p className="mt-2 text-muted-foreground">
                      Intensive course for Class 12 students focusing on JEE Main & Advanced preparation.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Accelerated learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Topic-wise tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Previous year paper analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Intensive problem solving</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/iit-jee-one-year">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-test-series.jpg"
                      alt="JEE Test Series"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">JEE Test Series</h3>
                    <p className="mt-2 text-muted-foreground">
                      Comprehensive test series with detailed analysis and performance tracking.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Chapter-wise tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Full-length mock exams</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Personalized feedback</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Performance analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Rank prediction</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/jee-test-series">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="neet" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-neet.jpg"
                      alt="NEET Two-Year Program"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">NEET Two-Year Program</h3>
                    <p className="mt-2 text-muted-foreground">
                      Comprehensive preparation for Class 11 students aiming for NEET.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Complete syllabus coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Regular mock tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Doubt clearing sessions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">NCERT-focused approach</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/neet-two-year">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-neet-intensive.jpg"
                      alt="NEET One-Year Program"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">NEET One-Year Program</h3>
                    <p className="mt-2 text-muted-foreground">
                      Intensive course for Class 12 students focusing on NEET preparation.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Accelerated learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Topic-wise tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Previous year paper analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">NCERT mastery</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/neet-one-year">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-test-series-neet.jpg"
                      alt="NEET Test Series"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">NEET Test Series</h3>
                    <p className="mt-2 text-muted-foreground">
                      Comprehensive test series with detailed analysis and performance tracking.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Subject-wise tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Full-length mock exams</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Personalized feedback</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Performance analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">NCERT-based questions</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/neet-test-series">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="foundation" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-foundation-9.jpg"
                      alt="Foundation Course (Class 9)"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Foundation Course (Class 9)</h3>
                    <p className="mt-2 text-muted-foreground">
                      Building strong fundamentals for future competitive exam preparation.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Concept building</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Analytical thinking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Problem-solving skills</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Regular assessments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/foundation-class-9">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-foundation-10.jpg"
                      alt="Foundation Course (Class 10)"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Foundation Course (Class 10)</h3>
                    <p className="mt-2 text-muted-foreground">
                      Strengthening core concepts and preparing for board exams and beyond.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Board exam preparation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Competitive exam introduction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Regular assessments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Advanced problem solving</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/foundation-class-10">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-pre-foundation.jpg"
                      alt="Pre-Foundation Course"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Pre-Foundation Course</h3>
                    <p className="mt-2 text-muted-foreground">
                      Early preparation for students in Class 8 to build a strong academic foundation.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Basic concept clarity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Logical reasoning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Scientific temperament</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Mental ability development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/pre-foundation">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="crash" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-jee-crash.jpg"
                      alt="JEE Crash Course"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">JEE Crash Course</h3>
                    <p className="mt-2 text-muted-foreground">
                      Intensive revision program for JEE aspirants in the final months before the exam.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Rapid revision</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Important topics focus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Daily mock tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Problem-solving techniques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/jee-crash">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-neet-crash.jpg"
                      alt="NEET Crash Course"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">NEET Crash Course</h3>
                    <p className="mt-2 text-muted-foreground">
                      Comprehensive revision program for NEET aspirants in the final months before the exam.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Subject-wise revision</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">NCERT focus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Daily practice tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Previous year questions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/neet-crash">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/course-board-crash.jpg"
                      alt="Board Exam Crash Course"
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Board Exam Crash Course</h3>
                    <p className="mt-2 text-muted-foreground">
                      Targeted preparation for Class 12 board exams with focus on scoring techniques.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Important questions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Answer writing skills</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Time management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Scoring strategies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to GuruKul LMS</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="/courses/board-crash">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Teaching Methodology</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our unique approach to teaching ensures that students not only understand the concepts but also develop
              problem-solving skills.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-xl font-bold">Concept Building</h3>
                <p className="mt-2 text-muted-foreground">
                  We focus on building strong conceptual understanding through interactive teaching methods and visual
                  aids.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">02</span>
                </div>
                <h3 className="text-xl font-bold">Problem Solving</h3>
                <p className="mt-2 text-muted-foreground">
                  Students are trained to apply concepts to solve complex problems through regular practice and
                  guidance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">03</span>
                </div>
                <h3 className="text-xl font-bold">Regular Assessment</h3>
                <p className="mt-2 text-muted-foreground">
                  Frequent tests and quizzes help track progress and identify areas that need improvement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">04</span>
                </div>
                <h3 className="text-xl font-bold">Personalized Attention</h3>
                <p className="mt-2 text-muted-foreground">
                  Small batch sizes ensure that each student receives individual attention and guidance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">05</span>
                </div>
                <h3 className="text-xl font-bold">Doubt Resolution</h3>
                <p className="mt-2 text-muted-foreground">
                  Regular doubt clearing sessions ensure that students' queries are addressed promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">06</span>
                </div>
                <h3 className="text-xl font-bold">Digital Learning</h3>
                <p className="mt-2 text-muted-foreground">
                  Our GuruKul LMS provides access to video lectures, practice questions, and performance tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our courses and admission process.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold">What is the admission process?</h3>
                <p className="mt-2 text-muted-foreground">
                  The admission process involves filling out an application form, followed by an entrance test and
                  counseling session to determine the most suitable course.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold">How are the batches organized?</h3>
                <p className="mt-2 text-muted-foreground">
                  Batches are organized based on students' academic levels and goals, with a maximum of 30 students per
                  batch to ensure personalized attention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold">What study materials are provided?</h3>
                <p className="mt-2 text-muted-foreground">
                  We provide comprehensive study materials including textbooks, practice sheets, previous year papers,
                  and access to our digital learning platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold">How is student progress tracked?</h3>
                <p className="mt-2 text-muted-foreground">
                  Student progress is tracked through regular tests, quizzes, and assessments. Detailed performance
                  reports are shared with parents periodically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold">Are there any scholarships available?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we offer merit-based scholarships to deserving students based on their performance in our
                  entrance test and previous academic records.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold">What is the GuruKul LMS?</h3>
                <p className="mt-2 text-muted-foreground">
                  GuruKul LMS is our digital learning platform that provides access to video lectures, study materials,
                  practice questions, and performance tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Excel in Your Exams?</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/80">
              Join KNS Education and take the first step towards achieving your academic goals with our expert guidance
              and personalized mentorship.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


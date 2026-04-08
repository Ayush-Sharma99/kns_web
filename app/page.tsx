import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, GraduationCap, Trophy, Users } from "lucide-react"
import CourseCard from "@/components/course-card"
import StatsCounter from "@/components/stats-counter"
import FacultyCard from "@/components/faculty-card"
import EventCard from "@/components/event-card"
import NewsletterForm from "@/components/newsletter-form"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="container relative z-10 flex flex-col items-center text-center text-primary-foreground">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Shaping Future Leaders in <span className="text-accent">IIT-JEE</span> &{" "}
            <span className="text-accent">NEET</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            KNS Education provides personalized mentorship and academic excellence to help students achieve their dreams
            of entering premier institutions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/courses">Explore Courses</Link>
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
        <div className="absolute inset-0 z-0 bg-[url('/images/hero-pattern.jpg')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* Announcement Banner */}
      <section className="bg-accent py-4 text-accent-foreground">
        <div className="container text-center">
          <p className="text-sm font-medium sm:text-base">
            <span className="font-bold">New Batch Alert:</span> Registrations open for 2026-27 IIT-JEE & NEET Batches.
            <Link href="https://forms.gle/CFWfLACcsBZxTryTA" className="ml-2 underline underline-offset-4">
              Apply Now
            </Link>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose KNS Education?</h2>
            <p className="mt-4 text-muted-foreground">Our unique approach to competitive exam preparation</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Learn from experienced educators with proven track records in IIT-JEE and NEET coaching.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Personalized Mentorship</h3>
                <p className="text-muted-foreground">
                  Individual attention and customized study plans to address each student's strengths and weaknesses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Comprehensive Study Material</h3>
                <p className="text-muted-foreground">
                  Meticulously designed study resources that cover the entire syllabus with conceptual clarity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Proven Results</h3>
                <p className="text-muted-foreground">
                  Consistent track record of producing top rankers in IIT-JEE and NEET examinations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Regular Assessments</h3>
                <p className="text-muted-foreground">
                  Frequent tests and detailed performance analysis to track progress and improve weak areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg
                    className="h-6 w-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">GuruKul LMS</h3>
                <p className="text-muted-foreground">
                  Access to our digital learning platform with video lectures, practice questions, and performance
                  tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <StatsCounter value={8} label="Years of Excellence" />
            <StatsCounter value={500} label="Success Stories" suffix="+" />
            <StatsCounter value={10} label="Expert Faculty Members" suffix="+" />
            <StatsCounter value={92} label="Selection Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Courses</h2>
            <p className="mt-4 text-muted-foreground">Comprehensive programs designed for academic excellence</p>
          </div>

          <Tabs defaultValue="iit-jee" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="iit-jee">IIT-JEE</TabsTrigger>
              <TabsTrigger value="neet">NEET</TabsTrigger>
              <TabsTrigger value="foundation">Foundation</TabsTrigger>
              <TabsTrigger value="crash">Crash Courses</TabsTrigger>
            </TabsList>

            <TabsContent value="iit-jee" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="IIT-JEE Two-Year Program"
                  description="Comprehensive preparation for Class 11 students aiming for JEE Main & Advanced."
                  image="/images/course-jee.jpg"
                  features={["Complete syllabus coverage", "Regular mock tests", "Doubt clearing sessions"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
                <CourseCard
                  title="IIT-JEE One-Year Program"
                  description="Intensive course for Class 12 students focusing on JEE Main & Advanced preparation."
                  image="/images/course-jee-intensive.jpg"
                  features={["Accelerated learning", "Topic-wise tests", "Previous year paper analysis"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
                <CourseCard
                  title="JEE Test Series"
                  description="Comprehensive test series with detailed analysis and performance tracking."
                  image="/images/course-test-series.jpg"
                  features={["Chapter-wise tests", "Full-length mock exams", "Personalized feedback"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
              </div>
            </TabsContent>

            <TabsContent value="neet" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="NEET Two-Year Program"
                  description="Comprehensive preparation for Class 11 students aiming for NEET."
                  image="/images/course-neet.jpg"
                  features={["Complete syllabus coverage", "Regular mock tests", "Doubt clearing sessions"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
                <CourseCard
                  title="NEET One-Year Program"
                  description="Intensive course for Class 12 students focusing on NEET preparation."
                  image="/images/course-neet-intensive.jpg"
                  features={["Accelerated learning", "Topic-wise tests", "Previous year paper analysis"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
                <CourseCard
                  title="NEET Test Series"
                  description="Comprehensive test series with detailed analysis and performance tracking."
                  image="/images/course-test-series-neet.jpg"
                  features={["Subject-wise tests", "Full-length mock exams", "Personalized feedback"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
              </div>
            </TabsContent>

            <TabsContent value="foundation" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="Foundation Course (Class 9)"
                  description="Building strong fundamentals for future competitive exam preparation."
                  image="/images/course-foundation-9.jpg"
                  features={["Concept building", "Analytical thinking", "Problem-solving skills"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
                <CourseCard
                  title="Foundation Course (Class 10)"
                  description="Strengthening core concepts and preparing for board exams and beyond."
                  image="/images/course-foundation-10.jpg"
                  features={["Board exam preparation", "Competitive exam introduction", "Regular assessments"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
                <CourseCard
                  title="Pre-Foundation Course"
                  description="Early preparation for students in Class 8 to build a strong academic foundation."
                  image="/images/course-pre-foundation.jpg"
                  features={["Basic concept clarity", "Logical reasoning", "Scientific temperament"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
              </div>
            </TabsContent>

            <TabsContent value="crash" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="JEE Crash Course"
                  description="Intensive revision program for JEE aspirants in the final months before the exam."
                  image="/images/course-jee-crash.jpg"
                  features={["Rapid revision", "Important topics focus", "Daily mock tests"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
                <CourseCard
                  title="NEET Crash Course"
                  description="Comprehensive revision program for NEET aspirants in the final months before the exam."
                  image="/images/course-neet-crash.jpg"
                  features={["Subject-wise revision", "NCERT focus", "Daily practice tests"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
                <CourseCard
                  title="Board Exam Crash Course"
                  description="Targeted preparation for Class 12 board exams with focus on scoring techniques."
                  image="/images/course-board-crash.jpg"
                  features={["Important questions", "Answer writing skills", "Time management"]}
                  href="https://forms.gle/HyhaxwtYHTq5LJxt7"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Faculty</h2>
            <p className="mt-4 text-muted-foreground">Learn from the best minds in the field</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FacultyCard
              name="Alok Sir"
              position="Founder & Maths Faculty"
              image="/images/founder.jpg"
              experience="25+ years"
              education="MNIT JAIPUR"
            />
            <FacultyCard
              name="Vandana Singh"
              position="Chemistry Faculty"
              image="/images/vandana.jpeg"
              experience="10+ years"
              education="M.Sc. Chemistry"
            />
            <FacultyCard
              name="Dr. Archana Singh"
              position="Biology Faculty"
              image="/images/archana.jpeg"
              experience="10+ years"
              education="M.Sc. Ph.D."
            />
            <FacultyCard
              name="Er. Roshan Jha"
              position="Physics Faculty"
              image="/images/roshan.jpeg"
              experience="9+ years"
              education="B.Tech."
            />
          </div>

          
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Upcoming Events</h2>
            <p className="mt-4 text-muted-foreground">Join our workshops, webinars, and seminars</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="JEE Advanced Strategy Webinar"
              date="April 15, 2024"
              time="6:00 PM - 7:30 PM"
              location="Online (Zoom)"
              image="/images/event-jee-webinar.jpg"
              href="https://forms.gle/CFWfLACcsBZxTryTA"
            />
            <EventCard
              title="NEET 2024 Preparation Workshop"
              date="April 20, 2024"
              time="10:00 AM - 1:00 PM"
              location="KNS Education Campus, Jaipur"
              image="/images/event-neet-workshop.jpg"
              href="https://forms.gle/CFWfLACcsBZxTryTA"
            />
            <EventCard
              title="Parent-Teacher Meeting"
              date="April 25, 2024"
              time="11:00 AM - 2:00 PM"
              location="KNS Education Campus, Jaipur"
              image="/images/event-ptm.jpg"
              href="https://forms.gle/CFWfLACcsBZxTryTA"
            />
          </div>

         
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Begin Your Journey to Success</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/80">
              Take the first step towards achieving your academic goals with KNS Education's expert guidance and
              personalized mentorship.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="https://forms.gle/CFWfLACcsBZxTryTA">Apply Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="https://forms.gle/HyhaxwtYHTq5LJxt7">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-lg bg-muted p-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Stay Updated</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Subscribe to our newsletter for the latest updates on courses, events, and exam tips.
              </p>
              <div className="mt-6 w-full max-w-md">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TestimonialCard from "@/components/testimonial-card"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Success Stories</h1>
              <p className="mt-4 text-primary-foreground/80">
                Celebrating the achievements of our students who have excelled in competitive exams and secured
                admissions in premier institutions.
              </p>
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image
                src="/images/testimonials-hero.jpg"
                alt="KNS Education Success Stories"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - NEW */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Outstanding Results</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A testament to our teaching excellence and student dedication
            </p>
          </div>

          <Tabs defaultValue="iit-jee" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="iit-jee">IIT-JEE Results</TabsTrigger>
              <TabsTrigger value="b-arch">B.Arch Results</TabsTrigger>
            </TabsList>

            <TabsContent value="iit-jee" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">JEE Advanced 2023</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-lg font-semibold">AIR 45</p>
                          <p>Rahul Sharma</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 156</p>
                          <p>Amit Kumar</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 278</p>
                          <p>Vikram Singh</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 342</p>
                          <p>Neha Gupta</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">JEE Main 2023</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-lg font-semibold">AIR 32</p>
                          <p>Ankit Patel</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 87</p>
                          <p>Riya Sharma</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 124</p>
                          <p>Sanjay Kumar</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 256</p>
                          <p>Priya Verma</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">JEE Advanced 2022</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-lg font-semibold">AIR 67</p>
                          <p>Rohit Jain</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 132</p>
                          <p>Aditya Sharma</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 245</p>
                          <p>Meera Patel</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 389</p>
                          <p>Rajesh Singh</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold">Overall Performance</h3>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <Card className="bg-accent/10">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-accent">95%</p>
                      <p className="mt-2">Selection Rate in JEE Main</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/10">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-accent">85%</p>
                      <p className="mt-2">Selection Rate in JEE Advanced</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/10">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-accent">500+</p>
                      <p className="mt-2">IITians & NITians in Last 5 Years</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="b-arch" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">JEE Main Paper-2 (B.Arch) 2023</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-lg font-semibold">AIR 1</p>
                          <p>Suresh Kumar</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 43</p>
                          <p>Anjali Sharma</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 76</p>
                          <p>Rahul Verma</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 112</p>
                          <p>Priya Singh</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">JEE Main Paper-2 (B.Arch) 2022</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-lg font-semibold">AIR 12</p>
                          <p>Vikram Patel</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 54</p>
                          <p>Neha Gupta</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 87</p>
                          <p>Rajat Sharma</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">AIR 143</p>
                          <p>Ananya Singh</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">NATA 2023</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-lg font-semibold">98.5 Percentile</p>
                          <p>Aditya Kumar</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">97.2 Percentile</p>
                          <p>Riya Jain</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">96.8 Percentile</p>
                          <p>Sanjay Verma</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">95.4 Percentile</p>
                          <p>Meera Patel</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold">Overall Performance</h3>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <Card className="bg-accent/10">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-accent">92%</p>
                      <p className="mt-2">Selection Rate in B.Arch Programs</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/10">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-accent">1</p>
                      <p className="mt-2">AIR-1 in JEE Main Paper-2</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/10">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-accent">200+</p>
                      <p className="mt-2">Architecture Students in Last 5 Years</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Student Testimonials</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our students about their journey with KNS Education
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Rahul Sharma"
              achievement="AIR 45 in JEE Advanced 2023"
              image="/images/testimonial-rahul.jpg"
              quote="The personalized attention and mentorship at KNS Education helped me understand complex concepts and excel in my JEE preparation. The faculty's guidance was instrumental in my success."
            />
            <TestimonialCard
              name="Priya Patel"
              achievement="AIR 78 in NEET 2023"
              image="/images/testimonial-priya.jpg"
              quote="The faculty at KNS Education is exceptional. Their guidance and support were crucial in my NEET journey. The study material and test series helped me identify and improve my weak areas."
            />
            <TestimonialCard
              name="Amit Kumar"
              achievement="AIR 156 in JEE Advanced 2023"
              image="/images/testimonial-amit.jpg"
              quote="The study material and test series at KNS Education are comprehensive and helped me identify and improve my weak areas. The regular doubt clearing sessions were extremely helpful."
            />
            <TestimonialCard
              name="Suresh Kumar"
              achievement="AIR 1 in JEE Main Paper-2 (B.Arch) 2023"
              image="/images/testimonial-suresh.jpg"
              quote="Alok Sir's guidance and the specialized B.Arch preparation at KNS Education were key to my success. The drawing classes and design thinking approach gave me an edge over others."
            />
            <TestimonialCard
              name="Neha Gupta"
              achievement="AIR 342 in JEE Advanced 2023"
              image="/images/testimonial-neha.jpg"
              quote="The structured approach to problem-solving taught at KNS Education helped me tackle even the most challenging questions. The faculty's dedication is truly commendable."
            />
            <TestimonialCard
              name="Vikram Singh"
              achievement="AIR 278 in JEE Advanced 2023"
              image="/images/testimonial-vikram.jpg"
              quote="KNS Education's focus on conceptual clarity rather than rote learning made a huge difference in my preparation. The mock tests were very similar to the actual exam pattern."
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src="/images/parent-testimonial-1.jpg"
                      alt="Parent Testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Mr. Rajesh Sharma</h3>
                    <p className="text-sm text-muted-foreground">Parent of Rahul Sharma, IIT Delhi</p>
                    <p className="mt-2 italic">
                      "The personal attention given to my son at KNS Education was remarkable. The regular updates about
                      his progress and areas of improvement helped us support him better at home."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src="/images/parent-testimonial-2.jpg"
                      alt="Parent Testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Mrs. Sunita Patel</h3>
                    <p className="text-sm text-muted-foreground">Parent of Priya Patel, AIIMS Delhi</p>
                    <p className="mt-2 italic">
                      "KNS Education not only prepared my daughter academically but also instilled confidence and
                      discipline in her. The faculty's commitment to each student's success is truly inspiring."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Video Testimonials</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Watch our students share their experiences and success stories
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/placeholder1"
                  title="Student Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Rahul Sharma - IIT Delhi</h3>
                <p className="text-sm text-muted-foreground">JEE Advanced AIR 45</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/placeholder2"
                  title="Student Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Priya Patel - AIIMS Delhi</h3>
                <p className="text-sm text-muted-foreground">NEET AIR 78</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/placeholder3"
                  title="Student Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Suresh Kumar - SPA Delhi</h3>
                <p className="text-sm text-muted-foreground">JEE Main Paper-2 AIR 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Success Story</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/80">
              Be the next success story at KNS Education. Enroll now and begin your journey towards academic excellence.
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
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


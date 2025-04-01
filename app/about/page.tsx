// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import FacultyCard from "@/components/faculty-card"

// export default function AboutPage() {
//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <section className="bg-primary py-16 md:py-24 text-primary-foreground">
//         <div className="container">
//           <div className="grid gap-8 md:grid-cols-2 items-center">
//             <div>
//               <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About KNS Education</h1>
//               <p className="mt-4 text-primary-foreground/80">
//                 A premier coaching institute dedicated to nurturing future leaders through personalized mentorship and
//                 academic excellence.
//               </p>
//             </div>
//             <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
//               <Image src="/images/about-hero.jpg" alt="KNS Education Campus" fill className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-16 md:py-24">
//         <div className="container">
//           <div className="grid gap-12 md:grid-cols-2 items-center">
//             <div className="relative h-80 overflow-hidden rounded-lg">
//               <Image
//                 src="/images/founder.jpg"
//                 alt="Alok Sir - Founder of KNS Education"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
//               <p className="mt-4 text-muted-foreground">
//                 Founded in 2014 by Alok Sir, an IIT Delhi alumnus with a passion for teaching, KNS Education began as a
//                 small coaching center with just 15 students. With a vision to provide quality education and personalized
//                 mentorship, the institute has grown to become one of the most trusted names in IIT-JEE and NEET
//                 preparation in Jaipur.
//               </p>
//               <p className="mt-4 text-muted-foreground">
//                 Over the years, KNS Education has helped thousands of students achieve their dreams of studying in
//                 premier institutions like IITs, NITs, AIIMS, and other medical and  colleges across India. Our consistent
//                 track record of producing top rankers is a testament to our commitment to excellence.
//               </p>
//               <div className="mt-6">
//                 <Button asChild>
//                   <Link href="/about/founder">Read Founder's Message</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Values Section */}
//       <section className="bg-muted py-16 md:py-24">
//         <div className="container">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
//             <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
//               At KNS Education, our core values guide everything we do, from teaching methodologies to student
//               interactions.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             <Card>
//               <CardContent className="flex flex-col items-center p-6 text-center">
//                 <div className="mb-4 rounded-full bg-primary/10 p-3">
//                   <svg
//                     className="h-6 w-6 text-primary"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
//                 <p className="text-muted-foreground">
//                   We strive for excellence in everything we do, from teaching to student support.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="flex flex-col items-center p-6 text-center">
//                 <div className="mb-4 rounded-full bg-primary/10 p-3">
//                   <svg
//                     className="h-6 w-6 text-primary"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
//                 <p className="text-muted-foreground">
//                   We maintain the highest standards of honesty and ethical conduct in all our interactions.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="flex flex-col items-center p-6 text-center">
//                 <div className="mb-4 rounded-full bg-primary/10 p-3">
//                   <svg
//                     className="h-6 w-6 text-primary"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
//                 <p className="text-muted-foreground">
//                   We continuously innovate our teaching methodologies to enhance learning outcomes.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="flex flex-col items-center p-6 text-center">
//                 <div className="mb-4 rounded-full bg-primary/10 p-3">
//                   <svg
//                     className="h-6 w-6 text-primary"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold">Student-Centric</h3>
//                 <p className="text-muted-foreground">
//                   We put our students at the center of everything we do, focusing on their growth and success.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Faculty Section */}
//       <section className="py-16 md:py-24" id="faculty">
//         <div className="container">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tight">Our Faculty</h2>
//             <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
//               Our team of experienced educators is dedicated to helping students achieve their academic goals.
//             </p>
//           </div>

//           <Tabs defaultValue="physics" className="w-full">
//             <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
//               <TabsTrigger value="physics">Physics</TabsTrigger>
//               <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
//               <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
//               <TabsTrigger value="biology">Biology</TabsTrigger>
//             </TabsList>

//             <TabsContent value="physics" className="mt-6">
//               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 <FacultyCard
//                   name="Alok Sir"
//                   position="Founder & Physics Faculty"
//                   image="/images/faculty-alok.jpg"
//                   experience="15+ years"
//                   education="IIT Delhi"
//                 />
//                 <FacultyCard
//                   name="Rahul Sharma"
//                   position="Physics Faculty"
//                   image="/images/faculty-rahul.jpg"
//                   experience="8+ years"
//                   education="IIT Madras"
//                 />
//                 <FacultyCard
//                   name="Pradeep Kumar"
//                   position="Physics Faculty"
//                   image="/images/faculty-pradeep.jpg"
//                   experience="10+ years"
//                   education="IIT Bombay"
//                 />
//               </div>
//             </TabsContent>

//             <TabsContent value="chemistry" className="mt-6">
//               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 <FacultyCard
//                   name="Dr. Amit Verma"
//                   position="Chemistry Faculty"
//                   image="/images/faculty-amit.jpg"
//                   experience="8+ years"
//                   education="IIT Kanpur"
//                 />
//                 <FacultyCard
//                   name="Dr. Neha Singh"
//                   position="Chemistry Faculty"
//                   image="/images/faculty-neha.jpg"
//                   experience="7+ years"
//                   education="IIT Roorkee"
//                 />
//                 <FacultyCard
//                   name="Vikram Joshi"
//                   position="Chemistry Faculty"
//                   image="/images/faculty-vikram.jpg"
//                   experience="9+ years"
//                   education="IIT Delhi"
//                 />
//               </div>
//             </TabsContent>

//             <TabsContent value="mathematics" className="mt-6">
//               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 <FacultyCard
//                   name="Rajesh Kumar"
//                   position="Mathematics Faculty"
//                   image="/images/faculty-rajesh.jpg"
//                   experience="10+ years"
//                   education="IIT Bombay"
//                 />
//                 <FacultyCard
//                   name="Sanjay Gupta"
//                   position="Mathematics Faculty"
//                   image="/images/faculty-sanjay.jpg"
//                   experience="12+ years"
//                   education="IIT Delhi"
//                 />
//                 <FacultyCard
//                   name="Anita Sharma"
//                   position="Mathematics Faculty"
//                   image="/images/faculty-anita.jpg"
//                   experience="9+ years"
//                   education="IIT Kharagpur"
//                 />
//               </div>
//             </TabsContent>

//             <TabsContent value="biology" className="mt-6">
//               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 <FacultyCard
//                   name="Dr. Priya Sharma"
//                   position="Biology Faculty"
//                   image="/images/faculty-priya.jpg"
//                   experience="12+ years"
//                   education="AIIMS Delhi"
//                 />
//                 <FacultyCard
//                   name="Dr. Suresh Patel"
//                   position="Biology Faculty"
//                   image="/images/faculty-suresh.jpg"
//                   experience="10+ years"
//                   education="AIIMS Jodhpur"
//                 />
//                 <FacultyCard
//                   name="Dr. Meena Kumari"
//                   position="Biology Faculty"
//                   image="/images/faculty-meena.jpg"
//                   experience="8+ years"
//                   education="AIIMS Bhopal"
//                 />
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Infrastructure Section */}
//       <section className="bg-muted py-16 md:py-24">
//         <div className="container">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tight">Our Infrastructure</h2>
//             <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
//               State-of-the-art facilities designed to enhance the learning experience.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             <Card className="overflow-hidden">
//               <div className="aspect-video w-full overflow-hidden">
//                 <Image
//                   src="/images/infrastructure-classroom.jpg"
//                   alt="Modern Classrooms"
//                   width={500}
//                   height={280}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold">Modern Classrooms</h3>
//                 <p className="mt-2 text-muted-foreground">
//                   Spacious, well-lit classrooms equipped with modern teaching aids for an optimal learning environment.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden">
//               <div className="aspect-video w-full overflow-hidden">
//                 <Image
//                   src="/images/infrastructure-library.jpg"
//                   alt="Well-Stocked Library"
//                   width={500}
//                   height={280}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold">Well-Stocked Library</h3>
//                 <p className="mt-2 text-muted-foreground">
//                   A comprehensive collection of reference books, study materials, and digital resources for in-depth
//                   learning.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden">
//               <div className="aspect-video w-full overflow-hidden">
//                 <Image
//                   src="/images/infrastructure-lab.jpg"
//                   alt="Advanced Laboratories"
//                   width={500}
//                   height={280}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold">Advanced Laboratories</h3>
//                 <p className="mt-2 text-muted-foreground">
//                   Fully equipped physics, chemistry, and biology labs for practical learning and experimentation.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24">
//         <div className="container">
//           <div className="rounded-lg bg-primary p-8 text-primary-foreground">
//             <div className="flex flex-col items-center text-center">
//               <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to Begin Your Journey?</h2>
//               <p className="mt-4 max-w-2xl text-primary-foreground/80">
//                 Join KNS Education and take the first step towards achieving your academic goals with our expert
//                 guidance and personalized mentorship.
//               </p>
//               <div className="mt-8 flex flex-wrap justify-center gap-4">
//                 <Button asChild size="lg" variant="secondary">
//                   <Link href="/admissions">Apply Now</Link>
//                 </Button>
//                 <Button
//                   asChild
//                   size="lg"
//                   variant="outline"
//                   className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
//                 >
//                   <Link href="/contact">Contact Us</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About KNS Education</h1>
              <p className="mt-4 text-primary-foreground/80">
                A premier coaching institute dedicated to nurturing future leaders through personalized mentorship and
                academic excellence.
              </p>
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image src="/images/about-hero.jpg" alt="KNS Education Campus" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Roots of Wisdom Section - NEW */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Roots of Wisdom</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              The foundation of excellence that inspires our teaching philosophy
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <Image src="/images/kailash-nath-singh.jpg" alt="Shri Kailash Nath Singh" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Shri Kailash Nath Singh</h3>
              <p className="mt-2 text-primary font-medium">Father of Alok Sir</p>
              <p className="mt-4 text-muted-foreground">
                Retired Associate Professor from the University of Rajasthan, Mathematics Department, Shri Kailash Nath
                Singh laid the foundation of mathematical excellence that continues to inspire our teaching methodology
                at KNS Education.
              </p>
              <p className="mt-4 text-muted-foreground">
                His dedication to education and profound understanding of mathematics has been passed down to the next
                generation, forming the roots of wisdom that guide our institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - UPDATED */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <Image
                src="/images/founder.jpg"
                alt="Alok Sir - Founder of KNS Education"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Founder</h2>
              <h3 className="text-xl font-bold mt-4">Alok Sir</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>Mentor of 1000s of IITians & NITians</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>Mentored AIR-1, JEE MAIN-Paper-2</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>B.Tech Electrical, MNIT-Jaipur</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>Ex-HOD Maths, Career Point-Jaipur</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>24 Years of Teaching Experience</span>
                </li>
              </ul>
              <p className="mt-6 text-muted-foreground">
                Founded in 2014 by Alok Sir, KNS Education began as a small coaching center with just 15 students. With
                a vision to provide quality education and personalized mentorship, the institute has grown to become one
                of the most trusted names in IIT-JEE and NEET preparation in Jaipur.
              </p>
              <p className="mt-4 text-muted-foreground">
                Over the years, KNS Education has helped thousands of students achieve their dreams of studying in
                premier institutions like IITs, NITs, AIIMS, and other medical colleges across India. Our consistent
                track record of producing top rankers is a testament to our commitment to excellence.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/about/founder">Read Founder's Message</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              At KNS Education, our core values guide everything we do, from teaching methodologies to student
              interactions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from teaching to student support.
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
                <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of honesty and ethical conduct in all our interactions.
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
                <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously innovate our teaching methodologies to enhance learning outcomes.
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
                <h3 className="mb-2 text-xl font-semibold">Student-Centric</h3>
                <p className="text-muted-foreground">
                  We put our students at the center of everything we do, focusing on their growth and success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Infrastructure</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art facilities designed to enhance the learning experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/images/infrastructure-classroom.jpg"
                  alt="Modern Classrooms"
                  width={500}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Modern Classrooms</h3>
                <p className="mt-2 text-muted-foreground">
                  Spacious, well-lit classrooms equipped with modern teaching aids for an optimal learning environment.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/images/infrastructure-library.jpg"
                  alt="Well-Stocked Library"
                  width={500}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Well-Stocked Library</h3>
                <p className="mt-2 text-muted-foreground">
                  A comprehensive collection of reference books, study materials, and digital resources for in-depth
                  learning.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/images/infrastructure-lab.jpg"
                  alt="Advanced Laboratories"
                  width={500}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Advanced Laboratories</h3>
                <p className="mt-2 text-muted-foreground">
                  Fully equipped physics, chemistry, and biology labs for practical learning and experimentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-lg bg-primary p-8 text-primary-foreground">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to Begin Your Journey?</h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/80">
                Join KNS Education and take the first step towards achieving your academic goals with our expert
                guidance and personalized mentorship.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
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
        </div>
      </section>
    </div>
  )
}



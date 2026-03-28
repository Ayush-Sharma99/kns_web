import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/knslogo-white.jpg"
                alt="KNS Education Logo"
                width={150}
                height={60}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-sm">
              KNS Education is a premier coaching institute in Jaipur specializing in IIT-JEE and NEET preparation with
              personalized mentorship.
            </p>
            <div className="flex space-x-4">
              
             
              <Link href="https://www.instagram.com/kns_education?utm_source=qr&igsh=Mnk4aDNld2IyN2h6" className="hover:text-accent">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-accent">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.youtube.com/@AlokSirMaths" className="hover:text-accent">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-accent">
                  Courses
                </Link>
              </li>
              
              
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="hover:text-accent">
                  IIT-JEE Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-accent">
                  NEET Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-accent">
                  Foundation Courses (9th-10th)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-accent">
                  Crash Courses
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-accent">
                  Test Series
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>C-451, Mahesh Nagar, Jaipur, Rajasthan 302015</p>
              <p>
                <a href="tel:+917976911779" className="hover:text-accent">
                  +91 79769 11779
                </a>
              </p>
              <p>
                <a href="mailto:knseducation.help@gmail.com" className="hover:text-accent">
                  knseducation.help@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} KNS Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


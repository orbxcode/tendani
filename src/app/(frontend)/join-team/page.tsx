import Link from "next/link"
import Image from "next/image"
import { Building, CheckCircle2, Users, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AgentApplicationForm } from "@/components/agent-application-form"

export default function JoinTeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Building className="h-6 w-6" />
            <span>Tendani Properties</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/properties" className="text-sm font-medium hover:text-primary">
              Properties
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="/join-team" className="text-sm font-medium text-primary">
              Join Our Team
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link href="/properties">Browse Properties</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        {/* An image slider should be used as a background */}
        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Real estate team"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Join the Tendani Real Estate Team
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
              Build your career with South Africa's trusted property expert and unlock your potential in real estate.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="#apply">Apply Now</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Join Our Team?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the benefits of building your real estate career with Tendani Properties
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Mentorship</h3>
                  <p className="text-muted-foreground">
                    Learn directly from Tendani and his team of experienced professionals with over 20 years in the
                    industry.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Growth Opportunities</h3>
                  <p className="text-muted-foreground">
                    Access to continuous training, professional development, and clear pathways for career advancement.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Supportive Environment</h3>
                  <p className="text-muted-foreground">
                    Join a collaborative team that values cooperation, knowledge sharing, and mutual success.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Competitive Compensation</h3>
                  <p className="text-muted-foreground">
                    Enjoy attractive commission structures and incentives that reward your hard work and success.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Established Brand</h3>
                  <p className="text-muted-foreground">
                    Leverage Tendani's trusted reputation and established brand to build your client base more
                    effectively.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Marketing Support</h3>
                  <p className="text-muted-foreground">
                    Access to professional marketing tools, resources, and support to help you showcase properties
                    effectively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Who We're Looking For</h2>
                <p className="text-muted-foreground md:text-lg">
                  We welcome both experienced agents and newcomers with the right attitude and potential. The ideal
                  Tendani Properties team member possesses:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Strong communication and interpersonal skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Self-motivation and a strong work ethic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Integrity and a commitment to ethical business practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Eagerness to learn and grow professionally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Passion for real estate and helping clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Ability to build and maintain client relationships</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Real Estate Team"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Application Process</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Here's what to expect when you apply to join the Tendani Properties team
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Application Submission</h3>
                    <p className="text-muted-foreground">
                      Complete and submit the application form below with your details and experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Initial Review</h3>
                    <p className="text-muted-foreground">
                      Our team will review your application and contact you within 5 business days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Interview</h3>
                    <p className="text-muted-foreground">
                      Selected candidates will be invited for an interview with our management team.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Assessment</h3>
                    <p className="text-muted-foreground">
                      Depending on your experience level, you may be asked to complete a skills assessment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    5
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Onboarding</h3>
                    <p className="text-muted-foreground">
                      Successful candidates will receive an offer and begin our comprehensive onboarding program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Become an Agent - Apply Now</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Fill out the form below to start your journey with Tendani Properties
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <AgentApplicationForm />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Agents Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Hear from the agents who have built successful careers with Tendani Properties
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Agent"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="space-y-2">
                      <p className="text-muted-foreground italic">
                        "Joining Tendani Properties was the best career decision I've made. The mentorship and support
                        have been invaluable to my growth as an agent."
                      </p>
                      <div>
                        <h4 className="font-bold">Thabo Molefe</h4>
                        <p className="text-sm text-muted-foreground">Agent since 2018</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Agent"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="space-y-2">
                      <p className="text-muted-foreground italic">
                        "As a new agent, I was worried about breaking into the industry. Tendani's training program gave
                        me the confidence and skills I needed to succeed."
                      </p>
                      <div>
                        <h4 className="font-bold">Lerato Ndlovu</h4>
                        <p className="text-sm text-muted-foreground">Agent since 2021</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Agent"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="space-y-2">
                      <p className="text-muted-foreground italic">
                        "The collaborative environment at Tendani Properties sets it apart from other agencies. We work
                        together rather than competing, which benefits everyone."
                      </p>
                      <div>
                        <h4 className="font-bold">John van der Merwe</h4>
                        <p className="text-sm text-muted-foreground">Agent since 2016</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Common questions about joining the Tendani Properties team
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do I need prior experience in real estate?</h3>
                <p className="text-muted-foreground">
                  While experience is valuable, we also welcome newcomers with the right attitude and potential. Our
                  training program will help you develop the necessary skills.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What qualifications do I need?</h3>
                <p className="text-muted-foreground">
                  You'll need to meet the regulatory requirements for real estate agents in South Africa. We can guide
                  you through obtaining the necessary certifications if you don't already have them.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How is commission structured?</h3>
                <p className="text-muted-foreground">
                  We offer competitive commission structures that reward performance. Details will be discussed during
                  the interview process, as they may vary based on experience and role.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is training provided?</h3>
                <p className="text-muted-foreground">
                  Yes, all new agents receive comprehensive training, regardless of experience level. We also offer
                  ongoing professional development opportunities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What areas will I cover?</h3>
                <p className="text-muted-foreground">
                  Agents typically focus on specific regions or neighborhoods, but this can be flexible based on your
                  expertise and preferences. We'll work with you to determine the best fit.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How long does the application process take?</h3>
                <p className="text-muted-foreground">
                  The entire process typically takes 2-4 weeks from application to onboarding, depending on your
                  availability and background checks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Take the Next Step?</h2>
                <p className="max-w-[600px] md:text-xl">
                  Join our team of dedicated professionals and build a rewarding career in real estate.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <a href="#apply">Apply Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Building className="h-5 w-5" />
              <span>Tendani Properties</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Tendani Properties. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact Us
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Video, Users, Calendar } from "lucide-react";

export default function CollaborationPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Collaborate at Nur House</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        At Nur House, we believe that great ideas flourish when people come together. As Chicago's next big co-working innovation, we've designed our space to foster collaboration, creativity, and community.
      </p>

      {/* Meeting Spaces Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="inline-block mb-8 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          Meeting Spaces
        </div>
        <h2 className="text-3xl font-bold mb-8">Meeting & Collaboration Spaces</h2>
        
        <div className="space-y-10">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50 rounded-2xl pointer-events-none"></div>
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 relative hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Video className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4">Conference Rooms</h3>
                  <p className="text-muted-foreground mb-6">
                    Our professional conference rooms are equipped with everything you need for productive meetings, presentations, and collaborations.
                  </p>
                  <h4 className="text-lg font-medium mb-3">How to Book:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Email bookings@nurhouse.com with your request</li>
                    <li>Include your preferred room, date, and time</li>
                    <li>Wait for confirmation email</li>
                    <li>Receive booking confirmation</li>
                  </ol>
                  <div className="bg-primary/5 p-4 rounded-xl">
                    <p className="text-muted-foreground mb-2">
                      <span className="font-medium">Dedicated Desk members:</span> 4 hours of meeting room credits per month
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Private Office members:</span> 8 hours of meeting room credits per month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-50 rounded-2xl pointer-events-none"></div>
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 relative hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4">Collaboration Zones</h3>
                  <p className="text-muted-foreground mb-6">
                    Informal meeting areas designed for spontaneous collaboration, brainstorming sessions, and casual discussions.
                  </p>
                  <h4 className="text-lg font-medium mb-3">How to Use:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Available on a first-come, first-served basis to all members</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Perfect for impromptu team meetings and creative discussions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Equipped with whiteboards, displays, and comfortable seating</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50 rounded-2xl pointer-events-none"></div>
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 relative hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4">Event Spaces</h3>
                  <p className="text-muted-foreground mb-6">
                    Host workshops, networking events, presentations, or private gatherings in our versatile event spaces.
                  </p>
                  <h4 className="text-lg font-medium mb-3">How to Book:</h4>
                  <p className="text-muted-foreground mb-6">
                    Event spaces can be booked by contacting our events team via email at events@nurhouse.com or through the front desk. Members receive preferential rates.
                  </p>
                  <Button asChild>
                    <Link href="/contact">Contact for Event Booking</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Collaboration Section */}
      <div className="mt-20 max-w-4xl mx-auto relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-70"></div>
        <div className="backdrop-blur-sm p-10 border border-primary/10 relative">
          <h2 className="text-3xl font-bold mb-8 text-center">Community & Networking</h2>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Member Community</h3>
            <p className="text-muted-foreground mb-8">
              As a Nur House member, you'll join a diverse community of professionals, entrepreneurs, creatives, and innovators. Connect with potential collaborators, clients, and partners through:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-background/80 p-6 rounded-xl">
                <h4 className="text-lg font-medium mb-2">Community Events</h4>
                <p className="text-muted-foreground">Regular networking sessions, happy hours, and community gatherings</p>
              </div>
              <div className="bg-background/80 p-6 rounded-xl">
                <h4 className="text-lg font-medium mb-2">Member Directory</h4>
                <p className="text-muted-foreground">Access our digital member directory to find potential collaborators</p>
              </div>
              <div className="bg-background/80 p-6 rounded-xl">
                <h4 className="text-lg font-medium mb-2">Slack Community</h4>
                <p className="text-muted-foreground">Join our digital workspace to stay connected and share opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Join Chicago's Next Big Co-working Community?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the Nur House difference with our 2-week free trial. No contracts, just a vibrant community and productive space designed for success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/pricing">View Our Plans</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Book a Tour</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

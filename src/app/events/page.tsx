import { Calendar, Users, Award } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-16 text-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <div className="inline-block mb-4 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          What's Happening
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Upcoming Events at Nur House</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          Stay tuned for exciting workshops, networking events, and community gatherings at Nur House, Chicago's hub for innovation and collaboration. Be part of the next big thing!
        </p>
        
        {/* Placeholder for events listing - this could be dynamically fetched or manually updated */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-8 bg-background/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-sm relative overflow-hidden group hover:border-primary/20 hover:shadow-md transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-4 items-center md:items-start text-left">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-grow md:ml-4">
                <h2 className="text-2xl font-semibold mb-2">Community Meet & Greet</h2>
                <p className="text-muted-foreground mb-2"><span className="font-semibold">Date:</span> June 15, 2025</p>
                <p className="text-muted-foreground">Join us for an evening of networking and fun! Easy to attend, just show up. More details available by emailing events@nurhouse.com.</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-background/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-sm relative overflow-hidden group hover:border-primary/20 hover:shadow-md transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-4 items-center md:items-start text-left">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-grow md:ml-4">
                <h2 className="text-2xl font-semibold mb-2">Workshop: Mastering Productivity</h2>
                <p className="text-muted-foreground mb-2"><span className="font-semibold">Date:</span> July 5, 2025</p>
                <p className="text-muted-foreground">Learn new techniques to boost your productivity. Sign up via the Nur House app.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl backdrop-blur-sm border border-primary/10">
            <h3 className="text-xl font-semibold mb-3">Want to suggest or host an event?</h3>
            <p className="text-muted-foreground mb-2">We love collaborating with our community members!</p>
            <p className="text-foreground">Contact us at <a href="mailto:events@nurhouse.com" className="text-primary hover:underline">events@nurhouse.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

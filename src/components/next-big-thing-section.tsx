import { TrendingUp, Star, Award, MapPin } from "lucide-react";

export function NextBigThingSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/3 to-primary/5 pointer-events-none"></div>
      
      {/* Subtle patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-accent blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-3 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Chicago's Co-Working Revolution
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Chicago's Next Big Thing</h2>
          <p className="text-xl text-muted-foreground">
            Nur House is revolutionizing co-working in Chicago with our blend of premium amenities, 
            flexible options, and vibrant community. Here's why we're the space everyone's talking about:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-background/80 backdrop-blur-sm border border-primary/10 p-8 rounded-2xl text-center hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-5">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Hub</h3>
              <p className="text-muted-foreground">
                Join a community of forward-thinking professionals, entrepreneurs, and creators all under one roof.
              </p>
            </div>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm border border-primary/10 p-8 rounded-2xl text-center hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-5">
                <Star className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Experience</h3>
              <p className="text-muted-foreground">
                Enjoy high-end amenities, modern workspaces, and exceptional service without the premium price tag.
              </p>
            </div>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm border border-primary/10 p-8 rounded-2xl text-center hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-5">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No Contracts</h3>
              <p className="text-muted-foreground">
                Flexible month-to-month memberships with a 2-week free trial, because we're confident you'll love it here.
              </p>
            </div>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm border border-primary/10 p-8 rounded-2xl text-center hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-5">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Location</h3>
              <p className="text-muted-foreground">
                Located at 309 W Washington St, in the heart of Chicago's business district with easy access to everything.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-14">
          <div className="inline-block mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 backdrop-blur-sm border border-primary/10">
            <p className="text-xl text-foreground font-medium">
              Be part of Chicago's most exciting co-working revolution. The next big thing isn't just coming—it's already here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { TrendingUp, Star, Award, MapPin } from "lucide-react";

export function NextBigThingSection() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-6">Chicago's Next Big Thing</h2>
          <p className="text-xl text-muted-foreground">
            Nur House is revolutionizing co-working in Chicago with our blend of premium amenities, 
            flexible options, and vibrant community. Here's why we're the space everyone's talking about:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-secondary/60 p-6 rounded-lg text-center hover:bg-secondary transition-colors">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation Hub</h3>
            <p className="text-muted-foreground">
              Join a community of forward-thinking professionals, entrepreneurs, and creators all under one roof.
            </p>
          </div>
          
          <div className="bg-secondary/60 p-6 rounded-lg text-center hover:bg-secondary transition-colors">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Experience</h3>
            <p className="text-muted-foreground">
              Enjoy high-end amenities, modern workspaces, and exceptional service without the premium price tag.
            </p>
          </div>
          
          <div className="bg-secondary/60 p-6 rounded-lg text-center hover:bg-secondary transition-colors">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">No Contracts</h3>
            <p className="text-muted-foreground">
              Flexible month-to-month memberships with a 2-week free trial, because we're confident you'll love it here.
            </p>
          </div>
          
          <div className="bg-secondary/60 p-6 rounded-lg text-center hover:bg-secondary transition-colors">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Prime Location</h3>
            <p className="text-muted-foreground">
              Located at 309 W Washington St, in the heart of Chicago's business district with easy access to everything.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of Chicago's most exciting co-working revolution. The next big thing isn't just coming—it's already here.
          </p>
        </div>
      </div>
    </section>
  );
}

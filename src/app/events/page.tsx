export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 text-foreground"> {/* Changed background and text colors */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events at Nur House</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Stay tuned for exciting workshops, networking events, and community gatherings at Nur House, Chicago's hub for innovation and collaboration. Be part of the next big thing!
        </p>
        {/* Placeholder for events listing - this could be dynamically fetched or manually updated */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="p-6 bg-secondary rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Community Meet & Greet</h2>
            <p className="text-muted-foreground mb-1"><span className="font-semibold">Date:</span> June 15, 2025</p>
            <p className="text-muted-foreground">Join us for an evening of networking and fun! Easy to attend, just show up. More details available by emailing events@nurhouse.com.</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Workshop: Mastering Productivity</h2>
            <p className="text-muted-foreground mb-1"><span className="font-semibold">Date:</span> July 5, 2025</p>
            <p className="text-muted-foreground">Learn new techniques to boost your productivity. Sign up via the Nur House app.</p>
          </div>
          <p className="text-muted-foreground mt-8">More events coming soon. Check back regularly!</p>
        </div>
      </div>
    </div>
  );
}

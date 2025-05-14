export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 text-foreground">
      <div className="max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Get in Touch with Nur House</h1>
        <p className="text-center text-muted-foreground mb-8">
          Have questions, want to book a tour, or interested in becoming a part of Chicago's next big co-working community? Send us a message or visit us at 309 W Washington St, Suite 1050, Chicago, IL 60606!
        </p>
        <form className="p-8 rounded-lg shadow-lg bg-secondary">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-md bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 rounded-md bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Message (e.g., I'd like to book a tour, I have a question about the 2-week free trial)"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-8 text-muted-foreground">
          <p>You can also reach us at:</p>
          <p>Email: <a href="mailto:contact@nurhouse.com" className="underline hover:text-primary">contact@nurhouse.com</a></p>
          <p>Phone: <a href="tel:+13125550123" className="underline hover:text-primary">(312) 555-0123</a></p>
          <p>Address: 309 W Washington St, Suite 1050, Chicago, IL 60606</p>
        </div>
      </div>
    </div>
  );
}

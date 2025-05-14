import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What are your membership options and pricing?",
    answer: "We offer a range of flexible membership plans starting from $150/month for Basic Access, $300/month for a Dedicated Desk, and $500/month for a Private Office. We also have day passes for $20 and week passes for $100. Visit our Pricing page for more details!",
  },
  {
    question: "Are there any long-term contracts?",
    answer: "No, we believe in flexibility! Nur House operates on a month-to-month basis for our memberships. You can upgrade, downgrade, or cancel with appropriate notice. We want you to have a workspace solution that adapts to your needs.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 2-week free trial for new members to experience Nur House. Come try out our space, amenities, and vibrant community to see if we're the right fit for you. Contact us to get started!",
  },
  {
    question: "What are your operating hours?",
    answer: "Our general access hours are from 9:00 AM to 6:00 PM, Monday to Friday. Members with Dedicated Desks and Private Offices enjoy 24/7 access, ensuring you can work whenever inspiration strikes.",
  },
  {
    question: "How can I book a meeting room?",
    answer: "Booking a meeting room is easy! Simply email bookings@nurhouse.com with your requested date and time. Our Dedicated Desk plan includes 4 hours of meeting room credits per month, and Private Office plans include 8 hours. Additional hours can be booked at a member rate. Day pass users can also book meeting rooms subject to availability.",
  },
  {
    question: "How does Nur House foster collaboration and networking?",
    answer: "Nur House is designed to be more than just a workspace; it's a community. We host regular networking events, workshops, and social gatherings. Our open-plan areas and communal spaces encourage interaction, and our diverse member base provides ample opportunities to connect with like-minded professionals and potential collaborators.",
  },
  {
    question: "What kind of events do you host?",
    answer: "We host a variety of events, including industry-specific meetups, skill-building workshops, guest speaker sessions, wellness activities, and casual social events. Check our Events page for the latest schedule and become part of the next big thing in Chicago's professional scene!",
  },
  {
    question: "What amenities are included?",
    answer: "All members enjoy high-speed Wi-Fi, complimentary coffee and tea, access to common areas, and community events. Depending on your plan, you can also access dedicated desks, private offices, printing/scanning services, mail handling, and meeting room credits.",
  },
  {
    question: "Where are you located?",
    answer: "Nur House is conveniently located at 309 W Washington St, Suite 1050, Chicago, IL 60606. We're easily accessible by public transport and surrounded by great local amenities.",
  },
  {
    question: "How can I book a tour?",
    answer: "We'd love to show you around! You can book a tour by visiting our Contact page and filling out the form, or by emailing us directly at contact@nurhouse.com.",
  },
];

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Find answers to common questions about Nur House, Chicago's premier co-working space.
      </p>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

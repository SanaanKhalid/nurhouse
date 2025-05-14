import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Selected key FAQs for the homepage
const homepageFaqs = [
  {
    question: "What are your membership options?",
    answer: "We offer flexible plans starting from $150/month for Basic Access, $300/month for a Dedicated Desk, and $500/month for a Private Office. We also provide day passes ($20) and week passes ($100).",
  },
  {
    question: "Are there any contracts or commitments?",
    answer: "No! We believe in flexibility. All Nur House memberships are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel with appropriate notice.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! All new members can enjoy a 2-week free trial to experience Nur House before committing. It's the perfect way to see if our space works for you.",
  },
  {
    question: "What are your operating hours?",
    answer: "Our space is open from 9am to 10pm everyday for members with unlimited access plans. Basic members can access the space during their scheduled days within these hours.",
  },
];

export function FaqSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-lg text-center text-muted-foreground mb-10">
        Quick answers to common questions about Nur House
      </p>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {homepageFaqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/faq">View All FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

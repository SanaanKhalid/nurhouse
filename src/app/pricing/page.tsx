import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Basic Access",
    price: "$150",
    frequency: "/month",
    features: [
      "Access 8 days per month",
      "High-speed Wi-Fi",
      "Community events",
      "Free coffee & tea",
    ],
    cta: "Choose Plan",
  },
  {
    title: "Dedicated Desk",
    price: "$300",
    frequency: "/month",
    features: [
      "Unlimited access",
      "Dedicated desk",
      "4 hours meeting room credits",
      "Printing & scanning services",
    ],
    cta: "Choose Plan",
  },
  {
    title: "Private Office",
    price: "$500",
    frequency: "/month",
    features: [
      "Private office for up to 4 people",
      "8 hours meeting room credits",
      "Mail handling & business address",
      "24/7 access",
    ],
    cta: "Choose Plan",
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-4">Our Pricing Plans</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Choose the perfect plan for your co-working needs at Nur House Chicago, the city's most innovative workspace. All monthly plans are contract-free, and you can start with a 2-week free trial!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Card key={plan.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{plan.title}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.frequency}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Meeting Room Information */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Meeting Rooms & Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Meeting Room Booking</h3>
            <p className="text-muted-foreground mb-4">
              Our meeting rooms are equipped with state-of-the-art technology, comfortable seating, and professional environments for your important discussions.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Dedicated Desk members: 4 hours of credits per month
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Private Office members: 8 hours of credits per month
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Additional hours available at member rates
              </li>
            </ul>
            <p className="text-muted-foreground">
              Book by emailing bookings@nurhouse.com or contact the front desk for assistance.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <span className="font-medium">Event Space Rentals</span>
                  <p className="mt-1">Host your own events in our versatile spaces</p>
                </div>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <span className="font-medium">Printing & Scanning</span>
                  <p className="mt-1">Professional printing services with monthly allowances</p>
                </div>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <span className="font-medium">Mail Handling</span>
                  <p className="mt-1">Professional business address & mail services</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Hours Information */}
      <div className="mt-16 bg-secondary/30 p-8 rounded-lg max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
        <p className="text-lg mb-2">
          <span className="font-medium">Regular hours:</span> 9:00 AM - 10:00 PM, seven days a week
        </p>
        <p className="text-lg mb-6">
          <span className="font-medium">24/7 access:</span> Available for Private Office members
        </p>
        <p className="text-muted-foreground">
          Located at 309 W Washington St, Suite 1050, Chicago, IL 60606
        </p>
      </div>
    </div>
  );
}

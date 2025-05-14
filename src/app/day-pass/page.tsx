import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const dayPassOptions = [
  {
    title: "Day Pass",
    price: "$20",
    description: "Access for a single day. Perfect for trying out our space or for occasional visits.",
    features: [
      "Access to common areas",
      "High-speed Wi-Fi",
      "Free coffee & tea",
    ],
    cta: "Get Day Pass",
  },
  {
    title: "Week Pass",
    price: "$100",
    description: "Access for a full week. Ideal for short projects or a productive week away from home.",
    features: [
      "7 consecutive days of access",
      "Access to common areas",
      "High-speed Wi-Fi",
      "Free coffee & tea",
    ],
    cta: "Get Week Pass",
  },
];

export default function DayPassPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-4">Get a Pass</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Need a flexible option for Chicago's premier co-working space? Grab a day or week pass for Nur House. Perfect for short-term needs with no commitment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {dayPassOptions.map((option) => (
          <Card key={option.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{option.title}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">{option.price}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{option.description}</p>
              <ul className="space-y-2">
                {option.features.map((feature) => (
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
              <Button className="w-full">{option.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Added info about booking and using passes */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="space-y-6">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">1. Purchase Your Pass</h3>
            <p className="text-muted-foreground">
              Select the pass that works for you (Day or Week) and complete your purchase online. You'll receive confirmation via email.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">2. Check In at Nur House</h3>
            <p className="text-muted-foreground">
              Visit us at 309 W Washington St, Suite 1050, Chicago, IL 60606. Present your confirmation email at the front desk to check in.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">3. Enjoy Your Workspace</h3>
            <p className="text-muted-foreground">
              Make yourself comfortable and enjoy all the amenities Nur House has to offer from 9am-10pm daily. High-speed WiFi, unlimited coffee & tea, networking opportunities, and more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

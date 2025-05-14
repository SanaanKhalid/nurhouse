import { PartnershipHero } from '@/components/partnershiphero';

export default function PartnershipPage() {
  return (
    <>
      <PartnershipHero />
      <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full bg-black p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-primary text-center mb-6">
            Partner with Us
          </h2>

          {/* The form with the Getform action */}
          <form 
            action="https://getform.io/f/alljonwa" 
            method="POST"
          >
            {/* Full Name */}
            <div className="mb-6">
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full p-3 rounded-md bg-black border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Full Name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md bg-black border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Phone Number (optional) */}
            <div className="mb-6">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number (optional)
              </label>
              <input
                type="text"
                id="phone-number"
                name="phone-number"
                className="w-full p-3 rounded-md bg-black border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Partnership Options */}
            <div className="mb-6">
              <label htmlFor="partnership-type" className="block text-sm font-medium text-gray-300 mb-2">
                How do you want to Partner?
              </label>
              <select
                id="partnership-type"
                name="partnership-type"
                className="w-full p-3 rounded-md bg-black border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              >
                <option value="">Select an option</option>
                <option value="invest">I want to Invest with Bana</option>
                <option value="team-member">I want to be a team member</option>
                <option value="partner">I want my startup to partner with Bana</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 rounded-md bg-black border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your message"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function RoadMap() {
  const steps = [
    { title: "Getting a Community Together", description: "We believe in the power of bringing people together. Through local events, shared spaces, and collaborative projects, we foster an inclusive environment where everyone feels valued and connected. Our goal is to build a strong, supportive community that thrives on creativity, dialogue, and shared purpose." },
    { title: "Building Product", description: "Our second focus is on creating innovative products that solve real problems. By combining creativity, collaboration, and cutting-edge technology, we strive to form a startup culture in Chicago to deliver high-quality products that make a lasting impact in the market." },
    { title: "Shipping", description: "From AI applications to custom software, we want to help ship out your product to as many eyes as possible." },
  ]

  return (
    <div className="min-h-screen w-full bg-black text-white p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Our Current RoadMap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-white">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 text-white">
                      {index + 1}
                    </div>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-1 bg-gray-700 rounded-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
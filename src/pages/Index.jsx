import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Rocket, Zap, Shield, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Revolutionize Your Workflow</h1>
        <p className="text-xl mb-8">Streamline your business processes with our cutting-edge SaaS solution</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Get Started <ArrowRight className="ml-2" size={20} />
        </Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Rocket size={40} />}
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency in your daily operations."
          />
          <FeatureCard
            icon={<Zap size={40} />}
            title="Powerful Analytics"
            description="Gain valuable insights with our advanced analytics dashboard."
          />
          <FeatureCard
            icon={<Shield size={40} />}
            title="Bank-Level Security"
            description="Rest easy knowing your data is protected by state-of-the-art security measures."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers and take your company to the next level.</p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Start Free Trial
        </Button>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="text-center">
    <CardHeader>
      <div className="mx-auto text-blue-600 mb-4">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

export default Index;
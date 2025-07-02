import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import HeroCarousel from "@/components/HeroCarousel";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    projectScope: "",
    timeline: "",
    budgetRange: ""
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submitQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }
      toast({
        title: "Quote Request Submitted",
        description: "We'll review your request and get back to you within 24-48 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        projectScope: "",
        timeline: "",
        budgetRange: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: (error as Error).message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[38rem] flex items-center justify-center overflow-hidden">
        <HeroCarousel heightClass="h-[38rem]" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Start Your Project
          </h1>
          <p className="font-inter text-xl md:text-2xl animate-fade-in">
            Get a Custom Quote Tailored to Your Needs
          </p>
        </div>
        {/* Animated Scroll Indicator */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
          style={{ bottom: '36px' }}
          aria-label="Scroll down"
        >
          <div
            className="scroll-mouse group w-8 h-14 md:w-9 md:h-16 border-2 border-white rounded-full flex items-start justify-center relative transition-transform duration-200 hover:scale-110"
            tabIndex={0}
            role="img"
            aria-label="Scroll down"
          >
            <span
              className="block bg-white rounded-full absolute left-1/2 -translate-x-1/2"
              style={{ width: '6px', height: '12px', top: '8px', animation: 'scroll-dot 1.4s cubic-bezier(0.45,0,0.55,1) infinite' }}
            />
          </div>
        </div>
        <style>{`
          @keyframes scroll-dot {
            0% { transform: translate(-50%, 0); opacity: 1; }
            40% { opacity: 1; }
            60% { transform: translate(-50%, 18px); opacity: 0.7; }
            100% { transform: translate(-50%, 0); opacity: 1; }
          }
          .scroll-mouse {
            background: rgba(255,255,255,0.04);
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
            outline: none;
          }
          .scroll-mouse:focus {
            box-shadow: 0 0 0 3px #fff6, 0 2px 8px 0 rgba(0,0,0,0.08);
          }
        `}</style>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-slm-green-700">
                    Project Details
                  </CardTitle>
                  <CardDescription className="font-inter text-gray-600">
                    Please provide as much detail as possible to help us prepare an accurate quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-inter font-medium text-slm-green-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="border-slm-green-300 focus:border-slm-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-inter font-medium text-slm-green-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="border-slm-green-300 focus:border-slm-green-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-inter font-medium text-slm-green-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="border-slm-green-300 focus:border-slm-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="font-inter font-medium text-slm-green-700">
                          Company/Organization
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="border-slm-green-300 focus:border-slm-green-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="font-inter font-medium text-slm-green-700">
                        Project Type *
                      </Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                        <SelectTrigger className="border-slm-green-300 focus:border-slm-green-500">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urban-design">Urban Design</SelectItem>
                          <SelectItem value="urban-planning">Urban Planning</SelectItem>
                          <SelectItem value="3d-rendering">3D Rendering</SelectItem>
                          <SelectItem value="landscape-architecture">Landscape Architecture</SelectItem>
                          <SelectItem value="integrated-solution">Integrated Solution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectScope" className="font-inter font-medium text-slm-green-700">
                        Project Scope & Description *
                      </Label>
                      <Textarea
                        id="projectScope"
                        value={formData.projectScope}
                        onChange={(e) => handleChange("projectScope", e.target.value)}
                        rows={4}
                        placeholder="Please describe your project in detail, including size, location, objectives, and any specific requirements..."
                        required
                        className="border-slm-green-300 focus:border-slm-green-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="font-inter font-medium text-slm-green-700">
                          Desired Timeline
                        </Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                          <SelectTrigger className="border-slm-green-300 focus:border-slm-green-500">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                            <SelectItem value="1-3-months">1-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-12-months">6-12 months</SelectItem>
                            <SelectItem value="12-plus-months">12+ months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budgetRange" className="font-inter font-medium text-slm-green-700">
                          Budget Range (Optional)
                        </Label>
                        <Select value={formData.budgetRange} onValueChange={(value) => handleChange("budgetRange", value)}>
                          <SelectTrigger className="border-slm-green-300 focus:border-slm-green-500">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-50k">Under $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                            <SelectItem value="500k-plus">$500,000+</SelectItem>
                            <SelectItem value="tbd">To be determined</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold py-3"
                    >
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* What Happens Next */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-slm-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="font-inter text-sm text-gray-600">
                      We'll review your request within 24 hours
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-slm-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="font-inter text-sm text-gray-600">
                      Schedule a consultation call to discuss details
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-slm-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="font-inter text-sm text-gray-600">
                      Receive a detailed proposal within 48 hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    Need Immediate Assistance?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-inter text-sm text-gray-600 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white transition-transform duration-200 hover:scale-110">
                        <img src="/Assets/email.png" alt="Email" className="w-5 h-5" />
                      </span>
                      quotes@slmplanning.com
                    </p>
                    <p className="font-inter text-sm text-gray-600 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white transition-transform duration-200 hover:scale-110">
                        <img src="/Assets/phone icone.png" alt="Phone" className="w-5 h-5" />
                      </span>
                      +1 (555) 123-4567
                    </p>
                    <p className="font-inter text-sm text-gray-600 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white transition-transform duration-200 hover:scale-110">
                        <img src="/Assets/time.png" alt="Office Hours" className="w-5 h-5" />
                      </span>
                      Monday - Friday, 9AM - 6PM EST
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    Our Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-inter text-sm text-gray-600">
                    <li>• Urban Design & Planning</li>
                    <li>• 3D Visualization & Rendering</li>
                    <li>• Landscape Architecture</li>
                    <li>• Environmental Planning</li>
                    <li>• Master Planning</li>
                    <li>• Community Engagement</li>
                    <li>• Professional Consultancy</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;

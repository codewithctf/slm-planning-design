import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import HeroCarousel from "@/components/HeroCarousel";
import { usePayloadApi } from "@/hooks/usePayloadApi";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();
  const { callApi, loading } = usePayloadApi();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payloadData = {
      fullName: formData.full_name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    const res = await callApi(
      "/api/contact-messages",
      "POST",
      payloadData
    );
    if (!res.error) {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        full_name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      toast({
        title: "Submission Failed",
        description: res.error || "There was an error submitting your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact | SLM Planning & Design</title>
        <meta name="description" content="Contact SLM Planning & Design for inquiries about urban planning, landscape architecture, or 3D rendering services." />
        <meta property="og:title" content="Contact | SLM Planning & Design" />
        <meta property="og:description" content="Contact SLM Planning & Design for inquiries about urban planning, landscape architecture, or 3D rendering services." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/slm-logo.png" />
        <meta property="og:url" content="https://slmplanning.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | SLM Planning & Design" />
        <meta name="twitter:description" content="Contact SLM Planning & Design for inquiries about urban planning, landscape architecture, or 3D rendering services." />
        <meta name="twitter:image" content="/assets/slm-logo.png" />
      </Helmet>
      <div className="min-h-screen bg-[#e4d9c9]">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative h-[38rem] flex items-center justify-center overflow-hidden">
          <HeroCarousel heightClass="h-[38rem]" />
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Let's Build the Future Together
            </h1>
            <p className="font-inter text-xl md:text-2xl animate-fade-in">
              Ready to start your next urban development project? We're here to help.
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

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-xl bg-[#fbf0de]">
                  <CardHeader>
                    <CardTitle className="font-playfair text-2xl text-black">
                      Send Us a Message
                    </CardTitle>
                    <CardDescription className="font-inter text-gray-700">
                      Have a question or want to discuss a potential project? We'd love to hear from you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-inter font-medium text-black">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.full_name}
                            onChange={(e) => handleChange("full_name", e.target.value)}
                            required
                            className="border-gray-400 focus:border-[#402920]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-inter font-medium text-black">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="border-gray-400 focus:border-[#402920]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="font-inter font-medium text-black">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleChange("subject", e.target.value)}
                          required
                          className="border-gray-400 focus:border-[#402920]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-inter font-medium text-black">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          rows={6}
                          placeholder="Tell us about your project or inquiry..."
                          required
                          className="border-gray-400 focus:border-[#402920]"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-[#402920] hover:bg-[#2d1a10] text-white font-semibold py-3 transition-colors duration-200"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Office Information */}
                <Card className="border-0 shadow-lg bg-[#fbf0de]">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-black">
                      Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fbf0de] transition-transform duration-200 hover:scale-110">
                          <img src="/assets/address-icon.png" alt="Address" className="w-6 h-6" loading="lazy" width="24" height="24" style={{maxWidth:'100%',height:'auto'}} />
                        </span>
                        <div>
                          <p className="font-inter font-semibold text-gray-800">Address</p>
                          <p className="font-inter text-gray-600">
                            Indianapolis<br />
                            Indiana<br />
                            USA
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fbf0de] transition-transform duration-200 hover:scale-110">
                          <img src="/assets/phone-icon.png" alt="Phone" className="w-6 h-6 object-contain object-center" loading="lazy" width="24" height="24" style={{maxWidth:'100%',height:'auto'}} />
                        </span>
                        <div>
                          <p className="font-inter font-semibold text-gray-800">Phone</p>
                          <p className="font-inter text-gray-600">(703) 947-7885</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fbf0de] transition-transform duration-200 hover:scale-110">
                          <img src="/assets/email.png" alt="Email" className="w-6 h-6" loading="lazy" width="24" height="24" style={{maxWidth:'100%',height:'auto'}} />
                        </span>
                        <div>
                          <p className="font-inter font-semibold text-gray-800">Email</p>
                          <p className="font-inter text-gray-600">sandy@slmplanning.com</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fbf0de] transition-transform duration-200 hover:scale-110">
                          <img src="/assets/clock-icon.png" alt="Office Hours" className="w-6 h-6" loading="lazy" width="24" height="24" style={{maxWidth:'100%',height:'auto'}} />
                        </span>
                        <div>
                          <p className="font-inter font-semibold text-gray-800">Office Hours</p>
                          <p className="font-inter text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 2:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Section */}
                <Card className="border-0 shadow-lg bg-[#fbf0de]">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-black">
                      Find Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 w-full rounded-lg overflow-hidden">
                      <iframe
                        title="SLM Planning Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.816279779751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2s123%20Urban%20Plaza%2C%20Green%20City!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="border-0 shadow-lg bg-[#fbf0de]">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-black">
                      Connect With Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:flex-row md:flex-nowrap md:gap-4 w-full">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="sm" className="border-gray-300 text-black hover:bg-[#e4d9c9] flex items-center justify-center gap-2 w-full sm:w-auto">
                          <img src="/assets/facebook-icon.png" alt="Facebook" className="w-5 h-5 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] object-contain shrink-0" loading="lazy" width="20" height="20" /> Facebook
                        </Button>
                      </a>
                      <a href="https://x.com/slm_planning?s=11" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="sm" className="border-gray-300 text-black hover:bg-[#e4d9c9] flex items-center gap-2 w-full sm:w-auto">
                          <img src="/assets/x-icon.png" alt="X" className="w-5 h-5" loading="lazy" width="20" height="20" style={{maxWidth:'100%',height:'auto'}} /> X
                        </Button>
                      </a>
                      <a href="https://www.linkedin.com/company/slmplanning/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="sm" className="border-gray-300 text-black hover:bg-[#e4d9c9] flex items-center gap-2 w-full sm:w-auto">
                          <img src="/assets/linkedIn-icon.png" alt="LinkedIn" className="w-5 h-5" loading="lazy" width="20" height="20" style={{maxWidth:'100%',height:'auto'}} /> LinkedIn
                        </Button>
                      </a>
                      <a href="https://www.instagram.com/slm_planning?igsh=MWt4ZWppd2g3Mm45Mg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="sm" className="border-gray-300 text-black hover:bg-[#e4d9c9] flex items-center gap-2 w-full sm:w-auto">
                          <img src="/assets/instagram-icon.jpg" alt="Instagram" className="w-5 h-5" loading="lazy" width="20" height="20" style={{maxWidth:'100%',height:'auto'}} /> Instagram
                        </Button>
                      </a>
                      <a href="https://www.tiktok.com/@slm.planning?_t=ZP-8xktNGfhS50&_r=1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="sm" className="border-gray-300 text-black  hover:bg-[#e4d9c9] flex items-center gap-2 w-full sm:w-auto">
                          <img src="/assets/tiktok-icon.png" alt="TikTok" className="w-5 h-5" loading="lazy" width="20" height="20" style={{maxWidth:'100%',height:'auto'}} /> TikTok
                        </Button>
                      </a>
                    </div>
                    <p className="font-inter text-gray-600 text-sm mt-4">
                      Follow us for updates on our latest projects and industry insights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#472c1b]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="font-inter text-xl text-[#f2ece0] mb-8">
              Get a custom quote and discover how we can help bring your vision to life.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-[#402920] hover:bg-[#fbf0de] font-semibold px-8 py-3"
            >
              <a href="/quote">Get Your Quote</a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;

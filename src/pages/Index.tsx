import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Mail, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">FCAT Recruitment Portal</h1>
                <p className="text-sm text-muted-foreground">Federal College of Agricultural Technology</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Shield className="h-3 w-3" />
                <span>Secure Application</span>
              </Badge>
              <Button asChild variant="outline" size="sm">
                <a href="/admin">Admin Portal</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team at FCAT
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Submit your application for exciting career opportunities at the Federal College of Agricultural Technology. 
              We're looking for dedicated professionals to join our mission of agricultural education excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                <FileText className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-medium">Easy Application</span>
              </div>
              <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                <Mail className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium">Instant Confirmation</span>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="/jobs">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose FCAT?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a leading institution in agricultural education with excellent career development opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Professional Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Continuous learning opportunities and career advancement in agricultural technology and education.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  <span>Competitive Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive benefits package including health insurance, retirement plans, and professional development funds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span>Impact & Innovation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Be part of pioneering agricultural research and education that shapes the future of farming in Nigeria.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Federal College of Agricultural Technology</h4>
            <p className="text-gray-400">Excellence in Agricultural Education</p>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 FCAT. All rights reserved. | Recruitment Portal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

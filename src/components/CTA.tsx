import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyber-blue/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyber-teal/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyber-green/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-cyber-blue text-cyber-blue">
            Ready to Deploy
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber-blue via-cyber-teal to-cyber-green bg-clip-text text-transparent">
              Secure Your Infrastructure
            </span>
            <br />
            <span className="text-foreground">With AI That Never Sleeps</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Join the next generation of cybersecurity. Deploy SecureAI Defense Matrix today and experience 
            autonomous threat detection with federated learning that protects your data while learning from global patterns.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Shield,
                title: "99.9% Detection Rate",
                description: "AI-powered anomaly detection with continuous learning"
              },
              {
                icon: Zap,
                title: "< 5ms Response",
                description: "Real-time threat isolation and automated containment"
              },
              {
                icon: Lock,
                title: "Zero Data Exposure",
                description: "Federated learning keeps your sensitive data local"
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-card/20 backdrop-blur-sm border border-border/20 hover:bg-card/30 transition-all duration-300">
                  <div className="p-3 rounded-full bg-cyber-blue/10 mb-4">
                    <Icon className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cyber" size="lg" className="text-lg px-10 py-4 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button variant="neural" size="lg" className="text-lg px-10 py-4">
              Schedule Demo
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <span>✓ No credit card required</span>
            <span className="mx-3">•</span>
            <span>✓ 30-day free trial</span>
            <span className="mx-3">•</span>
            <span>✓ Enterprise support included</span>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by security teams at leading organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Enterprise Corp", "TechGiant Inc", "SecureBank Ltd", "CloudFirst Co", "DataShield Pro"].map((company, index) => (
                <div key={index} className="text-sm font-medium text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Shield, Brain, Network, Eye } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-darker">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Matrix rain effect */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-cyber-green text-xs matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j} className="opacity-50">
                {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 mb-6">
            <Shield className="w-4 h-4 text-cyber-blue" />
            <span className="text-cyber-blue text-sm font-medium">AI-Powered Cybersecurity</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-blue via-cyber-teal to-cyber-green bg-clip-text text-transparent animate-pulse">
            SecureAI
            <span className="block text-4xl md:text-5xl mt-2">Defense Matrix</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Self-learning AI agent that monitors cloud infrastructure in real-time, detects anomalies using behavioral patterns, and auto-isolates compromised nodes with federated learning.
          </p>
        </div>

        {/* Key features icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { icon: Brain, label: "Federated Learning", color: "cyber-blue" },
            { icon: Eye, label: "Anomaly Detection", color: "cyber-teal" },
            { icon: Network, label: "Auto-Isolation", color: "cyber-green" },
            { icon: Shield, label: "Privacy Protection", color: "cyber-purple" }
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex flex-col items-center gap-2 group">
              <div className={`p-4 rounded-full bg-${color}/10 border border-${color}/20 group-hover:bg-${color}/20 transition-all duration-300 float`}>
                <Icon className={`w-6 h-6 text-${color}`} />
              </div>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cyber" size="lg" className="text-lg px-8 py-4">
            Launch Dashboard
          </Button>
          <Button variant="neural" size="lg" className="text-lg px-8 py-4">
            View Architecture
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
          {[
            { value: "99.9%", label: "Threat Detection" },
            { value: "<5ms", label: "Response Time" },
            { value: "100%", label: "Privacy Protected" },
            { value: "24/7", label: "Autonomous" }
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-cyber-blue mb-1">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
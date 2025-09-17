import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Network, 
  Eye, 
  Zap, 
  Lock, 
  BarChart3, 
  Cpu,
  GitBranch,
  Database
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Federated Learning Engine",
    description: "Trains local models across distributed cloud nodes and aggregates updates securely without exposing sensitive data.",
    technologies: ["PyTorch", "TensorFlow Federated", "Distributed Computing"],
    color: "cyber-blue"
  },
  {
    icon: Eye,
    title: "Anomaly Detection Module",
    description: "Uses unsupervised learning to identify behavioral deviations in system logs, access patterns, and network traffic.",
    technologies: ["Scikit-learn", "Deep Learning", "Pattern Recognition"],
    color: "cyber-teal"
  },
  {
    icon: Shield,
    title: "Auto-Isolation Protocol",
    description: "Automatically isolates compromised nodes to prevent lateral movement of threats across your infrastructure.",
    technologies: ["Kubernetes", "Docker", "Network Segmentation"],
    color: "cyber-green"
  },
  {
    icon: BarChart3,
    title: "Real-time Dashboard",
    description: "Provides comprehensive visualization of threat levels, node health, and model performance metrics.",
    technologies: ["Grafana", "Prometheus", "OpenTelemetry"],
    color: "cyber-purple"
  },
  {
    icon: Lock,
    title: "Privacy-First Architecture",
    description: "Ensures data privacy through federated learning while maintaining high-performance threat detection.",
    technologies: ["Zero-Trust", "Encryption", "Data Anonymization"],
    color: "cyber-blue"
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Sub-5ms response times for threat detection and automated response across distributed systems.",
    technologies: ["Stream Processing", "Edge Computing", "Low Latency"],
    color: "cyber-teal"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyber-blue text-cyber-blue">
            Core Capabilities
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Advanced AI Security Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge cybersecurity powered by federated learning, real-time monitoring, 
            and autonomous threat response capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyber-blue/10 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <CardHeader>
                  <div className={`inline-flex w-12 h-12 rounded-lg bg-${feature.color}/10 items-center justify-center mb-4 group-hover:bg-${feature.color}/20 transition-colors duration-300`}>
                    <Icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Architecture Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-cyber-green text-cyber-green">
              System Architecture
            </Badge>
            <h3 className="text-3xl font-bold mb-4">Distributed Intelligence Network</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our federated architecture ensures privacy while maintaining peak performance across hybrid and multi-cloud environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {[
              {
                icon: Database,
                title: "Edge Nodes",
                description: "Local processing units that analyze traffic patterns and behavioral data in real-time.",
                position: "left"
              },
              {
                icon: GitBranch,
                title: "Federated Coordinator",
                description: "Central intelligence that aggregates learning without accessing raw data.",
                position: "center"
              },
              {
                icon: Cpu,
                title: "Security Engine",
                description: "AI-powered decision making for threat classification and response protocols.",
                position: "right"
              }
            ].map((component, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex w-16 h-16 rounded-full bg-gradient-cyber items-center justify-center mb-6 ${component.position === 'center' ? 'pulse-glow' : ''}`}>
                  <component.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{component.title}</h4>
                <p className="text-muted-foreground">{component.description}</p>
                {index < 2 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-px bg-gradient-to-r from-cyber-blue to-cyber-teal"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
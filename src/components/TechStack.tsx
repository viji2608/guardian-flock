import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const techCategories = [
  {
    category: "AI & Machine Learning",
    technologies: [
      { name: "PyTorch", description: "Deep learning framework" },
      { name: "TensorFlow Federated", description: "Federated learning platform" },
      { name: "Scikit-learn", description: "Machine learning library" },
      { name: "OpenAI GPT", description: "Natural language processing" }
    ],
    color: "cyber-blue"
  },
  {
    category: "Infrastructure & DevOps",
    technologies: [
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "Docker", description: "Containerization platform" },
      { name: "Terraform", description: "Infrastructure as code" },
      { name: "Ansible", description: "Configuration management" }
    ],
    color: "cyber-teal"
  },
  {
    category: "Monitoring & Observability",
    technologies: [
      { name: "Prometheus", description: "Metrics collection" },
      { name: "Grafana", description: "Data visualization" },
      { name: "OpenTelemetry", description: "Distributed tracing" },
      { name: "ELK Stack", description: "Log management" }
    ],
    color: "cyber-green"
  },
  {
    category: "Security & Networking",
    technologies: [
      { name: "Zero Trust Architecture", description: "Security model" },
      { name: "mTLS", description: "Mutual authentication" },
      { name: "Istio", description: "Service mesh" },
      { name: "Falco", description: "Runtime security" }
    ],
    color: "cyber-purple"
  }
];

export const TechStack = () => {
  return (
    <section className="py-20 bg-cyber-darker/30 relative">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyber-blue text-cyber-blue">
            Technology Stack
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Built with Enterprise-Grade Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages the most advanced tools and frameworks to deliver 
            unparalleled security and performance across distributed environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:scale-102 transition-all duration-300 bg-card/30 backdrop-blur-sm border-border/30"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full bg-${category.color}`}></div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex flex-col p-3 rounded-lg bg-background/20 hover:bg-background/30 transition-colors duration-200"
                    >
                      <span className="font-medium text-foreground">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { metric: "99.99%", label: "Uptime SLA", icon: "🛡️" },
            { metric: "< 5ms", label: "Detection Latency", icon: "⚡" },
            { metric: "10M+", label: "Events/Second", icon: "📊" },
            { metric: "Zero", label: "Data Breaches", icon: "🔒" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-cyber-blue group-hover:text-cyber-teal transition-colors duration-300 mb-1">
                {item.metric}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Enterprise Compliance & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "FedRAMP", "PCI DSS"].map((cert) => (
              <Badge 
                key={cert} 
                variant="outline" 
                className="px-4 py-2 text-sm border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 transition-colors duration-300"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
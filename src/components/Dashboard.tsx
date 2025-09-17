import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  AlertTriangle, 
  Shield, 
  TrendingUp, 
  Server, 
  Zap,
  Eye,
  Brain
} from "lucide-react";

const threatData = [
  { name: "DDoS Attempts", value: 23, severity: "high", trend: "+12%" },
  { name: "Malware Detection", value: 7, severity: "medium", trend: "-5%" },
  { name: "Unauthorized Access", value: 3, severity: "low", trend: "-15%" },
  { name: "Data Exfiltration", value: 0, severity: "none", trend: "0%" }
];

const nodeStatus = [
  { id: "node-001", status: "secure", load: 67, location: "US-East" },
  { id: "node-002", status: "monitoring", load: 84, location: "EU-West" },
  { id: "node-003", status: "isolated", load: 23, location: "Asia-Pacific" },
  { id: "node-004", status: "secure", load: 91, location: "US-West" }
];

export const Dashboard = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyber-green text-cyber-green">
            Live Dashboard Preview
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Real-time Security Operations Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your entire infrastructure with AI-powered insights, real-time threat detection, 
            and automated response capabilities.
          </p>
        </div>

        <div className="bg-cyber-darker/50 rounded-2xl border border-cyber-blue/20 p-6 backdrop-blur-sm">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse"></div>
                <span className="font-semibold">SecureAI Dashboard</span>
              </div>
              <Badge variant="outline" className="border-cyber-green text-cyber-green">
                Status: Active
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { 
                title: "Threat Level", 
                value: "LOW", 
                icon: Shield, 
                color: "cyber-green",
                change: "-15%" 
              },
              { 
                title: "Active Nodes", 
                value: "1,247", 
                icon: Server, 
                color: "cyber-blue",
                change: "+3%" 
              },
              { 
                title: "Detection Rate", 
                value: "99.9%", 
                icon: Eye, 
                color: "cyber-teal",
                change: "+0.1%" 
              },
              { 
                title: "Response Time", 
                value: "3.2ms", 
                icon: Zap, 
                color: "cyber-purple",
                change: "-0.8ms" 
              }
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="bg-card/30 border-border/30">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-5 h-5 text-${metric.color}`} />
                      <span className={`text-xs px-2 py-1 rounded-full bg-${metric.color}/10 text-${metric.color}`}>
                        {metric.change}
                      </span>
                    </div>
                    <div className={`text-2xl font-bold text-${metric.color} mb-1`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.title}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Threat Detection */}
            <Card className="bg-card/30 border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-cyber-blue" />
                  Threat Detection (24h)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {threatData.map((threat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/20">
                      <div>
                        <div className="font-medium">{threat.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {threat.value} incidents detected
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm ${
                          threat.severity === 'high' ? 'text-red-400' :
                          threat.severity === 'medium' ? 'text-yellow-400' :
                          threat.severity === 'low' ? 'text-orange-400' :
                          'text-cyber-green'
                        }`}>
                          {threat.trend}
                        </span>
                        <Badge 
                          variant={threat.severity === 'high' ? 'destructive' : 'outline'}
                          className={`text-xs ${
                            threat.severity === 'high' ? '' :
                            threat.severity === 'medium' ? 'border-yellow-400 text-yellow-400' :
                            threat.severity === 'low' ? 'border-orange-400 text-orange-400' :
                            'border-cyber-green text-cyber-green'
                          }`}
                        >
                          {threat.severity.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Node Status */}
            <Card className="bg-card/30 border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-cyber-teal" />
                  Node Status & Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nodeStatus.map((node, index) => (
                    <div key={index} className="p-3 rounded-lg bg-background/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            node.status === 'secure' ? 'bg-cyber-green' :
                            node.status === 'monitoring' ? 'bg-yellow-400' :
                            'bg-red-400'
                          }`}></div>
                          <span className="font-medium">{node.id}</span>
                          <Badge variant="outline" className="text-xs">
                            {node.location}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {node.load}% load
                        </span>
                      </div>
                      <Progress 
                        value={node.load} 
                        className="h-2"
                      />
                      <div className="mt-2 text-xs text-muted-foreground">
                        Status: <span className={`capitalize ${
                          node.status === 'secure' ? 'text-cyber-green' :
                          node.status === 'monitoring' ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>{node.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Model Performance */}
          <Card className="mt-8 bg-card/30 border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyber-purple" />
                Federated Learning Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-blue mb-2">98.7%</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy</div>
                  <div className="text-xs text-cyber-green mt-1">+0.3% improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-teal mb-2">1,247</div>
                  <div className="text-sm text-muted-foreground">Participating Nodes</div>
                  <div className="text-xs text-cyber-green mt-1">+15 nodes this hour</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-green mb-2">156</div>
                  <div className="text-sm text-muted-foreground">Training Rounds</div>
                  <div className="text-xs text-cyber-blue mt-1">Round 157 in progress</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
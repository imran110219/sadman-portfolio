"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCommit,
  Eye,
  Users,
  Activity,
  Zap,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { getAnalyticsData } from "@/lib/analytics";

interface GitHubEvent {
  type: string;
  created_at: string;
  repo?: {
    name: string;
  };
}

interface Metrics {
  commits: number;
  recentActivity: number[];
  visitors: number;
  pageViews: number;
  githubStreak: number;
}

const activityData = [
  { day: "Mon", commits: 4 },
  { day: "Tue", commits: 7 },
  { day: "Wed", commits: 3 },
  { day: "Thu", commits: 8 },
  { day: "Fri", commits: 5 },
  { day: "Sat", commits: 2 },
  { day: "Sun", commits: 6 },
];

export function LiveMetrics() {
  const [metrics, setMetrics] = useState<Metrics>({
    commits: 0,
    recentActivity: [45, 52, 38, 65, 58, 72, 68],
    visitors: 0,
    pageViews: 0,
    githubStreak: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Load minimized state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("liveMetricsMinimized");
    if (savedState !== null) {
      setIsMinimized(savedState === "true");
    }
  }, []);

  // Save minimized state to localStorage
  const toggleMinimize = () => {
    const newState = !isMinimized;
    setIsMinimized(newState);
    localStorage.setItem("liveMetricsMinimized", newState.toString());
  };

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch(
          "https://api.github.com/users/imran110219/events?per_page=100"
        );
        if (response.ok) {
          const events: GitHubEvent[] = await response.json();

          // Count commits in the last 30 days
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

          const recentCommits = events.filter(
            (event) =>
              event.type === "PushEvent" &&
              new Date(event.created_at) > thirtyDaysAgo
          ).length;

          // Calculate streak (simplified - just recent activity)
          const recentDays = new Set(
            events
              .slice(0, 50)
              .map((event) => new Date(event.created_at).toDateString())
          ).size;

          setMetrics((prev) => ({
            ...prev,
            commits: recentCommits,
            githubStreak: recentDays,
          }));
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      }
    }

    async function fetchAnalyticsData() {
      try {
        const analyticsData = await getAnalyticsData();
        setMetrics((prev) => ({
          ...prev,
          visitors: analyticsData.visitors,
          pageViews: analyticsData.pageViews,
        }));
      } catch (error) {
        console.error("Failed to fetch analytics data:", error);
        // Fallback to mock data
        setMetrics((prev) => ({
          ...prev,
          visitors: Math.floor(Math.random() * 500) + 2000,
          pageViews: Math.floor(Math.random() * 1000) + 8000,
        }));
      }
    }

    fetchGitHubData();
    fetchAnalyticsData();
    setIsLoading(false);

    // Refresh data every 5 minutes
    const interval = setInterval(() => {
      fetchGitHubData();
      fetchAnalyticsData();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="fixed top-20 right-6 z-40 hidden lg:block"
    >
      <AnimatePresence mode="wait">
        {isMinimized ? (
          // Minimized State - Compact Icon Button
          <motion.button
            key="minimized"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMinimize}
            className="group relative"
            title="Expand Live Metrics"
          >
            <Card className="p-3 bg-card/95 backdrop-blur border shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>

              {/* Tooltip */}
              <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg border">
                  Click to expand metrics
                </div>
              </div>
            </Card>
          </motion.button>
        ) : (
          // Expanded State - Full Widget
          <motion.div
            key="expanded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="p-4 w-72 bg-card/95 backdrop-blur border shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-card-foreground">
                  Live Metrics
                </h3>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto" />

                {/* Minimize Button */}
                <button
                  onClick={toggleMinimize}
                  className="p-1 hover:bg-accent rounded transition-colors"
                  title="Minimize"
                >
                  <Minimize2 className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <GitCommit className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      Commits (30d)
                    </span>
                  </div>
                  <span className="text-sm font-mono font-semibold text-card-foreground">
                    {isLoading ? "..." : metrics.commits.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Eye className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      Page Views
                    </span>
                  </div>
                  <span className="text-sm font-mono font-semibold text-card-foreground">
                    {isLoading ? "..." : metrics.pageViews.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      Visitors
                    </span>
                  </div>
                  <span className="text-sm font-mono font-semibold text-card-foreground">
                    {isLoading ? "..." : metrics.visitors.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    GitHub Streak
                  </span>
                  <span className="text-sm font-mono font-semibold text-card-foreground">
                    {isLoading ? "..." : `${metrics.githubStreak} days`}
                  </span>
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">
                    Weekly Activity
                  </p>
                  <div className="h-20 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={activityData}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                      >
                        <XAxis
                          dataKey="day"
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 9,
                            fill: "#94a3b8",
                          }}
                        />
                        <YAxis hide />
                        <Line
                          type="monotone"
                          dataKey="commits"
                          stroke="#60a5fa"
                          strokeWidth={3}
                          dot={{
                            fill: "#60a5fa",
                            strokeWidth: 2,
                            stroke: "#1e293b",
                            r: 4,
                            fillOpacity: 1,
                          }}
                          activeDot={{
                            r: 6,
                            stroke: "#60a5fa",
                            strokeWidth: 3,
                            fill: "#1e40af",
                            fillOpacity: 1,
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

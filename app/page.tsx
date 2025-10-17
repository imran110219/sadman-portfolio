"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Code2, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { DownloadCVButton } from "@/components/download-cv-button";
import { ProfileAvatar } from "@/components/profile-avatar";
import { LiveMetrics } from "@/components/live-metrics";
import { FloatingContactButton } from "@/components/floating-contact-button";
import { RecruiterView } from "@/components/recruiter-view";
import { DeveloperView } from "@/components/developer-view";
import { ClientView } from "@/components/client-view";
import { Footer } from "@/components/footer";
import { trackViewChange } from "@/lib/analytics";
import { getProfile } from "@/lib/data";

type ViewType = "recruiter" | "developer" | "client" | "all" | null;

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>(null);
  const profile = getProfile();

  const handleViewChange = (view: ViewType) => {
    setActiveView(view);
    if (view) {
      trackViewChange(view);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation
        activeView={activeView}
        onHomeClick={() => handleViewChange(null)}
      />

      {/* Live Metrics Widget */}
      <LiveMetrics />

      {/* Floating Contact Button */}
      <FloatingContactButton />

      {/* Hero Section */}
      <AnimatePresence mode="wait">
        {!activeView ? (
          <motion.main
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              {/* Profile Avatar */}
              <div className="flex justify-center mb-8">
                <ProfileAvatar size={150} />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance">
                {profile.title}
              </p>
              <p className="text-lg md:text-xl text-primary font-semibold text-balance mb-2">
                {profile.tagline}
              </p>
              {profile.valueProposition && (
                <p className="text-base md:text-lg text-muted-foreground text-balance mb-6 max-w-2xl mx-auto">
                  {profile.valueProposition}
                </p>
              )}
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <DownloadCVButton variant="default" size="lg" />
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleViewChange("all")}
                  className="gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  Explore All
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-4xl"
            >
              <p className="text-center text-muted-foreground mb-8 text-lg">
                Choose your path or explore everything:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className="p-8 cursor-pointer hover:border-primary hover:shadow-lg transition-all bg-card group"
                    onClick={() => handleViewChange("recruiter")}
                  >
                    <Target className="h-12 w-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-2">I'm a Recruiter</h3>
                    <p className="text-muted-foreground mb-3">
                      View skills, experience timeline, and download resume
                    </p>
                    <p className="text-xs text-primary font-semibold">
                      → Skills • Experience • Achievements
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className="p-8 cursor-pointer hover:border-accent hover:shadow-lg transition-all bg-card group"
                    onClick={() => handleViewChange("developer")}
                  >
                    <Code2 className="h-12 w-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-2">I'm a Developer</h3>
                    <p className="text-muted-foreground mb-3">
                      Explore projects, tech stack, and code examples
                    </p>
                    <p className="text-xs text-accent font-semibold">
                      → Projects • Tech Stack • Architecture
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className="p-8 cursor-pointer hover:border-chart-3 hover:shadow-lg transition-all bg-card group"
                    onClick={() => handleViewChange("client")}
                  >
                    <Rocket className="h-12 w-12 mb-4 text-chart-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-2">
                      I'm a Client/Founder
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      See products, services, and case studies
                    </p>
                    <p className="text-xs text-chart-3 font-semibold">
                      → Services • Case Studies • Process
                    </p>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </motion.main>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container mx-auto px-4 py-20 min-h-screen"
          >
            <div className="pt-16">
              <Button
                variant="ghost"
                onClick={() => handleViewChange(null)}
                className="mb-8"
              >
                ← Back to Home
              </Button>

              {activeView === "recruiter" && <RecruiterView />}
              {activeView === "developer" && <DeveloperView />}
              {activeView === "client" && <ClientView />}
              {activeView === "all" && (
                <div className="space-y-16">
                  <section id="recruiter-section">
                    <h2 className="text-3xl font-bold mb-8">
                      Professional Overview
                    </h2>
                    <RecruiterView />
                  </section>
                  <section id="developer-section">
                    <h2 className="text-3xl font-bold mb-8">
                      Projects & Technical Work
                    </h2>
                    <DeveloperView />
                  </section>
                  <section id="client-section">
                    <h2 className="text-3xl font-bold mb-8">
                      Services & Case Studies
                    </h2>
                    <ClientView />
                  </section>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

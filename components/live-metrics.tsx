"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

const data = [{ value: 45 }, { value: 52 }, { value: 38 }, { value: 65 }, { value: 58 }, { value: 72 }, { value: 68 }]

export function LiveMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="fixed top-20 right-6 z-40 hidden lg:block"
    >
      <Card className="p-4 w-64 bg-card/95 backdrop-blur">
        <h3 className="text-sm font-semibold mb-3 text-card-foreground">Live Metrics</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Commits</span>
            <span className="text-sm font-mono font-semibold text-card-foreground">1,247</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Blog Views</span>
            <span className="text-sm font-mono font-semibold text-card-foreground">8,432</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Visitors</span>
            <span className="text-sm font-mono font-semibold text-card-foreground">2,156</span>
          </div>
          <div className="h-16 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={2} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

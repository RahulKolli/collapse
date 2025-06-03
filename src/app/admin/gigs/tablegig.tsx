"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { gigType: "design", count: 120, fill: "var(--color-chrome)" },
  { gigType: "development", count: 90, fill: "var(--color-safari)" },
  { gigType: "writing", count: 70, fill: "var(--color-firefox)" },
  { gigType: "marketing", count: 45, fill: "var(--color-edge)" },
  { gigType: "other", count: 30, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "oklch(0.6731 0.1624 144.2083)",
  },
  safari: {
    label: "Safari",
    color: "oklch(0.5752 0.1446 144.1813)",
  },
  firefox: {
    label: "Firefox",
    color: "oklch(0.5234 0.1347 144.1672)",
  },
  edge: {
    label: "Edge",
    color: "oklch(0.4254 0.1159 144.3078)",
  },
  other: {
    label: "Other",
    color: "oklch(0.2157 0.0453 145.7256",
  },

} satisfies ChartConfig

export function Componentgig() {
  const totalGigs = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <Card className="flex flex-col bg-[--color-card] text-[--color-foreground] border border-[--color-border]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-[--color-primary]">Gig Monitor</CardTitle>
        <CardDescription className="text-[--color-muted-foreground]">
          Overview for 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="gigType"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalGigs.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          Total Gigs
                        </tspan>

                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none text-[--color-primary]">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-[--color-muted-foreground]">
          Showing total gigs monitored for the year
        </div>
      </CardFooter>
    </Card>
  )
}

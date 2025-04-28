"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart, Tooltip, Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts"
import Layout from "@/components/layout/layout"
import { Box, Card, Stat } from "@chakra-ui/react"
import { LuGlobe } from "react-icons/lu"

const Dashboard = () => {
  // First chart for AreaChart
  const areaChart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "orange.solid" },
    ],
  })

  // Second chart for BarChart
  const barChart = useChart({
    data: [
      { allocation: 60, type: "Stock", color: "red.solid" },
      { allocation: 45, type: "Crypto", color: "blue.solid" },
      { allocation: 12, type: "ETF", color: "green.solid" },
      { allocation: 4, type: "Cash", color: "yellow.solid" },
    ],
  })

  const smallAreaChart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ name: "value", color: "teal.solid" }],
  })
  const smallBarChart = useChart({
    data: [
      { value: 10, fill: "teal.solid" },
      { value: 16, fill: "green.solid" },
      { value: 19, fill: "teal.solid" },
      { value: 15, fill: "green.solid" },
      { value: 12, fill: "teal.solid" },
      { value: 15, fill: "teal.solid" },
      { value: 10, fill: "teal.solid" },
      { value: 18, fill: "teal.solid" },
    ],
  })

  const curvAreaChart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ name: "value", color: "teal.solid" }],
  })

  const SparkLine = () => {
    const chart = useChart({
      data: [
        { value: 10 },
        { value: 16 },
        { value: 19 },
        { value: 15 },
        { value: 12 },
        { value: 15 },
      ],
      series: [{ color: "teal.solid" }],
    })

    return (
      <Chart.Root height="10" chart={chart}>
        <AreaChart
          data={chart.data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          {chart.series.map((item) => (
            <Area
              key={item.name}
              isAnimationActive={false}
              dataKey={chart.key(item.name)}
              fill={chart.color(item.color)}
              fillOpacity={0.2}
              stroke={chart.color(item.color)}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </Chart.Root>
    )
  }

  return (
    <Layout>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {/* Support Tickets Overview */}
        <Card.Root className="p-4 rounded-sm transition">
          <Card.Header>
            <h2 className="text-gray-600 text-sm">Support Tickets Overview</h2>
          </Card.Header>
          <Card.Body className="mt-4">
            <Chart.Root width="28" height="12" chart={smallAreaChart}>
              <AreaChart data={smallAreaChart.data}>
                {smallAreaChart.series.map((item) => (
                  <Area
                    key={item.name}
                    isAnimationActive={false}
                    dataKey={smallAreaChart.key(item.name)}
                    fill={smallAreaChart.color(item.color)}
                    fillOpacity={0.2}
                    stroke={smallAreaChart.color(item.color)}
                    strokeWidth={2}
                  />
                ))}
              </AreaChart>
            </Chart.Root>
          </Card.Body>
        </Card.Root>

        {/* Resolved Tickets Status */}
        <Card.Root className="p-4 rounded-sm transition">
          <Card.Header>
            <h2 className="text-gray-600 text-sm">Resolved Tickets Status</h2>
          </Card.Header>
          <Card.Body className="mt-4">
            <Chart.Root width="28" height="12" chart={smallBarChart}>
              <BarChart data={smallBarChart.data} barSize={8}>
                <Bar
                  isAnimationActive={false}
                  dataKey={smallBarChart.key("value")}
                  fill={smallBarChart.color("teal.solid")}
                >
                  {smallBarChart.data.map((item) => (
                    <Cell key={item.value} fill={smallBarChart.color(item.fill)} />
                  ))}
                </Bar>
              </BarChart>
            </Chart.Root>
          </Card.Body>
        </Card.Root>

        {/* Customer Satisfaction Trend */}
        <Card.Root className="p-4 rounded-sm transition">
          <Card.Header>
            <h2 className="text-gray-600 text-sm">Customer Satisfaction Trend</h2>
          </Card.Header>
          <Card.Body className="mt-4">
            <Chart.Root width="28" height="12" chart={curvAreaChart}>
              <AreaChart accessibilityLayer data={curvAreaChart.data}>
                {curvAreaChart.series.map((item) => (
                  <defs key={item.name}>
                    <Chart.Gradient
                      id={`${item.name}-gradient`}
                      stops={[
                        { offset: "0%", color: item.color, opacity: 1 },
                        { offset: "100%", color: item.color, opacity: 0.01 },
                      ]}
                    />
                  </defs>
                ))}

                {curvAreaChart.series.map((item) => (
                  <Area
                    key={item.name}
                    type="natural"
                    isAnimationActive={false}
                    dataKey={curvAreaChart.key(item.name)}
                    fill={`url(#${item.name}-gradient)`}
                    stroke={curvAreaChart.color(item.color)}
                    strokeWidth={2}
                  />
                ))}
              </AreaChart>
            </Chart.Root>
          </Card.Body>
        </Card.Root>

        {/* Unique Visitors */}
        <Card.Root className="p-4 rounded-sm transition">
          <Card.Body className="mt-4">
            <Stat.Root>
              <Stat.Label className="flex items-center gap-2">
                <LuGlobe /> Unique visitors
              </Stat.Label>
              <Stat.ValueText className="text-2xl font-bold">192.1k</Stat.ValueText>
            </Stat.Root>
            <div className="mt-4">
              <SparkLine />
            </div>
          </Card.Body>
        </Card.Root>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Area Chart */}
        <Chart.Root maxH="sm" chart={areaChart}>
          <AreaChart
            accessibilityLayer
            data={areaChart.data}
            margin={{ bottom: 24, left: 24 }}
          >
            <XAxis
              dataKey={areaChart.key("month")}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              stroke={areaChart.color("border")}
            />
            <YAxis stroke={areaChart.color("border")} />
            <Tooltip
              cursor={false}
              animationDuration={100}
              content={<Chart.Tooltip />}
            />
            {areaChart.series.map((item) => (
              <Area
                type="natural"
                key={item.name}
                isAnimationActive={false}
                dataKey={areaChart.key(item.name)}
                fill={areaChart.color(item.color)}
                fillOpacity={0.2}
                stroke={areaChart.color(item.color)}
                stackId="a"
              />
            ))}
          </AreaChart>
        </Chart.Root>

        {/* Bar Chart */}
        <Chart.Root maxH="sm" chart={barChart}>
          <BarChart data={barChart.data}>
            <CartesianGrid stroke={barChart.color("border.muted")} vertical={false} />
            <XAxis axisLine={false} tickLine={false} dataKey={barChart.key("type")} />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Bar isAnimationActive={false} dataKey={barChart.key("allocation")}>
              {barChart.data.map((item) => (
                <Cell key={item.type} fill={barChart.color(item.color)} />
              ))}
            </Bar>
          </BarChart>
        </Chart.Root>
      </div>

    </Layout>
  )
}

export default Dashboard;







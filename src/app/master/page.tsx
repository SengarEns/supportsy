"use client";

import { BarSegment, Chart, useChart } from "@chakra-ui/charts";
import {
  Area,
  AreaChart,
  Tooltip,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Label,
  LineChart,
  Line,
} from "recharts";
import Layout from "@/components/layout/layout";
import {
  Box,
  Card,
  ColorSwatch,
  HStack,
  Stat,
  SimpleGrid,
  Heading,
  Text,

} from "@chakra-ui/react";
import { LuGlobe } from "react-icons/lu";

// Define a consistent color scheme for customer support
const themeColors = {
  primary: "blue.500",
  secondary: "gray.600",
  success: "green.500",
  warning: "yellow.500",
  background: "gray.50",
};

const Dashboard = () => {
  // Updated AreaChart data for ticket volume by month
  const areaChart = useChart({
    data: [
      { email: 186, chat: 80, phone: 120, month: "January" },
      { email: 165, chat: 95, phone: 110, month: "February" },
      { email: 190, chat: 87, phone: 125, month: "March" },
      { email: 195, chat: 88, phone: 130, month: "May" },
      { email: 182, chat: 98, phone: 122, month: "June" },
      { email: 175, chat: 90, phone: 115, month: "August" },
      { email: 180, chat: 86, phone: 124, month: "October" },
      { email: 185, chat: 91, phone: 126, month: "November" },
    ],
    series: [
      { name: "email", color: themeColors.primary },
      { name: "chat", color: themeColors.success },
      { name: "phone", color: themeColors.warning },
    ],
  });

  // Updated BarChart for ticket status
  const barChart = useChart({
    data: [
      { count: 60, status: "Open", color: themeColors.warning },
      { count: 45, status: "Resolved", color: themeColors.success },
      { count: 12, status: "Pending", color: themeColors.secondary },
      { count: 4, status: "Escalated", color: "red.500" },
    ],
  });

  // Updated DonutChart for ticket sources
  const donutChart = useChart({
    data: [
      { name: "Email", value: 400, color: themeColors.primary },
      { name: "Chat", value: 300, color: themeColors.success },
      { name: "Phone", value: 300, color: themeColors.warning },
      { name: "Social", value: 200, color: "purple.500" },
    ],
  });

  // Updated PieChart for customer satisfaction
  const pieChart = useChart({
    data: [
      { name: "Excellent", value: 400, color: themeColors.success },
      { name: "Good", value: 300, color: themeColors.primary },
      { name: "Average", value: 300, color: themeColors.warning },
      { name: "Poor", value: 200, color: "red.500" },
    ],
  });

  // Updated BarSegment for ticket sources
  const barSegmentChart = useChart({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Email", value: 500, color: themeColors.primary },
      { name: "Chat", value: 300, color: themeColors.success },
      { name: "Phone", value: 200, color: themeColors.warning },
      { name: "Social", value: 100, color: "purple.500" },
    ],
  });

  // Updated LineChart for average response time
  const lineChart = useChart({
    data: [
      { email: 20, chat: 15, phone: 25, month: "January" },
      { email: 18, chat: 12, phone: 22, month: "February" },
      { email: 22, chat: 14, phone: 20, month: "March" },
      { email: 19, chat: 13, phone: 23, month: "May" },
      { email: 21, chat: 11, phone: 24, month: "June" },
      { email: 17, chat: 10, phone: 21, month: "August" },
    ],
    series: [
      { name: "email", color: themeColors.primary, label: "Email" },
      { name: "chat", color: themeColors.success, label: "Chat" },
      { name: "phone", color: themeColors.warning, label: "Phone" },
    ],
  });

  // Simplified small charts for quick metrics
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
    series: [{ name: "value", color: themeColors.primary }],
  });

  const smallBarChart = useChart({
    data: [
      { value: 10, fill: themeColors.primary },
      { value: 16, fill: themeColors.success },
      { value: 19, fill: themeColors.primary },
      { value: 15, fill: themeColors.success },
      { value: 12, fill: themeColors.primary },
      { value: 15, fill: themeColors.primary },
      { value: 10, fill: themeColors.primary },
      { value: 18, fill: themeColors.success },
    ],
  });

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
    series: [{ name: "value", color: themeColors.success }],
  });

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
      series: [{ color: themeColors.primary }],
    });

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
    );
  };


  return (
    <Layout>
      {/* Page Header */}
      <Box p={6} bg={themeColors.background} borderBottomWidth="1px">
        <Heading size="lg" color={"gray.700"}>
          Customer Support Dashboard
        </Heading>
        <Text color={themeColors.secondary} mt={2}>
          Monitor key support metrics, ticket trends, and customer satisfaction.
        </Text>
      </Box>

      {/* Small Metrics Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        p={6}
        gap={6}
        bg={themeColors.background}
      >
        {/* Support Tickets Overview */}
        <Card.Root
          bg={"white"}
          p={4}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Header>
            <Heading size="sm" color={"gray.700"}>
              Ticket Volume
            </Heading>
          </Card.Header>
          <Card.Body mt={4}>
            <Chart.Root width="100%" height="100px" chart={smallAreaChart}>
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
        <Card.Root
          bg={"white"}
          p={4}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Header>
            <Heading size="sm" color={"gray.700"}>
              Resolved Tickets
            </Heading>
          </Card.Header>
          <Card.Body mt={4}>
            <Chart.Root width="100%" height="100px" chart={smallBarChart}>
              <BarChart data={smallBarChart.data} barSize={8}>
                <Bar
                  isAnimationActive={false}
                  dataKey={smallBarChart.key("value")}
                  fill={smallBarChart.color(themeColors.primary)}
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
        <Card.Root
          bg={"white"}
          p={4}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Header>
            <Heading size="sm" color={"gray.700"}>
              Satisfaction Trend
            </Heading>
          </Card.Header>
          <Card.Body mt={4}>
            <Chart.Root width="100%" height="100px" chart={curvAreaChart}>
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
        <Card.Root
          bg={"white"}
          p={4}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Body mt={4}>
            <Stat.Root>
              <Stat.Label className="flex items-center gap-2" color={"gray.700"}>
                <LuGlobe /> Support Portal Visitors
              </Stat.Label>
              <Stat.ValueText fontSize="2xl" fontWeight="bold" color={"gray.700"}>
                192.1k
              </Stat.ValueText>
            </Stat.Root>
            <Box mt={4}>
              <SparkLine />
            </Box>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>

      {/* Detailed Charts Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        p={6}
        gap={6}
        bg={themeColors.background}
      >
        {/* Ticket Volume by Channel */}
        <Card.Root
          bg={"white"}
          p={5}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Header>
            <Heading size="md" color={"gray.700"}>
              Ticket Volume by Channel
            </Heading>
          </Card.Header>
          <Card.Body>
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
          </Card.Body>
        </Card.Root>

        {/* Ticket Status Distribution */}
        <Card.Root
          bg={"white"}
          p={5}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Header>
            <Heading size="md" color={"gray.700"}>
              Ticket Status Distribution
            </Heading>
          </Card.Header>
          <Card.Body>
            <Chart.Root maxH="sm" chart={barChart}>
              <BarChart data={barChart.data}>
                <CartesianGrid stroke={barChart.color("border.muted")} vertical={false} />
                <XAxis
                  axisLine={false}
                  tickLine={false}
                  dataKey={barChart.key("status")}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar isAnimationActive={false} dataKey={barChart.key("count")}>
                  {barChart.data.map((item) => (
                    <Cell key={item.status} fill={barChart.color(item.color)} />
                  ))}
                </Bar>
              </BarChart>
            </Chart.Root>
          </Card.Body>
        </Card.Root>

        {/* Ticket Sources */}
        <Card.Root
          bg={"white"}
          p={5}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Header>
            <Heading size="md" color={"gray.700"}>
              Ticket Sources
            </Heading>
          </Card.Header>
          <Card.Body>
            <Chart.Root boxSize="200px" chart={donutChart} mx="auto">
              <PieChart>
                <Tooltip
                  cursor={false}
                  animationDuration={100}
                  content={<Chart.Tooltip hideLabel />}
                />
                <Pie
                  innerRadius={80}
                  outerRadius={100}
                  isAnimationActive={false}
                  data={donutChart.data}
                  dataKey={donutChart.key("value")}
                  nameKey="name"
                >
                  <Label
                    content={({ viewBox }) => (
                      <Chart.RadialText
                        viewBox={viewBox}
                        title={donutChart.getTotal("value").toLocaleString()}
                        description="tickets"
                      />
                    )}
                  />
                  {donutChart.data.map((item) => (
                    <Cell key={item.color} fill={donutChart.color(item.color)} />
                  ))}
                </Pie>
              </PieChart>
            </Chart.Root>
          </Card.Body>
        </Card.Root>

        {/* Customer Satisfaction */}
        <Card.Root
          bg={"white"}
          p={5}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Header>
            <Heading size="md" color={"gray.700"}>
              Customer Satisfaction
            </Heading>
          </Card.Header>
          <Card.Body>
            <Chart.Root boxSize="200px" mx="auto" chart={pieChart}>
              <PieChart>
                <Pie
                  isAnimationActive={false}
                  data={pieChart.data}
                  dataKey={pieChart.key("value")}
                  outerRadius={100}
                  innerRadius={0}
                  labelLine={false}
                  label={({ name, index }) => {
                    const { value } = pieChart.data[index ?? -1];
                    const percent = value / pieChart.getTotal("value");
                    return `${name}: ${(percent * 100).toFixed(1)}%`;
                  }}
                >
                  {pieChart.data.map((item) => (
                    <Cell key={item.name} fill={pieChart.color(item.color)} />
                  ))}
                </Pie>
              </PieChart>
            </Chart.Root>
          </Card.Body>
        </Card.Root>

        {/* Ticket Sources Bar */}
        <Card.Root
          bg={"white"}
          p={5}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Header>
            <Heading size="md" color={"gray.700"}>
              Ticket Sources Distribution
            </Heading>
          </Card.Header>
          <Card.Body>
            <BarSegment.Root chart={barSegmentChart}>
              <BarSegment.Content>
                <BarSegment.Value />
                <BarSegment.Bar />
              </BarSegment.Content>
              <BarSegment.Legend showPercent />
            </BarSegment.Root>
          </Card.Body>
        </Card.Root>

        {/* Average Response Time */}
        <Card.Root
          bg={"white"}
          p={5}
          shadow="sm"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Card.Header>
            <Heading size="md" color={"gray.700"}>
              Average Response Time (Hours)
            </Heading>
          </Card.Header>
          <Card.Body>
            <Chart.Root maxH="8rem" chart={lineChart}>
              <LineChart data={lineChart.data}>
                <CartesianGrid stroke={lineChart.color("border")} vertical={false} />
                <XAxis
                  axisLine={false}
                  dataKey={lineChart.key("month")}
                  tickFormatter={(value) => value.slice(0, 3)}
                  ticks={[
                    lineChart.data[0].month,
                    lineChart.data[lineChart.data.length - 1].month,
                  ]}
                  stroke={lineChart.color("border")}
                />
                {lineChart.series.map((item) => (
                  <Line
                    key={item.name}
                    isAnimationActive={false}
                    dataKey={lineChart.key(item.name)}
                    stroke={lineChart.color(item.color)}
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
              </LineChart>
            </Chart.Root>

            <HStack wrap="wrap" gap="2" mt={4}>
              {lineChart.series.map((item) => (
                <Stat.Root key={item.name} size="sm">
                  <Stat.Label textStyle="xs" display="flex" alignItems="center" gap={1}>
                    <ColorSwatch boxSize="2" value={lineChart.color(item.color)} />
                    {item.label}
                  </Stat.Label>
                  <Stat.ValueText fontWeight="medium" color={"gray.700"}>
                    {item.name ? lineChart.getTotal(item.name) : "-"} hrs
                  </Stat.ValueText>
                </Stat.Root>
              ))}
            </HStack>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
    </Layout>
  );
};

export default Dashboard;
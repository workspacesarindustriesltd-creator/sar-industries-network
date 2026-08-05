export const dashboardSummary = {
  metrics: [
    { label: "Total revenue", value: "৳24.5M", change: "+18.6%", trend: "up" },
    { label: "Active projects", value: "128", change: "+12.4%", trend: "up" },
    { label: "New clients", value: "42", change: "+27.3%", trend: "up" },
    { label: "Profit margin", value: "28.4%", change: "+4.6%", trend: "up" },
    { label: "Cash flow", value: "৳11.2M", change: "+15.2%", trend: "up" },
  ],
  performance: [38, 52, 46, 64, 48, 67, 61, 79, 58, 76, 69, 88],
  channels: [
    { label: "Direct", value: 72 },
    { label: "Organic", value: 58 },
    { label: "Referral", value: 44 },
    { label: "Paid ads", value: 36 },
    { label: "Social", value: 28 },
    { label: "Email", value: 19 },
  ],
  activities: [
    { title: "New project “SAR AI Suite” created", time: "2m", state: "orange" },
    { title: "Payment received from TechCorp", time: "15m", state: "green" },
    { title: "New client BluePeak Solutions onboarded", time: "1h", state: "blue" },
    { title: "Q3 Growth campaign launched", time: "2h", state: "orange" },
    { title: "Market research task completed", time: "3h", state: "green" },
  ],
  agents: [
    { name: "Market analyst", status: "Active" },
    { name: "Content creator", status: "Active" },
    { name: "Lead finder", status: "Active" },
    { name: "Sales coach", status: "Active" },
  ],
} as const;

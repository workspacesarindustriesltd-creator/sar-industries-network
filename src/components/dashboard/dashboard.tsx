import type { CSSProperties } from "react";
import { dashboardSummary } from "@/lib/dashboard-data";
import { Icon, type IconName } from "@/components/ui/icon";

const navigation: { label: string; icon: IconName; active?: boolean }[] = [
  { label: "Dashboard", icon: "dashboard", active: true },
  { label: "AI Agents", icon: "bot" },
  { label: "Workflows", icon: "workflow" },
  { label: "Projects", icon: "projects" },
  { label: "Tasks", icon: "tasks" },
  { label: "Clients", icon: "clients" },
  { label: "Marketing", icon: "marketing" },
  { label: "Sales", icon: "sales" },
  { label: "Analytics", icon: "analytics" },
  { label: "Finance", icon: "finance" },
  { label: "Team", icon: "team" },
  { label: "Integrations", icon: "integrations" },
  { label: "Settings", icon: "settings" },
];

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="SAR Industries Network">
      <span className="brand-mark__top">S</span>
      <span className="brand-mark__bottom">N</span>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <BrandMark />
        <div>
          <strong>SAR</strong>
          <span>INDUSTRIES</span>
          <span>NETWORK</span>
        </div>
      </div>

      <nav aria-label="Primary navigation" className="navigation">
        {navigation.map((item) => (
          <a
            href="#"
            key={item.label}
            className={item.active ? "navigation__item is-active" : "navigation__item"}
            aria-current={item.active ? "page" : undefined}
          >
            <Icon name={item.icon} width={18} height={18} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="profile-card">
        <div className="profile-avatar">SA</div>
        <div className="profile-copy">
          <strong>Saiful Alam Rafi</strong>
          <span>Founder &amp; CEO</span>
        </div>
        <Icon name="chevron" width={15} height={15} />
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Executive command center</p>
        <h1>Welcome back, Rafi</h1>
        <p>Here is what is happening across your network today.</p>
      </div>
      <div className="topbar__actions">
        <label className="search-field">
          <Icon name="search" width={17} height={17} />
          <input aria-label="Search dashboard" placeholder="Search anything..." />
        </label>
        <button className="date-button" type="button">
          <Icon name="calendar" width={16} height={16} />
          <span>Aug 1 – Aug 31, 2026</span>
        </button>
        <button className="icon-button" type="button" aria-label="Notifications">
          <Icon name="bell" width={18} height={18} />
          <span className="notification-dot" />
        </button>
        <button className="primary-button" type="button">
          <Icon name="plus" width={17} height={17} />
          New project
        </button>
      </div>
    </header>
  );
}

function StatCard({ metric }: { metric: (typeof dashboardSummary.metrics)[number] }) {
  return (
    <article className="stat-card">
      <div className="stat-card__label">
        <span>{metric.label}</span>
        <span className="metric-icon"><Icon name="activity" width={15} height={15} /></span>
      </div>
      <strong>{metric.value}</strong>
      <div className="stat-card__footer">
        <span className="positive"><Icon name="arrow-up" width={13} height={13} />{metric.change}</span>
        <span>vs previous period</span>
      </div>
      <svg className="sparkline" viewBox="0 0 80 28" role="img" aria-label={`${metric.label} trend`}>
        <path d="M1 24 14 17 26 21 39 10 52 15 65 4 79 8" />
      </svg>
    </article>
  );
}

function PerformanceChart() {
  const points = dashboardSummary.performance
    .map((value, index) => `${index * 58},${190 - value * 1.55}`)
    .join(" ");

  return (
    <article className="panel performance-panel">
      <div className="panel__header">
        <div>
          <p className="panel__kicker">Revenue analytics</p>
          <h2>Business performance</h2>
        </div>
        <select aria-label="Business performance metric" defaultValue="Revenue">
          <option>Revenue</option>
          <option>Profit</option>
          <option>Clients</option>
        </select>
      </div>
      <div className="chart-wrap">
        <div className="chart-axis">
          <span>৳25M</span><span>৳20M</span><span>৳15M</span><span>৳10M</span><span>৳5M</span><span>৳0</span>
        </div>
        <svg className="line-chart" viewBox="0 0 640 210" preserveAspectRatio="none" role="img" aria-label="Monthly business performance">
          <defs>
            <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff5a12" stopOpacity="0.44" />
              <stop offset="100%" stopColor="#ff5a12" stopOpacity="0" />
            </linearGradient>
            <filter id="line-glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          {[30, 65, 100, 135, 170].map((y) => <line key={y} x1="0" y1={y} x2="640" y2={y} className="grid-line" />)}
          <polygon points={`0,210 ${points} 638,210`} fill="url(#area-fill)" />
          <polyline points={points} fill="none" className="performance-line" filter="url(#line-glow)" />
          <circle cx="406" cy="67" r="5" className="chart-point" />
          <line x1="406" y1="67" x2="406" y2="210" className="guide-line" />
        </svg>
        <div className="chart-months">
          {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((month) => <span key={month}>{month}</span>)}
        </div>
        <div className="chart-tooltip"><strong>৳24.5M</strong><span>July 2026</span></div>
      </div>
    </article>
  );
}

function ChannelChart() {
  return (
    <article className="panel channel-panel">
      <div className="panel__header">
        <div><p className="panel__kicker">Acquisition</p><h2>Revenue by channel</h2></div>
        <span className="panel-link">This month</span>
      </div>
      <div className="bar-chart" aria-label="Revenue by channel">
        {dashboardSummary.channels.map((channel) => (
          <div className="bar-column" key={channel.label}>
            <div className="bar-track"><span style={{ height: `${channel.value}%` }} /></div>
            <strong>{channel.value}%</strong>
            <span>{channel.label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function RingCard({ title, value, subtitle, progress = 78 }: { title: string; value: string; subtitle: string; progress?: number }) {
  return (
    <article className="panel ring-card">
      <div className="panel__header"><h2>{title}</h2><span className="panel-link">Details</span></div>
      <div className="ring-card__body">
        <div className="ring" style={{ '--progress': `${progress * 3.6}deg` } as CSSProperties}>
          <div><strong>{value}</strong><span>{subtitle}</span></div>
        </div>
        <ul>
          <li><span className="legend-dot orange"/>Goals met <strong>78%</strong></li>
          <li><span className="legend-dot amber"/>In progress <strong>16%</strong></li>
          <li><span className="legend-dot gray"/>At risk <strong>6%</strong></li>
        </ul>
      </div>
    </article>
  );
}

function ActivityPanel() {
  return (
    <article className="panel activity-panel">
      <div className="panel__header"><h2>Live activity</h2><span className="panel-link">View all</span></div>
      <ul>
        {dashboardSummary.activities.map((activity) => (
          <li key={activity.title}>
            <span className={`activity-state ${activity.state}`} />
            <p>{activity.title}</p>
            <time>{activity.time}</time>
          </li>
        ))}
      </ul>
    </article>
  );
}

function BottomPanel() {
  return (
    <section className="bottom-grid">
      <article className="panel referrals-panel">
        <div className="panel__header"><h2>Top referrals</h2><span className="panel-link">View all</span></div>
        <div className="referrals">
          {['LinkedIn','Google','Direct','Website','Partner'].map((name, index) => (
            <div key={name}><span>{name.slice(0,1)}</span><strong>{name}</strong><small>{[2453,1862,1245,842,532][index].toLocaleString()}</small></div>
          ))}
        </div>
      </article>
      <article className="panel agents-panel">
        <div className="panel__header"><h2>AI agents overview</h2><span className="panel-link">Manage</span></div>
        <div className="agents">
          {dashboardSummary.agents.map((agent) => (
            <div key={agent.name}><span className="agent-icon"><Icon name="bot" width={17} height={17}/></span><strong>{agent.name}</strong><small>{agent.status}</small></div>
          ))}
        </div>
      </article>
    </section>
  );
}

export function Dashboard() {
  return (
    <main className="dashboard-shell">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <section className="metrics-grid" aria-label="Key metrics">
          {dashboardSummary.metrics.map((metric) => <StatCard key={metric.label} metric={metric} />)}
        </section>
        <section className="analytics-grid">
          <PerformanceChart />
          <ChannelChart />
        </section>
        <section className="insights-grid">
          <RingCard title="Performance overview" value="78%" subtitle="Overall score" />
          <RingCard title="Campaign mix" value="৳842K" subtitle="Total spend" progress={68} />
          <RingCard title="Visitors overview" value="16,842" subtitle="Total visitors" progress={82} />
          <ActivityPanel />
        </section>
        <BottomPanel />
      </div>
    </main>
  );
}

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', traditional: 40, hyprova: 45 },
  { month: 'Feb', traditional: 42, hyprova: 55 },
  { month: 'Mar', traditional: 45, hyprova: 75 },
  { month: 'Apr', traditional: 46, hyprova: 110 },
  { month: 'May', traditional: 48, hyprova: 160 },
  { month: 'Jun', traditional: 50, hyprova: 240 },
];

const StatsChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">Discovery Velocity</h3>
        <p className="text-sm text-slate-500">Candidates identified per month</p>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorHyprova" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#0f172a', fontSize: '14px', fontWeight: 500 }}
          />
          <Area type="monotone" dataKey="traditional" stackId="1" stroke="#94a3b8" fill="url(#colorTrad)" name="Traditional Methods" />
          <Area type="monotone" dataKey="hyprova" stackId="2" stroke="#14b8a6" fill="url(#colorHyprova)" strokeWidth={3} name="Hyprova AI" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
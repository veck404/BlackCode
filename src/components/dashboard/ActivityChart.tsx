import { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ActivityData {
  date: string;
  problems: number;
  label?: string;
}

interface ActivityChartProps {
  data: ActivityData[];
}

export default function ActivityChart({ data }: ActivityChartProps) {
  const chartData = useMemo(
    () =>
      data.map((point) => ({
        ...point,
        label: point.label ?? new Date(point.date).toLocaleDateString(),
      })),
    [data]
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Activity Overview
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorProblems" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="problems"
              stroke="#4F46E5"
              fillOpacity={1}
              fill="url(#colorProblems)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

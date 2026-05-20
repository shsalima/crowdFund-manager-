import { Wallet, Clock, Briefcase, CheckCircle2 } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Capital Raised",
      value: "$645,000",
      icon: <Wallet size={20} className="text-zinc-400" />,
      badge: "+12.5%",
    },
    {
      title: "Active Projects",
      value: "2",
      icon: <Clock size={20} className="text-zinc-400" />,
    },
    {
      title: "Total Projects",
      value: "3",
      icon: <Briefcase size={20} className="text-zinc-400" />,
    },
    {
      title: "Success Rate",
      value: "33%",
      icon: <CheckCircle2 size={20} className="text-zinc-400" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-[#111214] border border-zinc-800/50 rounded-2xl p-6 flex flex-col justify-between min-h-[140px] transition-all hover:border-zinc-700/80">
          <div className="flex items-start justify-between w-full">
            <div className="p-3 bg-[#16171a] border border-zinc-800/80 rounded-xl">
              {stat.icon}
            </div>
            {stat.badge && (
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                {stat.badge}
              </span>
            )}
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{stat.title}</p>
            <h3 className="text-2xl font-bold tracking-tight text-white">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
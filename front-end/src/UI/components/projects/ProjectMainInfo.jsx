import { Clock, CheckCircle } from "lucide-react";

export default function ProjectMainInfo({ project }) {
  const isOpen = project.status === "open";
  
  const progress = project.capital > 0 
    ? Math.min(Math.round(((project.initialInvestment || project.currentAmount || 0) / project.capital) * 100), 100)
    : 0;

  return (
    <div className="bg-[#111214] border border-zinc-800/50 rounded-2xl p-8 space-y-8 shadow-xl w-full lg:col-span-2">
      <div className="space-y-4">
        <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
          Capital Raised
        </span>
        <div className="flex justify-between items-baseline flex-wrap gap-2">
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-extrabold text-white">
              ${(project.initialInvestment || project.currentAmount || 0)}
            </h2>
            <span className="text-xs text-zinc-500 font-medium">
              of ${project.capital}
            </span>
          </div>
          <div className="text-right">
            <span className="text-4xl font-extrabold text-white">{progress}%</span>
            <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Funded</span>
          </div>
        </div>

        <div className="w-full bg-[#16171a] h-3 rounded-full overflow-hidden border border-zinc-800/40">
          <div 
            className="bg-white h-full rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 pt-4 border-t border-zinc-800/40">
        <div>
          <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Min. Entry</span>
          <span className="text-lg font-bold text-white">$50,000</span>
        </div>
        <div>
          <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Max % per Inv.</span>
          <span className="text-lg font-bold text-white">{project.maxPercentPerInvestor || 10}%</span>
        </div>
        <div>
          <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Investors</span>
          <span className="text-lg font-bold text-white">3</span>
        </div>
      </div>
    </div>
  );
}
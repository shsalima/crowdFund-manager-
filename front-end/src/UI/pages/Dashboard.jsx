import DashboardStats from "../components/dashboard/DashboardStats";

export default function Dashboard() {
    const dummyProjects = [
    {
      title: "Solar Energy initiative",
      description: "A project to install solar panels in urban residential areas to reduce carbon footprint.",
      status: "OPEN",
      progress: 65,
      invested: 325000,
      target: 500000,
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Developing biodegradable packaging solutions for e-commerce businesses.",
      status: "CLOSED",
      progress: 100,
      invested: 200000,
      target: 200000,
    },
    {
      title: "Smart Water Filtration",
      description: "IoT based water filtration system for remote areas with real-time monitoring.",
      status: "OPEN",
      progress: 16,
      invested: 120000,
      target: 750000,
    },
  ];

 return (
    <div className="space-y-10 max-w-[1200px] mx-auto pt-4">
      
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Welcome back, Alex</h1>
        <p className="text-sm text-zinc-400">Here's what's happening with your projects today.</p>
      </div>

    
      <DashboardStats />

    
      {/* <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-white tracking-wide">Recent Projects</h2>
          <button className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer">
            <span>View all projects</span>
            <MoveRight size={14} />
          </button>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
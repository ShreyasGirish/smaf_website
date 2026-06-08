
import React from 'react';
import { Package, Users, Globe, Briefcase } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Package className="text-emerald-600" size={28} />,
      value: "3000 MT",
      label: "Annual Capacity",
      description: "Scalable volume for bulk global processing."
    },
    {
      icon: <Users className="text-emerald-600" size={28} />,
      value: "1,200+",
      label: "Contract Farmers",
      description: "Sustainably supported within a 100km radius."
    },
    {
      icon: <Briefcase className="text-emerald-600" size={28} />,
      value: "12,000+",
      label: "Rural Laborers",
      description: "Significant local community economic impact."
    },
    {
      icon: <Globe className="text-emerald-600" size={28} />,
      value: "75%",
      label: "Export Focus",
      description: "Primary supply to USA & Russian markets."
    }
  ];

  return (
    <div className="relative -mt-20 z-20 container mx-auto px-4 md:px-6">
      <div className="bg-white shadow-2xl rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 overflow-hidden border border-gray-100">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-10 flex flex-col items-center text-center group hover:bg-emerald-50 transition-all duration-300">
            <div className="mb-6 bg-emerald-100 p-4 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-emerald-700 font-bold text-sm mb-3 uppercase tracking-wider">{stat.label}</p>
            <p className="text-gray-400 text-xs leading-relaxed px-4">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

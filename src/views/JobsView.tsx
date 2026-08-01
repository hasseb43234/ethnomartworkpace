import React, { useState } from 'react';
import { JOBS_LIST } from '../data/mockData';

export const JobsView: React.FC = () => {
  const [appliedJobId, setAppliedJobId] = useState<string | null>(null);

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#141b2b]">Cultural & Artisan Jobs</h1>
        <p className="text-sm text-[#3e4850] mt-1">
          Explore sustainable economic opportunities empowering rural craftspeople, logistics coordinators, and heritage curators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {JOBS_LIST.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-3xl border border-[#bec8d2]/40 hover:border-[#0ea5e9] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="bg-[#c0e8ff] text-[#001e2b] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  {job.community}
                </span>
                <span className="text-xs font-semibold text-[#006591]">{job.type}</span>
              </div>

              <h3 className="text-lg font-bold text-[#141b2b] mb-1">{job.title}</h3>
              <p className="text-xs text-[#3e4850] mb-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>{job.location}</span>
              </p>

              <p className="text-xs text-[#3e4850] leading-relaxed mb-4">{job.description}</p>
            </div>

            <div className="pt-4 border-t border-[#bec8d2]/20 flex items-center justify-between">
              <span className="font-extrabold text-xs text-[#006591]">{job.stipend}</span>

              {appliedJobId === job.id ? (
                <span className="text-xs font-bold text-[#006591] bg-[#c9e6ff] px-3 py-1.5 rounded-xl flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check</span>
                  Applied
                </span>
              ) : (
                <button
                  onClick={() => setAppliedJobId(job.id)}
                  className="px-4 py-2 bg-[#006591] text-white text-xs font-bold rounded-xl hover:bg-[#005b78] transition-colors shadow-2xs"
                >
                  Apply Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

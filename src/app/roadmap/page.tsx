import GanttTimeline from '@/components/GanttTimeline';
import RockCards from '@/components/RockCards';
import RACIMatrix from '@/components/RACIMatrix';

export default function RoadmapPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1
          className="text-3xl font-bold text-text-primary"
                 >
          Execution Roadmap
        </h1>
        <p className="text-text-secondary mt-1">
          Q4 2025 &rarr; Q4 2027 | EOS-Aligned Milestones
        </p>
      </div>

      {/* Timeline */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
                 >
          Timeline
        </h2>
        <GanttTimeline />
      </section>

      {/* EOS Rocks */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
                 >
          EOS Rocks
        </h2>
        <RockCards />
      </section>

      {/* RACI Matrix */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
                 >
          RACI Matrix
        </h2>
        <RACIMatrix />
      </section>

      {/* Blockers & Escalations */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
                 >
          Blockers &amp; Escalations
        </h2>
        <div className="bg-card rounded-xl border border-border shadow-sm p-8 flex flex-col items-center justify-center text-center">
          <svg
            className="w-10 h-10 text-success mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-text-secondary font-medium">No active blockers</p>
          <p className="text-xs text-text-muted mt-1">
            All workstreams are proceeding as planned
          </p>
        </div>
      </section>
    </div>
  );
}

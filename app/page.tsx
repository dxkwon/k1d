import ProfileSection from '@/components/ProfileSection';
import ProjectsGrid from '@/components/ProjectsGrid';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid lg:grid-cols-[45%_55%] min-h-screen">
        {/* Left side - Profile Section (sticky) */}
        <div className="border-r border-white/10 bg-black">
          <ProfileSection />
        </div>

        {/* Right side - Projects Grid (scrollable) */}
        <div className="bg-black">
          <ProjectsGrid />
        </div>
      </div>
    </main>
  );
}

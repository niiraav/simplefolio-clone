import { Globe, GraduationCap, Users, BarChart3, Truck, Gamepad2, Car } from "lucide-react";
import { LucideIcon } from "lucide-react";
interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  icon: LucideIcon;
  iconColor: string;
}
const experiences: Experience[] = [{
  id: 1,
  period: "March 2024 - Present",
  role: "Senior Product Designer",
  company: "Worldpay",
  icon: Globe,
  iconColor: "text-blue-600"
}, {
  id: 2,
  period: "Nov 2023 - Present",
  role: "Senior Product Designer",
  company: "Oak National Academy",
  icon: GraduationCap,
  iconColor: "text-green-600"
}, {
  id: 3,
  period: "Nov 2022 - Nov 2023",
  role: "Senior UX/Interaction Designer",
  company: "Microsoft Teams",
  icon: Users,
  iconColor: "text-purple-600"
}, {
  id: 4,
  period: "Nov 2021 - Sept 2022",
  role: "Product Designer (UI Focused)",
  company: "Sage",
  icon: BarChart3,
  iconColor: "text-emerald-600"
}, {
  id: 5,
  period: "Sept 2021 - May 2022",
  role: "Senior Product Designer",
  company: "Gophr",
  icon: Truck,
  iconColor: "text-orange-600"
}, {
  id: 6,
  period: "April 2019 - Sept 2022",
  role: "UX/UI Designer",
  company: "Buzz Bingo",
  icon: Gamepad2,
  iconColor: "text-pink-600"
}, {
  id: 7,
  period: "March 2019 - May 2019",
  role: "UX/UI Designer",
  company: "Wash Doctors",
  icon: Car,
  iconColor: "text-cyan-600"
}];
const ExperienceSection = () => {
  return <section id="experience" className="py-20 max-w-[510px] mx-auto px-0 bg-primary-foreground">
        <h2 className="text-2xl font-bold text-foreground text-left mb-6 font-serif">
          Work Experience
        </h2>
        
        <div className="space-y-3 rounded-none shadow-none">
          {experiences.map((exp, index) => <div key={exp.id} style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'forwards'
      }} className="flex flex-col gap-2 opacity-0 animate-fade-in sm:gap-[12px] sm:flex-col py-[12px] sm:flex sm:items-start sm:justify-start">
              <span className="text-sm text-muted-foreground whitespace-nowrap min-w-[180px]">
                {exp.period}
              </span>
              
              <div className="flex items-center flex-1 flex-wrap gap-[12px]">
                <span className="text-foreground">{exp.role} at</span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-background font-medium text-foreground text-sm">
                  <exp.icon className={`w-4 h-4 ${exp.iconColor}`} />
                  <span className="font-medium">{exp.company}</span>
                </div>
              </div>
            </div>)}
        </div>
    </section>;
};
export default ExperienceSection;
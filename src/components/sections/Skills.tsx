import { skills } from "../../data/data";
import SkillsBadge from "../ui/SkillBadge";

export default function Skills() {
  const frontendSkills = Object.values(skills).filter(
    (skill): skill is typeof skill & { type: string } =>
      "type" in skill && skill.type === "frontend"
  );
  const backendSkills = Object.values(skills).filter(
    (skill): skill is typeof skill & { type: string } =>
      "type" in skill && skill.type === "backend"
  )
  const langSkills = Object.values(skills).filter(
    (skill): skill is typeof skill & { type: string } =>
      "type" in skill && skill.type === "lang"
  )

  return (
    <div className="flex flex-col m-auto gap-8 mb-8">
      <div className="bg-(--color-card) p-4 rounded-xl border border-(--color-border) gap-2 flex flex-col">
        <h1 className="text-center text-xl font-semibold">Front-End</h1>
        <div className="grid grid-cols-3 place-items-center md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {frontendSkills.map((skill, index) => {
            return (
              <SkillsBadge
                key={index}
                skillName={skill.name}
                skillSrc={skill.src}
                skillType={skill.type}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-(--color-card) p-4 rounded-xl border border-(--color-border) gap-2 flex flex-col">
        <h1 className="text-center text-xl font-semibold">Back-End</h1>
        <div className="grid grid-cols-3 place-items-center md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {backendSkills.map((skill, index) => {
            return (
              <SkillsBadge
                key={index}
                skillName={skill.name}
                skillSrc={skill.src}
                skillType={skill.type}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-(--color-card) p-4 rounded-xl border border-(--color-border) gap-2 flex flex-col">
        <h1 className="text-center text-xl font-semibold">Other Languages / Tools</h1>
        <div className="grid grid-cols-3 place-items-center md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {langSkills.map((skill, index) => {
            return (
              <SkillsBadge
                key={index}
                skillName={skill.name}
                skillSrc={skill.src}
                skillType={skill.type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

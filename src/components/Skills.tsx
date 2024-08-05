import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import skills from "../data/skills.json";

const Skills = () => {
  const stars = (level: number) => {
    const starArray = [];
    for (let i = 0; i < 5; i++) {
      if (i >= level) {
        starArray.push(<span key={i}>&#9734;</span>);
      } else {
        starArray.push(<span key={i}>&#9733;</span>);
      }
    }
    return starArray;
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg md:text-2xl font-semibold ">Skills</h2>
      <div className="flex gap-4">
        {skills.map((skill) => (
          <HoverCard key={skill.id}>
            <HoverCardTrigger>
              <img src={skill.image} alt={skill.name} width={40} />
            </HoverCardTrigger>
            <HoverCardContent>
              {skill.name} <br />
              {stars(skill.level)} <br />
              {skill.years} Jahre Erfahrung
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;

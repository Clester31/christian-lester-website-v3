interface PropsType {
  skillName: string;
  skillSrc: string;
  skillType: string;
}

export default function SkillsBadge(props : PropsType) {
  return (
    <div className="flex flex-row border border-(--color-border) bg-(--color-badge) sm:px-2 sm:py-2 p-1 rounded-lg w-24 md:w-32 items-center gap-2 text-xs sm:text-sm hover:border-(--color-accent) transition-all duration-150 ease-in-out">
      <img src={props.skillSrc} alt="skill logo" className="rounded w-6 sm:w-8"></img>
      <span>{props.skillName}</span>
    </div>
  );
}

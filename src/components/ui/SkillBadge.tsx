interface PropsType {
  skillName: string;
  skillSrc: string;
  skillType: string;
}

export default function SkillsBadge(props : PropsType) {
  return (
    <div className="flex flex-row border border-(--color-border) bg-(--color-badge) px-2 py-2 rounded-lg w-32 items-center gap-2 text-sm hover:border-(--color-accent) transition-all duration-150 ease-in-out">
      <img src={props.skillSrc} alt="skill logo" width={32} className="rounded"></img>
      <span>{props.skillName}</span>
    </div>
  );
}

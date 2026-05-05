import SkillItem from "./SkillItem";

export default function Skills() {
  return (
    <div className="skills-card">
      <h3>Kỹ năng nổi bật</h3>
      <ul>
        <SkillItem
          name="JavaScript"
          level="Khá"
          icon="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        />
        <SkillItem
          name="ReactJS"
          level="Đang học"
          icon="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
        />
      </ul>
    </div>
  );
}

export default function SkillItem(props) {
  return (
    <li className="skill-item">
      <img src={props.icon} alt={props.name} className="skill-icon" />
      <div>
        <strong>{props.name}</strong>
        <p>Level: {props.level}</p>
      </div>
    </li>
  );
}

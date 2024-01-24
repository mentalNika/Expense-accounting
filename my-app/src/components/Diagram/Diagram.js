import './Diagram.css';
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={null}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;

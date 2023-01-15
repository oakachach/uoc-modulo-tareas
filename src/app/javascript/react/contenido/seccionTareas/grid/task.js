import React, { useState, useEffect } from "react";
import { IconTray } from "./iconTray";
import tareasSemestre from "../../../../../../api/json/tareasSemestre.json";
import asignaturasSemestre from "../../../../../../api/json/asignaturasSemestre.json";

/* Código referente a la información de las unidades de tarea */

export const Task = (props) => {
  const [status, setStatus] = useState(props.info.status);
  const [visibility, setVisibility] = useState("block"); // Block o none.

  const handleChange = (checked) => {
    /* Aquí le restamos o sumamosel valor de el número de alumnos. */
    //checked === true ? setStatus("completed") : setStatus("pending");
    const enrolledStudents =
      asignaturasSemestre[props.info.subjectID].enrolledStudents;
    const incrementRate = 1 / enrolledStudents;

    if (checked === true) {
      setStatus("completed");
      props.info.successRate += incrementRate;
      props.info.workingRate -= incrementRate;
      return;
    }
    setStatus("pending");
    if (props.info.successRate > 0) {
      props.info.successRate -= incrementRate;
      props.info.workingRate += incrementRate;
    }
  };

  // Comprueba si la tarea está pasada de plazo.
  useEffect(() => {
    const currentDate = new Date();
    const taskDate = new Date(props.info.date);

    if (taskDate < currentDate && status !== "completed") {
      setStatus("uncompleted");
    }
  }, [props.info.date, status]);

  /* Comprueba si se debería mostrar la tarea en base a las asignaturas
  visibles. */
  useEffect(() => {
    if (
      props.asignaturasVisibles.filter(
        (item) => item === props.info.subjectID
      )[0] === undefined
    ) {
      setVisibility("none");
      return;
    }
    setVisibility("block");
  }, [props.asignaturasVisibles, props.info.subjectID]);

  /* Comprubea si se debería mostrar la tarea en base a los 
  filtros de estado. */
  useEffect(() => {
    if (
      props.tipologiasVisibles.filter((item) => item === status)[0] ===
      undefined
    ) {
      setVisibility("none");
      return;
    }
    setVisibility("block");
  }, [props.tipologiasVisibles, status]);

  /* Renderizamos el componente. */
  return (
    <div style={{ display: visibility }}>
      <TaskHeader />
      <div className="task">
        <TaskDate date={props.info.date} status={status} />
        <div className="task-info">
          <Subject
            info={props.info}
            status={status}
            onChange={(value) => handleChange(value)}
          />
          <TaskName title={props.info.taskName} status={status} />
          <div className="subtask-header">
            <SubtaskHeader />
          </div>
          <div className="subtask-container">
            <Subtasks subtaskArray={props.info.subtasks} taskState={status} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Subtasks = ({ subtaskArray, taskState }) => {
  const final = [];

  for (let subtask in subtaskArray) {
    final.push(
      <li key={subtaskArray[subtask].id}>
        <Subtask subtaskInfo={subtaskArray[subtask]} taskState={taskState} />
      </li>
    );
  }

  return (
    <>
      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>{final}</ul>
    </>
  );
};

const TaskDate = ({ date, status }) => {
  let formattedDate = getFormattedDate(date);
  return <div className={`task-date ${status}`}>{formattedDate}</div>;
};

const Subject = ({ info, status, onChange }) => {
  return (
    <div className={status + " subject"}>
      <div className="text-tray">
        <input
          title="Marcar como completada"
          type="checkbox"
          defaultChecked={checkInitialState(info.status)}
          onChange={(e) => onChange(e.target.checked)}
        />
        <a title="Ir a la página de la asignatura" className="bolder">
          {info.subjectName}
        </a>
      </div>
      <IconTray
        success={info.successRate}
        working={info.workingRate}
        estimated={info.estimatedHours}
      />
    </div>
  );
};

const TaskName = ({ title, status }) => {
  return (
    <div className={`task-name ${status}`}>
      <a className="bolder">{title}</a>
    </div>
  );
};

const SubtaskHeader = () => {
  return (
    <>
      <div className="subtask-date-title">Fecha recom.</div>
      <div className={"subtask-title"}>Subtareas</div>
    </>
  );
};

const Subtask = ({ subtaskInfo, taskState }) => {
  //const [status, setStatus] = useState(subtaskInfo.status);
  const [status, setStatus] = useState(
    taskState === "completed" ? taskState : subtaskInfo.status
  );
  const [checked, setChecked] = useState(checkInitialState(status));

  const handleChange = (value) => {
    setChecked(value);
    const taskID = subtaskInfo.taskID;
    const subjectID = tareasSemestre[taskID].subjectID;
    const enrolledStudents = asignaturasSemestre[subjectID].enrolledStudents;
    const incrementRate = 1 / enrolledStudents;

    if (value === true) {
      setStatus("completed");
      subtaskInfo.status = "completed";
      subtaskInfo.successRate += incrementRate;
      subtaskInfo.workingRate -= incrementRate;
      return;
    }
    setStatus("pending");
    if (subtaskInfo.successRate > 0) {
      subtaskInfo.successRate -= incrementRate;
      subtaskInfo.workingRate += incrementRate;
      subtaskInfo.status = "pending";
    }
  };

  // Se triggerea cuando cambia o el taskState o el status de la propia subtarea.
  useEffect(() => {
    const taskID = subtaskInfo.taskID;
    const subjectID = tareasSemestre[taskID].subjectID;
    const enrolledStudents = asignaturasSemestre[subjectID].enrolledStudents;
    const incrementRate = 1 / enrolledStudents;

    if (taskState === "completed") {
      setStatus(taskState);
      setChecked(true);
      subtaskInfo.successRate += incrementRate;
      subtaskInfo.workingRate -= incrementRate;
      return;
    }
    setStatus(subtaskInfo.status);
    setChecked(subtaskInfo.status === "completed" ? true : false);
    if (subtaskInfo.successRate > 0) {
      subtaskInfo.successRate -= incrementRate;
      subtaskInfo.workingRate += incrementRate;
    }
  }, [taskState, subtaskInfo, status]);

  useEffect(() => {
    const currentDate = new Date();
    const taskDate = new Date(subtaskInfo.date);

    if (taskDate < currentDate && status !== "completed") {
      setStatus("uncompleted");
    }
  }, [subtaskInfo.date, status]);

  return (
    <div className="subtask-info">
      <SubtaskDate status={status} date={subtaskInfo.date} />
      <div className={status + " subtask"}>
        <input
          title="Marcar como completada"
          type="checkbox"
          checked={checked}
          onChange={(e) => handleChange(e.target.checked)}
        />
        <a title="Ver detalles de la tarea" className="bolder">
          {subtaskInfo.name}
        </a>
        <IconTray
          success={subtaskInfo.successRate}
          working={subtaskInfo.workingRate}
          estimated={subtaskInfo.estimatedHours}
        />
      </div>
    </div>
  );
};

const SubtaskDate = ({ status, date }) => {
  let formattedDate = getFormattedDate(date);
  return <div className={status + " subtask-date"}>{formattedDate}</div>;
};

const TaskHeader = () => {
  return (
    <div className="task-header">
      <TaskDateTitle />
      <SubjectTitle />
      <TaskNameTitle />
    </div>
  );
};

const TaskDateTitle = () => {
  return <div className="task-date-title">Fecha de entrega</div>;
};

const SubjectTitle = () => {
  return <div className="subject-title">Nombre de la asignatura</div>;
};
const TaskNameTitle = () => {
  return <div className="task-name-title">Nombre de la entrega</div>;
};

const getFormattedDate = (date) => {
  let newDate = new Date(date);

  return `${
    newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate()
  }/${
    newDate.getMonth() + 1 < 10
      ? "0" + (newDate.getMonth() + 1)
      : newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};

const checkInitialState = (initialStatus) => {
  let checked = false;
  initialStatus === "completed" ? (checked = true) : (checked = false);

  return checked;
};

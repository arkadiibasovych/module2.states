import s from './Todo.module.css';

const Todo = ({ text, onDelete, onToggleCompleted, completed }) => (
  <div>
    <input
      type="checkbox"
      className={s.checkbox}
      checked={completed}
      onChange={() => onToggleCompleted}
    />
    <p className={s.description}>{text}</p>
    <button type="button" className={s.delete_button} onClick={() => onDelete}>
      x
    </button>
  </div>
);

export default Todo;

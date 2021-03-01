import s from './Todolist.module.css';
const Todolist = ({ todos, onDeleteTodo, onToggleCompleted, completed }) => (
  <ul className={s.list}>
    {todos.map(({ id, text }) => (
      <li key={id} className={s.list_item}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={s.description}>{text}</p>
        <button
          type="button"
          className={s.delete_button}
          onClick={() => onDeleteTodo(id)}
        >
          x
        </button>
      </li>
    ))}
  </ul>
);

export default Todolist;

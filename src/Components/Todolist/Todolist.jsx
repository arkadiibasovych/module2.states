import s from './Todolist.module.css';
import Todo from '../Todo';

const Todolist = ({ todos, onDeleteTodo, onToggleCompleted, completed }) => (
  <ul className={s.list}>
    {todos.map(({ id, text }) => (
      <li key={id} className={s.list_item}>
        <Todo
          id={id}
          text={text}
          onDelete={() => onDeleteTodo(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
          completed={completed}
        />
      </li>
    ))}
  </ul>
);

export default Todolist;

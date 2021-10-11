 
const TodoItem = ({ todo }) => {
    return (
      <li className={`list-group-item ${todo.done ? "checked" : ""}`}> 
        {todo.title} <span className="close">x</span>
      </li>
    );
  };
  
export default TodoItem;
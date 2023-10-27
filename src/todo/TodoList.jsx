const { useState } = require("react");

//[{title, completed}]

const TodoList = () => {
  const [todos, setTodos] = useState({
    1: { title: "Test", complete: true },
  });

  const changeCompleted = (id) => {
    const updated = {
      ...todos[id],
      complete: !todos[id].complete,
    };
    setTodos((todos) => ({ ...todos, [id]: updated }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    //code error banner
    if (!title) return;
    const id = Object.keys(todos).length + 1;
    setTodos((todos) => ({ ...todos, [id]: { title, complete: false } }));
  };

  const deleteTodo = (id) => {
    const temp = { ...todos };
    delete temp[id];
    setTodos(temp);
  };

  return (
    <>
      <h1>TO DO list!</h1>
      <ul>
        {Object.keys(todos).map((id) => {
          const { title, complete } = todos[id];
          return (
            <div>
              <li>{title}</li>
              <input
                type="checkbox"
                checked={complete}
                onClick={() => changeCompleted(id)}
              />
              <button onClick={() => deleteTodo(id)}>Delete</button>
            </div>
          );
        })}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TodoList;

const mongoose = require('mongoose');
const Todo = require('./models/todo');

mongoose.connect(
  `mongodb+srv://test123:OPUouUSCSphHKZAA@graphql-cluster-omvn0.mongodb.net/todo-list?retryWrites=true&w=majority`,
  {useNewUrlParser: true},
);

const addTodo = async () => {
  const todo = {
    text: 'Lawn',
    completed: false,
  };

  const response = await Todo.create(todo);
  console.log(response);
};

addTodo();

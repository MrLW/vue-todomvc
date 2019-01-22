
export const mutations = {
    addTodo(state, todo) {
        console.log(state);
        state.todos.push(todo);
    },
    removeTodo(state, todo) {
        console.log('remove todo');
    },
    editTodo(state, { todo, text = todo.text, done }) {
        // todo.text = text
        // todo.done = done
        console.log('editTodo',done)
    }
}
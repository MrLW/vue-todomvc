export default {
    addTodo({ commit }, text) {
        commit('addTodo', {
            text,
            done: false
        })
    },
    removeTodo({ commit }, todo) {
        console.log('remove todo')
        commit('removeTodo', todo);
    },
    toggleTodo({ commit }, todo) {
        console.log('toggleTodo',(todo.done))
        commit('editTodo', { todo, done: !todo.done })
    }
}

<style src="../index.css"></style>

<template>
    <section class="todoapp">
        <!-- header -->
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" autofocus
            autocomplete="off"
            placeholder="what needs to be done?"
            @keyup.enter="addTodo">
        </header>
        <!-- main -->
        <section class="main" v-show="todos.length">
            <input class="toggle-all" id="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll(!allChecked)">
            <label for="toggle-all"></label>
            <ul class="todo-list">
                <TodoItem v-for="(todo,index) in filteredTodos"
                    :key="index"
                    :todo="todo">
                </TodoItem>
            </ul>
        </section>
    </section>
</template>
<script>
import {mapAction} from 'vuex'
import TodoItem from './todoItem.vue'
export default {
    components:{TodoItem},
    data() {
        return {
            visibility: 'all',
        }
    },
    computed: {
        todos(){
            return this.$store.state.todos ;
        },
        filteredTodos(){
            return this.$store.state.todos ;
        }
    },
    methods: {
        addTodo(e){
            const text = e.target.value ;
            if(text){
                this.$store.dispatch('addTodo',text);
            }
            // 清空
            this.clear(e) ;
        },
        // 清空输入款
        clear(e){
            e.target.value = '' ;
        }
    },
}
</script>
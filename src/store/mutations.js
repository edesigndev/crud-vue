export const state = {
    todos: [
        { id: 0, title: 'Electricidad', description: 'Lorem Ipsum es simplemente texto.', done: false },
        { id: 1, title: 'Auxilio Mecanico', description: 'Lorem Ipsum es simplemente texto.', done: false },
        { id: 2, title: 'Chofer Reemplazo', description: 'Lorem Ipsum es simplemente texto.', done: false },
        { id: 3, title: 'Medico a Domicilio', description: 'Lorem Ipsum es simplemente texto.', done: false },
        { id: 4, title: 'Ambulancia', description: 'Lorem Ipsum es simplemente texto.', done: false },
        { id: 5, title: 'Gasfitero', description: 'Lorem Ipsum es simplemente texto.', done: false }
    ],
}

export const mutations = {


    addTodo(state, { title, description }) {
        let id = state.todos[state.todos.length - 1].id
        id += 1

        state.todos.push({
            id,
            title,
            description
        })
    },


    deleteTodo(state, { id }) {
        state.todos = state.todos.filter(todo => todo.id !== id)
    },


    toggleTodo(state, { todo }) {
        todo.done = !todo.done
    }
}

export const getters = {
    filterServicios: ({ todos }) => (query) => {
        return todos.filter(todo => todo.title.toLowerCase().includes(query))
    }
}
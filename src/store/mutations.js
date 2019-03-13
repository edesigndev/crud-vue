export const state = {
    todos: [
        { id: 0, title: 'Electricidad', description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', done: false },
        { id: 1, title: 'Auxilio Mecanico', description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', done: false },
        { id: 2, title: 'Chofer Reemplazo', description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', done: false },
        { id: 3, title: 'Medico a Domicilio', description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', done: false }
    ]
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
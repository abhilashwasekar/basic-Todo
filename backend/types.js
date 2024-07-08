const zod = require("zod");

const createTodo =zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})


module.exports={ // it is edxported to use in different file.
    createTodo: createTodo,
    updateTodo:updateTodo
}


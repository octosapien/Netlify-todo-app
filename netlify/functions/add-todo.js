let todos = [];

exports.handler = async (event) => {
    const { task } = JSON.parse(event.body);
    todos.push({ task });
    return {
        statusCode: 200,
        body: JSON.stringify({ todos }),
    };
};

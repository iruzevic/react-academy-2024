const todoLists = require('@/todoLists.json');

export async function GET() {
	console.log('here');
	return Response.json(todoLists);
}

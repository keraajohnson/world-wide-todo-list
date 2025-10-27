import { add, getAll } from '@/lib/todoStore';

export async function GET() {
  const data = getAll();

  return Response.json(data, { status: 200 });
}

export async function POST(request: Request) {
  console.log(request);
  const { text } = await request.json();
  const todo = add(text);

  return Response.json(todo, { status: 201 });
}

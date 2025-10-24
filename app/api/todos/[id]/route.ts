import { deleteItem, update } from '@/lib/todoStore';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const patch = await request.json();

  const updated = update(id, patch);
  if (!updated) return Response.json({ error: 'not found' }, { status: 404 });
  return Response.json(updated, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  deleteItem(id);

  return Response.json({ status: 204 });
}

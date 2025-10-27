'use client';
interface ListItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string, next: boolean) => void;
}

export function ListItem({ id, text, completed, onToggle }: ListItemProps) {
  return (
    <label htmlFor={id} className="flex items-center mb-3">
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={completed}
        onChange={(e) => onToggle(id, e.target.checked)}
      />
      <h3 className="pl-4 text-xl">{text}</h3>
    </label>
  );
}

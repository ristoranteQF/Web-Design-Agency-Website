import type { Item } from "@/lib/content";

export function Ticks({ items }: { items: Item[] }) {
  return (
    <ul className="ticks">
      {items.map((it, i) => (
        <li key={i}>
          {typeof it === "string" ? (
            it
          ) : (
            <>
              <strong>{it.lead}</strong> {it.text}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

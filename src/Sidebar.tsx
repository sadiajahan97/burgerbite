interface SidebarProps {
  categories: string[];
}

export default function ({ categories }: SidebarProps) {
  return (
    <aside>
      <nav>
        {categories.map((category, index) => (
          <a key={index} href={`#${category.replace(' ', '-').toLowerCase()}`}>
            {category}
          </a>
        ))}
      </nav>
    </aside>
  );
}

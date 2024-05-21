import { MenuItemType } from './fetchData';
import MenuItem from './MenuItem';

interface MenuProps {
  categories: string[];
  menu: MenuItemType[];
}

export default function ({ categories, menu }: MenuProps) {
  return (
    <main>
      {categories.map((category, index) => (
        <section key={index} id={category.replace(' ', '-').toLowerCase()}>
          <h2>{category}</h2>
          <ul>
            {menu
              .filter(item => item.category === category)
              .map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

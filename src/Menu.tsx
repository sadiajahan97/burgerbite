import { MenuItemType } from './fetchData';
import MenuItem from './MenuItem';

interface MenuProps {
  categories: string[];
  menu: MenuItemType[];
}

export default function ({ categories, menu }: MenuProps) {
  return (
    <main>
      {categories.map(category => (
        <section>
          <h2>{category}</h2>
          <ul role='menu'>
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

import { useState, useEffect } from 'react';
import { MenuItemType } from './fetchData';
import fetchData from './fetchData';
import MenuItem from './MenuItem';

export default function () {
  const [menu, setMenu] = useState<MenuItemType[]>([]);
  useEffect(() => {
    async function fetchMenu() {
      const items = await fetchData();
      setMenu(items);
    }
    fetchMenu();
  }, []);
  const categories = Array.from(new Set(menu.map(item => item.category)));
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

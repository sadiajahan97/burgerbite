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
  return (
    <ul role='menu'>
      {menu.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

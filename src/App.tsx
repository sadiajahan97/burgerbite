import { useState, useEffect } from 'react';
import { MenuItemType } from './fetchData';
import fetchData from './fetchData';
import Menu from './Menu';

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
    <>
      <Menu categories={categories} menu={menu} />
    </>
  );
}

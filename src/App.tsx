import { useState, useEffect, useRef } from 'react';
import { MenuItemType } from './fetchData';
import fetchData from './fetchData';
import Menu from './Menu';
import Sidebar from './Sidebar';

export default function () {
  const [menu, setMenu] = useState<MenuItemType[]>([]);
  useEffect(() => {
    async function fetchMenu() {
      const items = await fetchData();
      setMenu(items);
    }
    fetchMenu();
  }, []);
  const categories = [
    'Chicken Burgers',
    'Beef Burgers',
    'Naga Drums',
    'Shakes',
    'Pankha Wings',
    'Sides',
    'Desserts',
    'Fish',
  ];
  const categoryRefs = Object.fromEntries(
    categories.map(category => [category, useRef<HTMLElement>(null)])
  );
  return (
    <>
      <Menu categoryRefs={categoryRefs} menu={menu} />
      <Sidebar categoryRefs={categoryRefs} />
    </>
  );
}

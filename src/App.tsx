import { useState, useEffect } from 'react';
import { MenuItemType } from './fetchData';
import fetchData from './fetchData';
import Header from './Header';
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
  return (
    <>
      <Header />
      <Menu categories={categories} menu={menu} />
      <Sidebar categories={categories} />
    </>
  );
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

interface Menu {
  items: MenuItem[];
}

export default async function () {
  try {
    const response = await fetch('../data/db.json');
    if (!response.ok) {
      throw new Error('There was a problem in fetching the JSON data.');
    }
    const menu: Menu = await response.json();
    if (!menu) {
      throw new Error('There was a problem in parsing the JSON data.');
    }
    return menu.items;
  } catch (error) {
    console.error(error);
  }
}

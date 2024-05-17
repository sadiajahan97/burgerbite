export default async function () {
  try {
    const response = await fetch('../data/db.json');
    if (!response.ok) {
      throw new Error('There was a problem in fetching the JSON data.');
    }
    const menuData = await response.json();
    if (!menuData) {
      throw new Error('There was a problem in parsing the JSON data.');
    }
    return menuData;
  } catch (error) {
    console.error(error);
  }
}

export default async function () {
  try {
    const response = await fetch('../data/db.json');
    if (!response.ok) {
      throw new Error('There was a problem in fetching the JSON data.');
    }
    const menu = await response.json();
    if (!menu) {
      throw new Error('There was a problem in parsing the JSON data.');
    }
    return menu;
  } catch (error) {
    console.error(error);
  }
}

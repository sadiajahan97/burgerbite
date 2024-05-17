export default async function () {
  try {
    const response = await fetch('../data/db.json');
    if (!response.ok) {
      throw new Error('There was a problem in fetching the JSON data.');
    }
    const jsonData = await response.json();
    if (!jsonData) {
      throw new Error('There was a problem in parsing the JSON data.');
    }
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}

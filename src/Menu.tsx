import fetchData from './fetchData';
import MenuItem from './MenuItem';

export default async function () {
  const items = await fetchData();
  if (items) {
    return (
      <ul role='menu'>
        {items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}

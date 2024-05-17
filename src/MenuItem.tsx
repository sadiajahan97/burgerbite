import { MenuItem } from './fetchData';

interface Item {
  item: MenuItem;
}

export default function ({ item }: Item) {
  return (
    <li role='menu-item'>
      <img
        src={`./images/${item.category.replace(' ', '-'.toLowerCase())}/${item.image}`}
        alt={item.image}
      />
      <dl>
        <dt>{item.name}</dt>
        <dd>{item.description}</dd>
        <dd>{item.price}</dd>
      </dl>
    </li>
  );
}

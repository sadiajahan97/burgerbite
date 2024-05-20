import { MenuItemType } from './fetchData';

interface MenuItemProps {
  item: MenuItemType;
}

export default function ({ item }: MenuItemProps) {
  return (
    <li role='menu-item'>
      <figure>
        <img
          src={`/images/${item.category.replace(' ', '-').toLowerCase()}/${item.image}`}
          alt={item.image}
        />
        <figcaption className='offscreen'>{item.name}</figcaption>
      </figure>
      <dl>
        <dt>{item.name}</dt>
        <dd>{item.description}</dd>
        <dd>BDT {item.price}</dd>
      </dl>
    </li>
  );
}

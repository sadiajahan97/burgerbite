import { MenuItemType } from './fetchData';

interface ItemType {
  item: MenuItemType;
}

export default function ({ item }: ItemType) {
  return (
    <li role='menu-item'>
      <figure>
        {item.category === 'Shakes' ? (
          <img
            className='shakes'
            src={`/images/${item.category.replace(' ', '-').toLowerCase()}/${item.image}`}
            alt={item.image}
          />
        ) : (
          <img
            src={`/images/${item.category.replace(' ', '-').toLowerCase()}/${item.image}`}
            alt={item.image}
          />
        )}
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

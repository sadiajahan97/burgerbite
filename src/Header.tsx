import Logo from './Logo';
import Nav from './Nav';

export default function () {
  return (
    <header>
      <h1 className='offscreen'>BurgerBite</h1>
      <Logo />
      <Nav />
    </header>
  );
}

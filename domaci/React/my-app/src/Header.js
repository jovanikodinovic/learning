function Header() {

  return (
    <header className="main-header">

      <a href="https://novakdjokovic.com/" id="logo">
        <img
          src="https://novakdjokovic.com/wp-content/themes/novak2/assets/images/novak-fb-share.png"
          alt="Novak Djokovic's logo" />
      </a>

      <button id='myBtn'

        onClick={event => console.log('Clicked!')}
        type="button">Click me if you like Djokovic!

      </button>

    </header>

  );

}

export default Header;

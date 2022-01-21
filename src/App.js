import "./styles.css";

const links = [
  {
    title: "My resume",
    link:
      "https://drive.google.com/file/d/1lRY9i0CphHXIMiAOTzaI4Py9jXGL470A/view?usp=sharing"
  },
  {
    title: "Dribbble account",
    link: "http://dribbble.com/yatish1606"
  },
  {
    title: "Github account",
    link: "https://github.com/yatish1606"
  },
  {
    title: "My website",
    link: "https://yatishkelkar.netlify.app/"
  },
  {
    title: "GDSC Website",
    link: "https://dscpvgcoet.github.io/#/"
  }
];

export default function App() {
  return (
    <div className="App">
      {/**
        user photo and name
      */}
      <div className="user-profile">
        <img
          src="https://yatishkelkar.netlify.app/static/media/yatish.68ba9365.svg"
          width="100px"
          alt="user"
        />
        <p className="user-name">@yatish.kelkar</p>
      </div>

      {/**
        links
      */}
      <div className="links">
        {links.map(function (link) {
          return <Link link={link.link} title={link.title} />;
        })}
      </div>

      {/**
        linktree logo
      */}
      <img
        src="https://ccsfweb.org/wp-content/uploads/2020/09/chantmagick-linktree-logo-white-e1600973555711.png"
        width="100px"
        alt="linktree"
      />
    </div>
  );
}

function Link(props) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="link-container"
      href={props.link}
    >
      {props.title}
    </a>
  );
}

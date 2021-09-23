import './App.css';

const emojiList = [
  {
    value: '👊',
    name: 'punch'
  },
  {
    value: '🤘',
    name: 'rocking'
  },
  {
    value: '👋',
    name: 'greetings'
  }
]

const isLoggedIn = true;

const App = ()  => {
  const greeting = "greeting";
  const displayEmojiName = event => alert(event.target.id);
  return (
    <div className="container">
      <h1 id={greeting}>Hello World</h1>
      <p>I am Wrinting JSX</p>
      {isLoggedIn && (
        <ul>
        {emojiList.map(emoji => (
          <li>
            <button onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.value}</span>
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default App;

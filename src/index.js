import React from 'react';
import ReactDOM from 'react-dom';
import { getLinkPreview } from 'link-preview-js';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import {
  Wrapper, GoogleFonts, Container, Header, TitleContainer, Row, Title, SettingsWrapper, 
  Form, SwitchContainer, Switch, RadioGroup, Radio, Label, Filter, Loading,
  List, ListItem, ImageContainer, Image, LinkContainer, Link, ButtonWrapper, Button
} from './styles';

function Thumbnail({ url, alt }) {
  const [image, setImage] = React.useState('');

  React.useEffect(() => {
    async function getImage() {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const response = await getLinkPreview(proxyUrl+url);
      if (response && await response.images.length && !response.images[0].includes(proxyUrl)) {
        const { images } = response;
        setImage(images[0]);
      } else {
        setImage('https://icons.iconarchive.com/icons/thehoth/seo/256/seo-article-icon.png');
      }
    }
    getImage();
  }, [url]);

  return (
    <Image src={image} alt={alt} />
  );
}

function ThemeSwitcher({ theme, setTheme }) {
  let newTheme;
  if (theme === 'Light') {
    newTheme = 'Dark';
  } if (theme === 'Dark') {
    newTheme = 'Light';
  }
  return (
    <Form>
      <SwitchContainer>
        <Switch type="checkbox" id="switchTheme" checked={theme === 'Dark'} onChange={() => setTheme(newTheme)} />
        <Label for="switchTheme" theme={theme}>Selected theme: {theme}</Label>
      </SwitchContainer>
    </Form>
  );
}

function OddEvenFilter({ oddEvenFilter, setOddEvenFilter, theme }) {
  return (
    <Form>
      <RadioGroup>
        <Radio>
          <input
            type="radio"
            name="odd-even"
            value="0"
            id="button1"
            checked={oddEvenFilter === 0}
            onClick={() => setOddEvenFilter(0)}
          />
          <Label for="button1" theme={theme}>All</Label>
        </Radio>
        <Radio>
          <input
            type="radio"
            name="odd-even"
            value="1"
            id="button2"
            checked={oddEvenFilter === 1}
            onClick={() => setOddEvenFilter(1)}
          />
          <Label for="button2" theme={theme}>Odd</Label>
        </Radio>
        <Radio>
          <input
            type="radio"
            name="odd-even"
            value="2"
            id="button3"
            checked={oddEvenFilter === 2}
            onClick={() => setOddEvenFilter(2)}
          />
          <Label for="button3" theme={theme}>Even</Label>
        </Radio>
      </RadioGroup>
    </Form>
  );
}

function HackerNewsPosts({ posts, filter, oddEvenFilter, theme }) {
  if (posts.length === 0) {
    return <Loading theme={theme}>Loading...</Loading>;
  }

  return (
    <List>
      {posts.map((post, index) => {
        if (post && post.title && (post.url || post.text)) {
          const lowerCaseTitle = post.title.toLowerCase();
          if (
            (!lowerCaseTitle.includes(filter)) ||
            (oddEvenFilter === 1 && ((index + 3) % 2 === 0)) ||
            (oddEvenFilter === 2 && ((index + 3) % 2 === 1))
          ) {
            return null;
          }
          return (
            <ListItem key={post.id}>
              <ImageContainer>
                <Thumbnail url={post.url} alt={post.title} />
              </ImageContainer>
              <LinkContainer>
                <Link theme={theme} href={post.url}>{index + 1}. {post.title}</Link>
              </LinkContainer>
            </ListItem>
          )
        }
        return null;
      })}
    </List>
  );
}

function App() {
  const [posts, setPosts] = React.useState([]);
  const [theme, setTheme] = React.useState('Light');
  const [oddEvenFilter, setOddEvenFilter] = React.useState(0);
  const [filter, setFilter] = React.useState('');
  const [quantity, setQuantity] = React.useState(30);

  React.useEffect(() => {
    async function getTopStories() {
      const url = "https://hacker-news.firebaseio.com/v0/newstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, quantity)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }
    getTopStories();
  }, [quantity]);

  function loadMorePosts() {
    let updatedQuantity = quantity + 30;
    setQuantity(updatedQuantity);
  }

  useBottomScrollListener(loadMorePosts);

  function filterPosts(event) {
    const value = event.target.value.toLowerCase();
    setFilter(value);
  }

  return (
    <Wrapper theme={theme}>
      <GoogleFonts />
      <Header theme={theme}>
        <TitleContainer>
          <Row>
            <Title theme={theme}>HackerNews</Title>
          </Row>
        </TitleContainer>
      </Header>
      <Container theme={theme}>
        <Row>
          <SettingsWrapper>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <OddEvenFilter oddEvenFilter={oddEvenFilter} setOddEvenFilter={setOddEvenFilter} theme={theme} />
          </SettingsWrapper>
          <Filter placeholder="Filter" theme={theme} onChange={e => filterPosts(e)} />
          <HackerNewsPosts posts={posts} filter={filter} oddEvenFilter={oddEvenFilter} theme={theme} />
          <ButtonWrapper>
            <Button theme={theme} onClick={() => loadMorePosts()}>
              Load more posts
            </Button>
          </ButtonWrapper>
        </Row>
      </Container>
    </Wrapper>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
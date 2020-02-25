import React from 'react';
import ReactDOM from 'react-dom';
import { getLinkPreview } from 'link-preview-js';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import {
  GoogleFonts, Container, Title, RadioGroup, Radio, Label, Filter,
  List, ListItem, ImageContainer, Image, LinkContainer, Link, Button
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

function OddEvenFilter({ oddEvenFilter, setOddEvenFilter }) {

  return (
    <form>
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
          <Label for="button1">All</Label>
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
          <Label for="button2">Odd</Label>
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
          <Label for="button3">Even</Label>
        </Radio>
      </RadioGroup>
    </form>
  );
}

function HackerNewsPosts({ posts, filter, oddEvenFilter }) {
  if (posts.length === 0) {
    return <div>Loading...</div>;
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
                <Link href={post.url}>{index + 1}. {post.title}</Link>
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
    <div className="App">
      <GoogleFonts />
      <Container>
        <Title>HackerNews</Title>
        <OddEvenFilter oddEvenFilter={oddEvenFilter} setOddEvenFilter={setOddEvenFilter} />
        <Filter placeholder="Filter" onChange={e => filterPosts(e)} />
        <HackerNewsPosts posts={posts} filter={filter} oddEvenFilter={oddEvenFilter} />
        <Button onClick={() => loadMorePosts()}>
          Load more posts
        </Button>
      </Container>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
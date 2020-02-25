import React from 'react';
import ReactDOM from 'react-dom';
import { getLinkPreview } from 'link-preview-js';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import {
  GoogleFonts, Container, Title, Filter, List, ListItem,
  ImageContainer, BaseImage, LinkContainer, Link, Button
} from './styles';

function Image({ url, alt }) {
  const [image, setImage] = React.useState('');

  React.useEffect(() => {
    async function getImage() {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const response = await getLinkPreview(proxyUrl+url);
      if (response && response.images.length) {
        const { images } = response;
        console.log('images: ', images);
        setImage(images[0]);
      } else {
        setImage('https://icons.iconarchive.com/icons/thehoth/seo/256/seo-article-icon.png');
      }
    }
    getImage();
  }, [url]);

  return (
    <BaseImage src={image} alt={alt} />
  );
}

function HackerNewsPosts({ posts, filter }) {
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <List>
      {posts.map(post => {
        if (post && post.title && post.url) {
          const lowerCaseTitle = post.title.toLowerCase();
          if (!lowerCaseTitle.includes(filter)) {
            return null;
          }
          return (
            <ListItem key={post.id}>
              <ImageContainer>
                <Image url={post.url} alt={post.title} />
              </ImageContainer>
              <LinkContainer>
                <Link href={post.url}>{post.title}</Link>
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
        <Filter placeholder="Filter" onChange={e => filterPosts(e)} />
        <HackerNewsPosts posts={posts} filter={filter} />
        <Button onClick={() => loadMorePosts()}>
          Load more posts
        </Button>
      </Container>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
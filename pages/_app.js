import "../styles/customTheme.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export async function getinitialProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014"
  );
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
export default MyApp;

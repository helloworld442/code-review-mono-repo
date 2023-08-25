import { ReviewHead, ReviewList, ReviewTag, ReviewTemplate } from "../component/review";
import { Header, Layout } from "../component/ui";

const Home = () => {
  return (
    <Layout>
      <Header isBackground />
      <ReviewTemplate>
        <ReviewTag />
        <ReviewHead />
        <ReviewList />
      </ReviewTemplate>
    </Layout>
  );
};

export default Home;

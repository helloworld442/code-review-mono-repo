import { ReviewHead, ReviewList, ReviewTemplate } from "../component/review";
import { Header, Layout } from "../component/ui";

const Home = () => {
  return (
    <Layout>
      <Header isBackground />
      <ReviewTemplate>
        <ReviewHead />
        <ReviewList />
      </ReviewTemplate>
    </Layout>
  );
};

export default Home;

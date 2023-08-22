import { ReviewHead, ReviewList, ReviewTemplate } from "../features/review/component";
import { Header, Layout } from "../features/ui";

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

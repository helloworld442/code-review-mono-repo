import { ReviewHead, ReviewTemplate } from "../features/review/component";
import { Header, Layout } from "../features/ui";

const Home = () => {
  return (
    <Layout>
      <Header />
      <ReviewTemplate>
        <ReviewHead />
      </ReviewTemplate>
    </Layout>
  );
};

export default Home;

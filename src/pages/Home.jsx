import {
  ReviewBanner,
  ReviewHead,
  ReviewList,
  ReviewRank,
  ReviewTemplate,
} from "../component/review";
import { Header, Layout } from "../component/ui";

const Home = () => {
  return (
    <Layout>
      <Header isBackground />
      <ReviewTemplate>
        <ReviewBanner />
        <ReviewRank />
        <ReviewHead />
        <ReviewList />
      </ReviewTemplate>
    </Layout>
  );
};

export default Home;

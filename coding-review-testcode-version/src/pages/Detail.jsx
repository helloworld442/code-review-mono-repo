import { ReviewDetail, ReviewTemplate } from "../components/review";
import { Footer, Header, Layout } from "../components/ui";

const Detail = () => {
  return (
    <Layout>
      <Header />
      <ReviewTemplate>
        <ReviewDetail />
      </ReviewTemplate>
      <Footer />
    </Layout>
  );
};

export default Detail;

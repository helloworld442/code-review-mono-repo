import { ReviewDetail, ReviewTemplate } from "../component/review";
import { Footer, Header, Layout } from "../component/ui";

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

import { ReviewDetail, ReviewTemplate } from "../component/review";
import { Header, Layout } from "../component/ui";

const Detail = () => {
  return (
    <Layout>
      <Header />
      <ReviewTemplate>
        <ReviewDetail />
      </ReviewTemplate>
    </Layout>
  );
};

export default Detail;

import { ReviewForm, ReviewTemplate } from "../component/review";
import { Header, Layout } from "../component/ui";

const Write = () => {
  return (
    <Layout>
      <Header />
      <ReviewTemplate>
        <ReviewForm />
      </ReviewTemplate>
    </Layout>
  );
};

export default Write;

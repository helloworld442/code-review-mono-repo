import { ReviewForm, ReviewTemplate } from "../features/review";
import { Header, Layout } from "../features/ui";

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

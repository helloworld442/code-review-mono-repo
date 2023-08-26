import { ReviewForm, ReviewTemplate } from "../component/review";
import { Footer, Header, Layout } from "../component/ui";

const Write = () => {
  return (
    <Layout>
      <Header />
      <ReviewTemplate>
        <ReviewForm />
      </ReviewTemplate>
      <Footer />
    </Layout>
  );
};

export default Write;

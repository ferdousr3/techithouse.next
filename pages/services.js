import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle/PageTitle";



const services = () => {
  return (
    <>
      <Layout
        // SEO
        title="Services - techithouse"
      >
        {/* page title */}
        <PageTitle
          pagename="Services"
          title="Home"
          subtitle="Services"
        />


      </Layout>
    </>
  );
};

export default services;
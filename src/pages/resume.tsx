import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { NextPage, GetStaticProps } from "next";
import { Content } from "@prismicio/client";
import Layout from "../components/PageLayout";
import StaticDataContext, {
  StaticDataContextType,
} from "../components/StaticDataContext";
import SEO from "../components/Seo";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type PageProps = {
  staticDataContext: StaticDataContextType;
};

const Resume: NextPage<PageProps> = ({ staticDataContext }) => {
  const link = staticDataContext.resumeData?.resume_doc
    ? prismicH.asLink(staticDataContext.resumeData?.resume_doc)
    : "";

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (link) {
        router.push(link);
      }
    }, 500);
  }, [link, router]);

  return (
    <StaticDataContext.Provider value={staticDataContext}>
      <Layout>
        <SEO />
        Redirecting to resume...
        {/* TODO: add some loading animation */}
      </Layout>
    </StaticDataContext.Provider>
  );
};

export default Resume;

export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
  previewData,
}) => {
  const client = createClient({ previewData });

  const uid = params?.pagePath?.[params.pagePath.length - 1] || "home";
  const page = await client.getByUID("page", uid);

  let seoDataDoc: Content.SeoDataDocument | null = null;
  let resumeDoc: Content.ResumeDocument | null = null;

  try {
    seoDataDoc = await client.getSingle("seo_data");
    resumeDoc = await client.getSingle("resume");
  } catch (error) {
    // No external links document found
    console.log("error", error);
  }

  return {
    props: {
      page,
      staticDataContext: {
        externalLinksData: null,
        seoData: seoDataDoc?.data || null,
        resumeData: resumeDoc?.data || null,
      },
    },
  };
};

import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices";
import { GetStaticProps } from "next";
import { createClient } from "../prismicio";
import { Content } from "@prismicio/client";
import StaticDataContext, {
  StaticDataContextType,
} from "../components/StaticDataContext";

type Props = {
  staticDataContext: StaticDataContextType;
};

const SliceSimulatorPage: React.FunctionComponent<Props> = ({
  staticDataContext,
}) => (
  <StaticDataContext.Provider value={staticDataContext}>
    <SliceSimulator
      sliceZone={(props) => <SliceZone {...props} components={components} />}
      state={{}}
    />
  </StaticDataContext.Provider>
);

export default SliceSimulatorPage;

export const getStaticProps: GetStaticProps<Props> = async ({
  previewData,
}) => {
  if (process.env.NODE_ENV === "production") {
    return {
      notFound: true,
    };
  }

  const client = createClient({ previewData });

  let externalLinksDoc: Content.ExternalLinksDocument | null = null;

  try {
    externalLinksDoc = await client.getSingle("external_links");
  } catch (error) {
    // No external links document found
    console.log("error", error);
  }

  return {
    props: {
      staticDataContext: {
        externalLinksData: externalLinksDoc?.data || null,
      },
    },
  };
};

import { Content } from "@prismicio/client";
import React from "react";

export type StaticDataContextType = {
  externalLinksData?: Content.ExternalLinksDocumentData | null;
};

const StaticDataContext = React.createContext<StaticDataContextType>({});

export default StaticDataContext;

export const useStaticDataContext = () => React.useContext(StaticDataContext);

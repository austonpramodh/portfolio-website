import { Box, BoxProps } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicImageProps } from "@prismicio/react";
import { ReactSVG } from "react-svg";

type Props = {
  field: PrismicImageProps["field"];
} & BoxProps;

const ImageLoader: React.FunctionComponent<Props> = ({
  field,
  ...restProps
}) => {
  if (!field?.url) {
    return null;
  }

  const isSVG = field?.url?.includes(".svg");

  return (
    <Box {...restProps}>
      {isSVG ? (
        <>
          <ReactSVG src={field.url} />
        </>
      ) : (
        <PrismicNextImage field={field} />
      )}
    </Box>
  );
};

export default ImageLoader;

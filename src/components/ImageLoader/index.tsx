import { Box, BoxProps } from "@mui/material";
import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next";
import { ReactSVG } from "react-svg";

type Props = {
  field: PrismicNextImageProps["field"];
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
          <ReactSVG
            src={field.url}
            beforeInjection={(svg) => {
              svg.setAttribute("width", "inherit");
              svg.setAttribute("height", "inherit");
            }}
          />
        </>
      ) : (
        <PrismicNextImage field={field} />
      )}
    </Box>
  );
};

export default ImageLoader;

import React from "react";
import ImageSlice, { ImageSliceType, ImageSliceProps } from "./Components/Image";
import TextSlice, { TextSliceProps, TextSliceType } from "./Components/Text";
import EmbedLinkSlice, { EmbedLinkSliceProps, EmbedLinkSliceType } from "./Components/EmbedLink";
import CodeBlockSlice, { CodeBlockSliceProps, CodeBlockSliceType } from "./Components/CodeBlock";

export type SliceType = TextSliceProps | ImageSliceProps | EmbedLinkSliceProps | CodeBlockSliceProps; //ParagraphsSliceProps | ImagesSliceProps;

const GetSliceCompoenent = (slice: SliceType) => {
    switch (slice.slice_type) {
        case TextSliceType:
            return <TextSlice key={slice.id} {...slice} />;
        case ImageSliceType:
            return <ImageSlice key={slice.id} {...slice} />;
        case EmbedLinkSliceType:
            return <EmbedLinkSlice key={slice.id} {...slice} />;
        case CodeBlockSliceType:
            return <CodeBlockSlice key={slice.id} {...slice} />;
        default:
            return <div>Slice Needs to be created : {JSON.stringify(slice)}</div>;
    }
};

export default GetSliceCompoenent;

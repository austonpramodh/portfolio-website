import React from "react";
import ImageSlice, { ImageSliceType, ImageSliceProps } from "./Components/Image";
import TextSlice, { TextSliceProps, TextSliceType } from "./Components/Text";
import EmbedLinkSlice, { EmbedLinkSliceProps, EmbedLinkSliceType } from "./Components/EmbedLink";
import CodeBlockSlice, { CodeBlockSliceProps, CodeBlockSliceType } from "./Components/CodeBlock";
import QuoteSlice, { QuoteSliceProps, QuoteSliceType } from "./Components/Quote";
import RichTextSlice, { RichTextSliceProps, RichTextSliceType } from "./Components/RichText";

export type SliceType =
    | TextSliceProps
    | ImageSliceProps
    | EmbedLinkSliceProps
    | CodeBlockSliceProps
    | QuoteSliceProps
    | RichTextSliceProps;

const GetSliceCompoenent = (slice: SliceType, index: number) => {
    switch (slice.slice_type) {
        case TextSliceType:
            return <TextSlice key={slice.id} {...slice} />;
        case ImageSliceType:
            return <ImageSlice key={slice.id} {...slice} />;
        case EmbedLinkSliceType:
            return <EmbedLinkSlice key={slice.id} {...slice} />;
        case CodeBlockSliceType:
            return <CodeBlockSlice key={slice.id} {...slice} />;
        case QuoteSliceType:
            return <QuoteSlice key={slice.id} {...slice} />;
        case RichTextSliceType:
            return <RichTextSlice key={slice.id} {...slice} />;
        default:
            // eslint-disable-next-line no-console
            console.log(`Slice not found for SliceType: ${slice["__typename"]}`, slice);
            return (
                <div key={"unknownSlice" + index}>
                    Slice not found for SliceType : {JSON.stringify(slice["__typename"])}
                </div>
            );
    }
};

export default GetSliceCompoenent;

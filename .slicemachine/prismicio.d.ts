// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for External Links documents */
interface ExternalLinksDocumentData {
    /**
     * External Link field in *External Links*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: external_links.external_link[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    external_link: prismicT.GroupField<Simplify<ExternalLinksDocumentDataExternalLinkItem>>;
}
/**
 * Item in External Links → External Link
 *
 */
export interface ExternalLinksDocumentDataExternalLinkItem {
    /**
     * Label field in *External Links → External Link*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: external_links.external_link[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * link field in *External Links → External Link*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: external_links.external_link[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * icon field in *External Links → External Link*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: external_links.external_link[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
}
/**
 * External Links document from Prismic
 *
 * - **API ID**: `external_links`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExternalLinksDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ExternalLinksDocumentData>, "external_links", Lang>;
/** Content for Navbar documents */
interface NavbarDocumentData {
    /**
     * Items field in *Navbar*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.items[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    items: prismicT.GroupField<Simplify<NavbarDocumentDataItemsItem>>;
}
/**
 * Item in Navbar → Items
 *
 */
export interface NavbarDocumentDataItemsItem {
    /**
     * Label field in *Navbar → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *Navbar → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navbar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavbarDocumentData>, "navbar", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Page Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.page_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    page_title: prismicT.KeyTextField;
    /**
     * Page Description field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.page_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    page_description: prismicT.KeyTextField;
    /**
     * Page Keywords field in *Page*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: page.page_keywords[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    page_keywords: prismicT.GroupField<Simplify<PageDocumentDataPageKeywordsItem>>;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Item in Page → Page Keywords
 *
 */
export interface PageDocumentDataPageKeywordsItem {
    /**
     * keyword field in *Page → Page Keywords*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.page_keywords[].keyword
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    keyword: prismicT.KeyTextField;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroV1Slice | AboutMeSlice | QuickCardsSlice | ContactOptionsSlice | SkillRatingsSlice | ExperiencesSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = ExternalLinksDocument | NavbarDocument | PageDocument;
/**
 * Primary content in AboutMe → Primary
 *
 */
interface AboutMeSliceDefaultPrimary {
    /**
     * Title field in *AboutMe → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: about_me.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *AboutMe → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: about_me.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Resume field in *AboutMe → Primary*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: about_me.primary.resume
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    resume: prismicT.LinkToMediaField;
    /**
     * Lottie field in *AboutMe → Primary*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: about_me.primary.lottie
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    lottie: prismicT.LinkToMediaField;
    /**
     * Section ID field in *AboutMe → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_me.primary.section_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    section_id: prismicT.KeyTextField;
}
/**
 * Item in AboutMe → Items
 *
 */
export interface AboutMeSliceDefaultItem {
    /**
     * keyword field in *AboutMe → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_me.items[].keyword
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    keyword: prismicT.KeyTextField;
}
/**
 * Default variation for AboutMe Slice
 *
 * - **API ID**: `default`
 * - **Description**: `AboutMe`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutMeSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AboutMeSliceDefaultPrimary>, Simplify<AboutMeSliceDefaultItem>>;
/**
 * Slice variation for *AboutMe*
 *
 */
type AboutMeSliceVariation = AboutMeSliceDefault;
/**
 * AboutMe Shared Slice
 *
 * - **API ID**: `about_me`
 * - **Description**: `AboutMe`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutMeSlice = prismicT.SharedSlice<"about_me", AboutMeSliceVariation>;
/**
 * Primary content in ContactOptions → Primary
 *
 */
interface ContactOptionsSliceDefaultPrimary {
    /**
     * Title field in *ContactOptions → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: contact_options.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Section ID field in *ContactOptions → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact_options.primary.section_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    section_id: prismicT.KeyTextField;
}
/**
 * Item in ContactOptions → Items
 *
 */
export interface ContactOptionsSliceDefaultItem {
    /**
     * Icon field in *ContactOptions → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: contact_options.items[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
    /**
     * Title field in *ContactOptions → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: LinkedIn
     * - **API ID Path**: contact_options.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ContactOptions → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact_options.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Link field in *ContactOptions → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: contact_options.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for ContactOptions Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ContactOptions`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactOptionsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ContactOptionsSliceDefaultPrimary>, Simplify<ContactOptionsSliceDefaultItem>>;
/**
 * Slice variation for *ContactOptions*
 *
 */
type ContactOptionsSliceVariation = ContactOptionsSliceDefault;
/**
 * ContactOptions Shared Slice
 *
 * - **API ID**: `contact_options`
 * - **Description**: `ContactOptions`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactOptionsSlice = prismicT.SharedSlice<"contact_options", ContactOptionsSliceVariation>;
/**
 * Primary content in Experiences → Primary
 *
 */
interface ExperiencesSliceDefaultPrimary {
    /**
     * Section ID field in *Experiences → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experiences.primary.section_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    section_id: prismicT.KeyTextField;
}
/**
 * Item in Experiences → Items
 *
 */
export interface ExperiencesSliceDefaultItem {
    /**
     * Header field in *Experiences → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experiences.items[].header
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    header: prismicT.KeyTextField;
    /**
     * Highlighted Header field in *Experiences → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experiences.items[].highlighted_header
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    highlighted_header: prismicT.KeyTextField;
    /**
     * Highlighted Description field in *Experiences → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experiences.items[].highlighted_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    highlighted_description: prismicT.KeyTextField;
    /**
     * Description field in *Experiences → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experiences.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * List Header field in *Experiences → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experiences.items[].list_header
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    list_header: prismicT.KeyTextField;
    /**
     * list field in *Experiences → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experiences.items[].list
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    list: prismicT.KeyTextField;
    /**
     * Type field in *Experiences → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: experiences.items[].type
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    type: prismicT.SelectField<"Work Experience" | "Projects" | "Education">;
}
/**
 * Default variation for Experiences Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Experiences`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExperiencesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ExperiencesSliceDefaultPrimary>, Simplify<ExperiencesSliceDefaultItem>>;
/**
 * Slice variation for *Experiences*
 *
 */
type ExperiencesSliceVariation = ExperiencesSliceDefault;
/**
 * Experiences Shared Slice
 *
 * - **API ID**: `experiences`
 * - **Description**: `Experiences`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExperiencesSlice = prismicT.SharedSlice<"experiences", ExperiencesSliceVariation>;
/**
 * Primary content in HeroV1 → Primary
 *
 */
interface HeroV1SliceDefaultPrimary {
    /**
     * Name field in *HeroV1 → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_v1.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Designation field in *HeroV1 → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_v1.primary.designation
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    designation: prismicT.KeyTextField;
    /**
     * Display Picture field in *HeroV1 → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_v1.primary.display_picture
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    display_picture: prismicT.ImageField<never>;
    /**
     * Section ID field in *HeroV1 → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_v1.primary.section_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    section_id: prismicT.KeyTextField;
}
/**
 * Item in HeroV1 → Items
 *
 */
export interface HeroV1SliceDefaultItem {
    /**
     * Label field in *HeroV1 → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_v1.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *HeroV1 → Items*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_v1.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkToMediaField;
    /**
     * Icon field in *HeroV1 → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_v1.items[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
}
/**
 * Default variation for HeroV1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroV1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroV1SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroV1SliceDefaultPrimary>, Simplify<HeroV1SliceDefaultItem>>;
/**
 * Slice variation for *HeroV1*
 *
 */
type HeroV1SliceVariation = HeroV1SliceDefault;
/**
 * HeroV1 Shared Slice
 *
 * - **API ID**: `hero_v1`
 * - **Description**: `HeroV1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroV1Slice = prismicT.SharedSlice<"hero_v1", HeroV1SliceVariation>;
/**
 * Primary content in QuickCards → Primary
 *
 */
interface QuickCardsSliceDefaultPrimary {
    /**
     * Title field in *QuickCards → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: quick_cards.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Section ID field in *QuickCards → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: quick_cards.primary.section_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    section_id: prismicT.KeyTextField;
}
/**
 * Item in QuickCards → Items
 *
 */
export interface QuickCardsSliceDefaultItem {
    /**
     * Title field in *QuickCards → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: quick_cards.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *QuickCards → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: quick_cards.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Icon field in *QuickCards → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: quick_cards.items[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
}
/**
 * Default variation for QuickCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: `QuickCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuickCardsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<QuickCardsSliceDefaultPrimary>, Simplify<QuickCardsSliceDefaultItem>>;
/**
 * Slice variation for *QuickCards*
 *
 */
type QuickCardsSliceVariation = QuickCardsSliceDefault;
/**
 * QuickCards Shared Slice
 *
 * - **API ID**: `quick_cards`
 * - **Description**: `QuickCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuickCardsSlice = prismicT.SharedSlice<"quick_cards", QuickCardsSliceVariation>;
/**
 * Primary content in SkillRatings → Primary
 *
 */
interface SkillRatingsSliceDefaultPrimary {
    /**
     * Bar Ratings Label field in *SkillRatings → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Technical Skills
     * - **API ID Path**: skill_ratings.primary.bar_ratings_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bar_ratings_label: prismicT.TitleField;
    /**
     * Circular Ratings Label field in *SkillRatings → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: skill_ratings.primary.circular_ratings_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    circular_ratings_label: prismicT.RichTextField;
    /**
     * Section ID field in *SkillRatings → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: skill_ratings.primary.section_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    section_id: prismicT.KeyTextField;
}
/**
 * Item in SkillRatings → Items
 *
 */
export interface SkillRatingsSliceDefaultItem {
    /**
     * label field in *SkillRatings → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: skill_ratings.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * rating field in *SkillRatings → Items*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: skill_ratings.items[].rating
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    rating: prismicT.NumberField;
    /**
     * Rating Type field in *SkillRatings → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: Rating Type
     * - **API ID Path**: skill_ratings.items[].rating_type
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    rating_type: prismicT.SelectField<"Bar Rating" | "Circular Rating">;
}
/**
 * Default variation for SkillRatings Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SkillRatings`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SkillRatingsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SkillRatingsSliceDefaultPrimary>, Simplify<SkillRatingsSliceDefaultItem>>;
/**
 * Slice variation for *SkillRatings*
 *
 */
type SkillRatingsSliceVariation = SkillRatingsSliceDefault;
/**
 * SkillRatings Shared Slice
 *
 * - **API ID**: `skill_ratings`
 * - **Description**: `SkillRatings`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SkillRatingsSlice = prismicT.SharedSlice<"skill_ratings", SkillRatingsSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ExternalLinksDocumentData, ExternalLinksDocumentDataExternalLinkItem, ExternalLinksDocument, NavbarDocumentData, NavbarDocumentDataItemsItem, NavbarDocument, PageDocumentData, PageDocumentDataPageKeywordsItem, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, AboutMeSliceDefaultPrimary, AboutMeSliceDefaultItem, AboutMeSliceDefault, AboutMeSliceVariation, AboutMeSlice, ContactOptionsSliceDefaultPrimary, ContactOptionsSliceDefaultItem, ContactOptionsSliceDefault, ContactOptionsSliceVariation, ContactOptionsSlice, ExperiencesSliceDefaultPrimary, ExperiencesSliceDefaultItem, ExperiencesSliceDefault, ExperiencesSliceVariation, ExperiencesSlice, HeroV1SliceDefaultPrimary, HeroV1SliceDefaultItem, HeroV1SliceDefault, HeroV1SliceVariation, HeroV1Slice, QuickCardsSliceDefaultPrimary, QuickCardsSliceDefaultItem, QuickCardsSliceDefault, QuickCardsSliceVariation, QuickCardsSlice, SkillRatingsSliceDefaultPrimary, SkillRatingsSliceDefaultItem, SkillRatingsSliceDefault, SkillRatingsSliceVariation, SkillRatingsSlice };
    }
}

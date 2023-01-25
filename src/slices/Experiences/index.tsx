import React from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";
import MahaCards from "../../components/MahaCards";
import Styles from "./index.Styles";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { nullsToUndefined } from "../../utils/nullsToUndefined";
import SliceContainer from "../../components/SliceContainer";

export interface ExperienceCard {
  name: string;
  highlightedName?: string;
  description?: string;
  highlightedSubText?: string;
  listItems?: string[];
  listHeader?: string;
}

const experienceMapFunction = (
  experience: Content.ExperiencesSlice["items"][0]
): ExperienceCard =>
  nullsToUndefined({
    name: experience.header || "Header Required!",
    highlightedName: experience.highlighted_header,
    highlightedSubText: experience.highlighted_description,
    listHeader: experience.list_header,
    listItems: experience.list?.split(";"),
    description: experience.description,
  });

type Props = SliceComponentProps<Content.ExperiencesSlice>;

const Experiences: React.FunctionComponent<
  Props & WithStyles<typeof Styles>
> = ({ classes, slice }) => {
  const mutatedExperiences = React.useMemo(() => {
    const experiences: {
      work: ExperienceCard[];
      edu: ExperienceCard[];
      projects: ExperienceCard[];
    } = {
      edu: [],
      projects: [],
      work: [],
    };

    for (const item of slice.items) {
      const experience = experienceMapFunction(item);

      item.type === "Education" && experiences.edu.push(experience);
      item.type === "Projects" && experiences.projects.push(experience);
      item.type === "Work Experience" && experiences.work.push(experience);
    }

    return experiences;
  }, [slice.items]);

  return (
    <SliceContainer
      id={slice.primary.section_id || slice.id}
      name={slice.primary.section_id || slice.id!}
    >
      <Container
        maxWidth="md"
        sx={(theme) => {
          return {
            minHeight: "100vh",
            // Testing
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
            },
          };
        }}
      >
        <div className={classes.sections}>
          <Typography className={classes.header} variant="h4">
            Work Experiences
          </Typography>
          <MahaCards keyHeader="experiences" Cards={mutatedExperiences.work} />
          <Typography
            className={`${classes.header} ${classes.educationHeader}`}
            variant="h4"
          >
            Education
          </Typography>
          <MahaCards keyHeader="eduCards" Cards={mutatedExperiences.edu} />
        </div>
        <div className={classes.sections}>
          <Typography
            className={`${classes.header} ${classes.projectsHeader}`}
            variant="h4"
          >
            Projects
          </Typography>
          <MahaCards
            keyHeader="projectCards"
            Cards={mutatedExperiences.projects}
            headerVariant="h4"
          />
        </div>
      </Container>
    </SliceContainer>
  );
};

export default withStyles(Styles)(Experiences);

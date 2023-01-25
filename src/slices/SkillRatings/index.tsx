import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Container } from "@mui/material";
import SliceContainer from "../../components/SliceContainer";
import { withStyles, WithStyles } from "@mui/styles";
import Styles from "./index.Styles";
import TechnicalSkills, { Skill } from "../../components/TechnicalSkills";
import ProfessionalSkills from "../../components/ProfessionalSkills";

type Props = SliceComponentProps<Content.SkillRatingsSlice>;

const SkillRatings: React.FunctionComponent<
  Props & WithStyles<typeof Styles>
> = ({ slice, classes, index, slices }) => {
  const skills: {
    technicalSkills: Skill[];
    professionSkills: Skill[];
  } = React.useMemo(() => {
    const technicalSkills: Skill[] = [];
    const professionSkills: Skill[] = [];

    for (const item of slice.items) {
      if (!item.label || !item.rating) continue;

      const skill: Skill = {
        name: item.label,
        percentage: item.rating,
      };

      item.rating_type === "Bar Rating" && technicalSkills.push(skill);
      item.rating_type === "Circular Rating" && professionSkills.push(skill);
    }

    return { professionSkills, technicalSkills };
  }, [slice.items]);

  return (
    <SliceContainer id={slice.primary.section_id || slice.id}>
      <Container
        maxWidth="lg"
        sx={(theme) => {
          return {
            // Testing
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
            },
            mb:
              index + 1 === slices.length ? theme.spacing(2) : theme.spacing(8),
            mt: index === 1 ? 0 : theme.spacing(8),
          };
        }}
      >
        {/* <div className={`${classes.container}`}> */}
        <div className={classes.technicalSkillsContainer}>
          <TechnicalSkills skills={skills.technicalSkills} />
        </div>
        <div className={classes.professionalSkillsContainer}>
          <ProfessionalSkills Skills={skills.professionSkills} />
        </div>
        {/* </div> */}
      </Container>
    </SliceContainer>
  );
};

export default withStyles(Styles)(SkillRatings);

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
> = ({ slice, classes }) => {
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

      item.rating_type === "Professional" && professionSkills.push(skill);
      item.rating_type === "Technical" && technicalSkills.push(skill);
    }

    return { professionSkills, technicalSkills };
  }, [slice.items]);

  return (
    <SliceContainer
      id={slice.primary.section_id || slice.id}
      name={slice.primary.section_id || slice.id!}
    >
      <Container
        maxWidth="md"
        sx={() => {
          return {
            minHeight: "100vh",
            // Testing
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "left",
          };
        }}
      >
        <div className={`${classes.container}`}>
          <div className={classes.technicalSkillsContainer}>
            <TechnicalSkills skills={skills.technicalSkills} />
          </div>
          <div className={classes.professionalSkillsContainer}>
            <ProfessionalSkills Skills={skills.professionSkills} />
          </div>
        </div>
      </Container>
    </SliceContainer>
  );
};

export default withStyles(Styles)(SkillRatings);

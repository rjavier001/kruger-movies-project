import { Grid, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import ProfileCard from "../components/common/ProfileCard";
import profileCOnfigs from "../configs/profile.config";
const AboutUsPage = () => {
  return (
    <>
      <Toolbar />
      <Box sx={{ flexGrow: 1, m: 10 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="baseline"
          spacing={2}
        >
          {profileCOnfigs.profile.map((item, index) => (
            <Grid item key={index}>
              <ProfileCard
                name={item.name}
                description={item.description}
                skills={item.skills}
                img={item.img}
                avatarLetter={item.avatarLetter}
                urlLinkedIn={item.urlLinkedIn}
                git={item.git}
                mail={item.mail}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default AboutUsPage;

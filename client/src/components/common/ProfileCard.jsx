import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Card, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const ProfileCard = ({ name, description, skills, img, avatarLetter,urlLinkedIn,git, mail}) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatarLetter}
          </Avatar>
        }
       
        title={name}
        subheader={skills}
      />
      <CardMedia
        component="img"        
        height="194"
        width="200"
        image={img}
        alt="photo"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" align="justify" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={urlLinkedIn} target="_blank">
          <IconButton aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </Link>

        <Link href={git} target="_blank">
          <IconButton aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </Link>
        <Link href={`mailto:${mail}`}>
          <IconButton aria-label="GitHub">
            <MailIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;

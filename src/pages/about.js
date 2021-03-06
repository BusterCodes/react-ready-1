import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
//
import { SocialIcon } from "react-social-icons";

const cards = [
  { title: "ADDRESS", content: ["Level 5", "245 Quigley Blvd", "Azuire"] },
  { title: "PHONE", content: ["+1-555-555-5555", "+1-555-555-5555"] },
  {
    title: "EMAIL",
    content: ["email1@email.com", "email2@email.com", "email3@email.com"],
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <Box sx={{ backgroundColor: "navy", color: "white", height: "90vh" }}>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            ABOUT US
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ textAlign: "center" }}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.title} xs={12} sm={4} md={4}>
              <Divider variant="middle" color="error" sx={{ mb: 2 }} />
              <Typography color="error" variant="h6">
                {card.title}
              </Typography>
              {card.content.map((line, i) => (
                <Typography key={i}>{line}</Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ width: "100%", textAlign: "center", my: 5 }}>
        <Button variant="contained" color="error" sx={{}}>
          Get Directions
        </Button>
      </Box>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <SocialIcon network="twitter" />
        <SocialIcon network="email" />
        <SocialIcon network="facebook" />
        <SocialIcon network="github" />
        <SocialIcon network="linkedin" />
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item> */}
      </Stack>
    </Box>
  );
}

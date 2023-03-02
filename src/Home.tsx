import { Background, Parallax } from "react-parallax";
import { Typography, Stack, Button } from "@mui/material";
import { Arrow } from "./styled-components";
import "./Home.css";

export const HomePage: React.FC = () => {
  return <ParallaxTest />;
};

export const ParallaxTest: React.FC = () => {
  const styles: React.CSSProperties = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  const insideStyles: React.CSSProperties = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "rgba(10,10,10,.5)",
    color: "white",
    borderRadius: "10px",
    // backdropFilter: 'blur(60px)'
  };
  const image1 = "/src/assets/homeBackground.png";
  const image2 =
    "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  return (
    <div style={styles}>
      {/* <Hello name="Parallax" /> */}
      <Parallax bgImage={image1} strength={400}>
        <div
          style={{
            height: "100vh",
          }}
        >
          <div style={insideStyles}>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Typography variant="h1">CS Tutoring at UC Davis</Typography>
              <Button
                variant="contained"
                className="gradient-button"
                sx={{ p: 2 }}
              >
                <Typography variant="h5"> Join our Discord Server!</Typography>
              </Button>
            </Stack>
          </div>
        </div>
      </Parallax>
      {/* <h2>| | |</h2>
            <Parallax bgImage={image3} blur={{ min: 0, max: 3 }}>
                <div style={{ height: '100vh' }}>
                    <div style={insideStyles}>Dynamic Blur</div>
                </div>
            </Parallax> */}
      <h2>| | |</h2>
      <Parallax bgImage={image2} strength={-100}>
        <div style={{ height: "100vh" }}>
          <div style={insideStyles}>Reverse direction</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: "100vh" }}>
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax strength={500}>
        <Background className="custom-bg">
          <div
            style={{
              height: 2000,
              width: 2000,
              backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')",
            }}
          />
        </Background>
        <div>
          <br />
          custom background component
          <br />
          <br />
          custom background component
          <br />
          <br />
          custom background component
          <br />
          <br />
        </div>
      </Parallax>
      <h2>{"\u2728"}</h2>
    </div>
  );
};

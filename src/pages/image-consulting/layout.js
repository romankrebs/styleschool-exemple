import React from "react";
import { Grid, Hidden } from "@material-ui/core";
// import List from "../../components/list";
import TwoBlocks from "../../components/two-blocks-with-bkg";
import { contents } from "./contents";
import { withStyles } from "@material-ui/styles";
import { stylesDark } from "../../components/styles";
import Paragraph from "../../components/p-array";
import Formats from "../../patterns/pattern-fs/formats";
import Papers from "../../patterns/pattern-fs/table";
import Block from "../../patterns/pattern-fs/block";
import { HorizontalForm, VerticalForm } from "../../components/forms";
import Socnet from "../../components/want-to-know";
import Pay from "../../patterns/pattern-fs/pay";
// import { styles } from "../../patterns/pattern-fs/styles";
import Programma from "../../patterns/pattern-fs/programma";
import Button from "../../components/button-with-form";
import ButtonLink from "../../patterns/pattern-fs/button-black";
import ButtonVideo from "../../patterns/pattern-fs/button-video";
import DigitText from "../../patterns/pattern-fs/digit-and-text";
import Video from "../../components/video";
import Space from "../../patterns/pattern-fs/space";
import ScrollableAnchor from "react-scrollable-anchor";
import Tags from "../../patterns/pattern-fs/tags";
// import Spoler from "../../patterns/pattern-fs/spoler";
import TextBlock from "../../patterns/pattern-fs/text-block";
import Slides from "../../patterns/pattern-fs/slides";
import ListInfo from "../../patterns/pattern-fs/list";
import Teacher from "../../patterns/pattern-fs/teacher-element";
import GridDates from "../../patterns/pattern-fs/grid-dates";
import GridProg from "../../patterns/pattern-fs/grid-programma";
import SpolerNew from "../../patterns/pattern-fs/spoler-new";
import Slider from "../../patterns/pattern-fs/slides-images";
import Examples from "../../patterns/pattern-fs/examples";
import Together from "../../patterns/pattern-fs/together";
import Boxes from "../../patterns/pattern-fs/boxes";

const fontTitle = "PT Sans Narrow";
const font = "Roboto"; // "Alegreya Sans";
const fontCursive = {
  fontFamily: "Lora",
  fontStyle: "italic"
};
const sizeButton = "5rem";
const gold = "rgb(122,101,89)";
// const gray = "rgb(220,220,220)";
const styles = {
  ...stylesDark,
  h1: {
    fontFamily: fontTitle,
    fontSize: "4rem",
    fontWeight: 400,
    color: gold,
    textShadow: "4px 4px 0px rgba(0,0,0,0.15)",
    padding: 0,
    margin: 0
  },
  small: {
    fontFamily: font,
    fontSize: "0.8rem",
    color: "rgb(100,100,100)",
    fontWeight: 400,
    padding: 0,
    margin: 0
  },
  h2: {
    fontSize: "1.6em",
    fontWeight: 700,
    color: gold,
    textAlign: "center",
    margin: 0,
    padding: "3.2rem 1rem 1.4rem"
  },
  p: {
    fontFamily: font,
    fontSize: "1rem",
    textAlign: "justify",
    color: "rgb(100,100,100)",
    lineHeight: "1.4rem",
    margin: 0,
    padding: "1rem 0"
  },
  imageHead: {
    margin: 0,
    padding: "3rem 1rem"
  },
  box: {
    maxWidth: "100vw",
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
    // overflow: "hidden"
  },
  programma: {
    borderTop: "1px solid rgb(240,240,240)"
  },
  "@media (max-width: 959px)": {
    imageHead: {
      padding: "1rem 1rem"
    },
    box: {
      padding: "0 1rem"
    },
    h2: {
      paddingLeft: "1rem",
      paddingRight: "1rem"
    },
    programma: {
      borderTop: "none"
    }
  }
};
const wStyles = theme => styles;

function Layout(props) {
  const { classes } = props;

  return (
    <div>
      <Space inside />
      <TwoBlocks
        textOnLeft
        left={
          <div>
            <h1 className={classes.small}>{contents.head.headDescript}</h1>
            <h1 className={classes.h1} style={{ fontFamily: fontTitle }}>
              {contents.head.head}
            </h1>
            <div style={{ height: "2rem" }} />
            <Paragraph
              style={{
                ...styles.p,
                padding: "0.2rem 0",
                color: "rgb(100,100,100)"
              }}
              content={contents.head.descript}
            />
            <div style={{ height: "2rem" }} />
            <Grid container spacing={2}>
              <Grid item xs={4} md={4}>
                <Button white style={{ fontFamily: font }} />
              </Grid>
              <Grid item xs={4} md={4}>
                <ButtonLink
                  link="#continue"
                  text="подробнее"
                  style={{ fontFamily: font, width: sizeButton }}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <ButtonVideo
                  //linkVideo="Fps72ns-MyI"
                  slider={<Slides />}
                  text="видео"
                  style={{ width: sizeButton }}
                />
              </Grid>
            </Grid>
          </div>
        }
        right={
          <figure className={classes.imageHead}>
            <img
              src="/img/fashion-styling/ill-02.jpg"
              alt=""
              style={{
                maxWidth: "100%",
                verticalAlign: "middle"
              }}
            />
            <figcaption
              className={classes.small}
              style={{
                textAlign: "right"
              }}
            >
              {contents.head.imageComment}
            </figcaption>
          </figure>
        }
      />
      <Together>
        <TextBlock content={<p className={classes.p}>{contents.text1}</p>} />
        <Space inside />
        <Tags
          text={
            <span>
              теги:{" "}
              <a href="#programma">
                <span style={{ color: "rgb(180,180,180)" }}>
                  #fashionstyling
                </span>
              </a>{" "}
              <a href="#profession">
                <span style={{ color: "rgb(180,180,180)" }}>
                  #профессиястилист
                </span>
              </a>{" "}
              <a href="#teachers">
                <span style={{ color: "rgb(180,180,180)" }}>#школамоды</span>
              </a>{" "}
              <a href="#review">
                <span style={{ color: "rgb(180,180,180)" }}>
                  #fashionmyprofassion
                </span>
              </a>
            </span>
          }
        />
      </Together>
      <ScrollableAnchor id="continue">
        <div style={{ height: 1 }} />
      </ScrollableAnchor>
      <Boxes outer>
        <GridDates
          date={
            <React.Fragment>
              <DigitText
                digit={contents.screen2.dates[0].d}
                text={contents.screen2.dates[0].t}
                comment={contents.screen2.dates[0].c}
              />
              <DigitText
                digit={contents.screen2.dates[1].d}
                text={contents.screen2.dates[1].t}
                comment={contents.screen2.dates[1].c}
              />
            </React.Fragment>
          }
          video={<Video link="rYKZAsSnC84" h={300} />}
          text={
            <div>
              <p
                className={classes.p}
                style={{
                  ...fontCursive,
                  paddingBottom: 0
                }}
              >
                {contents.screen2.quote.text}
              </p>
              <p
                className={classes.p}
                style={{
                  textAlign: "right",
                  fontFamily: font,
                  paddingTop: 0
                }}
              >
                {contents.screen2.quote.author}
              </p>
              <p
                className={classes.p}
                style={{
                  textAlign: "left",
                  paddingTop: "1rem",
                  fontFamily: font
                }}
              >
                {contents.screen2.text}
              </p>
            </div>
          }
        />
      </Boxes>
      <Space />
      <ScrollableAnchor id="programma">
        <div style={{ height: 1 }} />
      </ScrollableAnchor>
      <TextBlock
        content={
          <div>
            <h2
              style={{
                fontFamily: fontTitle
              }}
              className={classes.h2}
            >
              {contents.text2.title}
            </h2>
            <p className={classes.p}>{contents.text2.text}</p>
          </div>
        }
      />
      <Space inside />
      <GridProg
        programma={
          <Boxes one>
            <Programma
              fontHead={fontTitle}
              styleHead={{
                paddingTop: "1.5rem"
              }}
            />
          </Boxes>
        }
        variants={
          <Boxes two>
            <Papers
              head={contents.variants.head}
              content={contents.variants.content}
              size={12}
              styleHead={{
                textAlign: "right",
                paddingRight: "1rem",
                paddingTop: "1.5rem"
              }}
              styleTitle={{
                textAlign: "right"
              }}
              fontHead={fontTitle}
              styleBox={{
                position: "sticky",
                top: 0
              }}
            />
          </Boxes>
        }
        descript={""}
        // descript={<Tags text={contents.aboutEducation} />}
      />
      <Boxes outer>
        <h2
          style={{
            ...styles.h2,
            textAlign: "center",
            paddingTop: 0,
            fontFamily: fontTitle
          }}
        >
          После обучения. Карьера и бизнес
        </h2>
        <div className={classes.box}>
          <Grid container alignItems="stretch" justify="center" spacing={2}>
            <Grid item xs={12} md={4}>
              <Video
                link="0s4k1IH3Pik"
                w={300}
                h={300}
                style={{
                  margin: "0 auto",
                  width: "max-content"
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Video
                link="gZeWO85gha0"
                w={300}
                h={300}
                style={{
                  margin: "0 auto",
                  width: "max-content"
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Video
                link="npJ2B4syBMk"
                w={300}
                h={300}
                style={{
                  margin: "0 auto",
                  width: "max-content"
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Boxes>
      <ScrollableAnchor id="profession">
        <div style={{ height: 1 }} />
      </ScrollableAnchor>
      <Together>
        <TextBlock
          content={
            <div>
              <h2
                style={{
                  ...styles.h2,
                  textAlign: "left",
                  paddingTop: 0,
                  paddingLeft: 0,
                  fontFamily: fontTitle
                }}
              >
                {contents.aboutProfeshion.title}
              </h2>
              <SpolerNew
                short={contents.aboutProfeshion.short}
                detail={contents.aboutProfeshion.detail.map((el, k) => (
                  <p className={classes.p} key={k}>
                    {el}
                  </p>
                ))}
              />
            </div>
          }
        />
        <Boxes middle>
          <TextBlock
            content={
              <div>
                <h2
                  className={classes.h2}
                  style={{
                    fontFamily: fontTitle,
                    paddingLeft: 0,
                    paddingTop: 0,
                    textAlign: "left"
                  }}
                >
                  Принципы обучения
                </h2>
                <ListInfo arr={contents.principes} />
              </div>
            }
          />
        </Boxes>
      </Together>
      <Boxes outer>
        <Formats
          head={contents.formats.head}
          content={contents.formats.content}
        />
      </Boxes>
      <Boxes outer>
        <Pay />
      </Boxes>
      <Boxes outer>
        <h2
          className={classes.h2}
          style={{
            fontFamily: fontTitle
          }}
        >
          Получите квалифицированную консультацию специалиста учебного отдела
        </h2>
        <Hidden mdUp>
          <VerticalForm target="send_form_fashion_styling_complete" />
        </Hidden>
        <Hidden smDown>
          <HorizontalForm target="send_form_fashion_styling_complete" />
        </Hidden>
      </Boxes>
      <ScrollableAnchor id="teachers">
        <div style={{ height: 1 }}> </div>
      </ScrollableAnchor>
      <Together>
        <h2 className={classes.h2} style={{ fontFamily: fontTitle }}>
          Преподаватели
        </h2>
        {contents.teachers.map((el, key) => (
          <div>
            <TwoBlocks
              left={key % 2 ? Teacher(el).text : Teacher(el).image}
              right={key % 2 ? Teacher(el).image : Teacher(el).text}
              textOnLeft={key % 2 ? true : false}
            />
            <Space inside />
          </div>
        ))}
        {/* <Papers head={false} content={contents.teachers2} size={4} /> */}
        <Space after />
        <ScrollableAnchor id="review">
          <div style={{ height: 1 }}> </div>
        </ScrollableAnchor>
        <Boxes middle>
          <Block title={contents.review.head} text={contents.review.text} />
        </Boxes>
        <Boxes middle>
          <Examples />
        </Boxes>
      </Together>
      <Boxes outer>
        <h2 className={classes.h2} style={{ fontFamily: fontTitle }}>
          О школе
        </h2>
        <Slider slides={contents.reviewImgs} autoplay playSpeed={5000} />
      </Boxes>
      <Boxes outer>
        <Socnet target="fashion_styling_complete" noHead />
      </Boxes>
      <div style={styles.space} />
    </div>
  );
}

export default withStyles(wStyles)(Layout);

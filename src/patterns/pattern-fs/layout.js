import React from "react";
import { Grid, Hidden, Paper } from "@material-ui/core";
import TwoBlocks from "../../components/two-blocks-with-bkg";
import { withStyles } from "@material-ui/styles";
import { stylesDark } from "../../components/styles";
import Paragraph from "../../components/p-array";
import Formats from "./formats";
import Papers from "./table";
import Block from "./block";
import { HorizontalForm, VerticalForm } from "../../components/forms";
import Socnet from "../../components/want-to-know";
import Pay from "./pay";
// import List from "../../components/list";
// import { styles } from "./styles";
// import VideosTree from "./videos-tree";
// import Spoler from "./spoler";
// import Slider from "./slides-images";
import Programma from "./programma";
import Button from "../../components/button-with-form";
import ButtonLink from "./button-black";
import ButtonVideo from "./button-video";
import DigitText from "./digit-and-text";
import Video from "../../components/video";
import Space from "./space";
import ScrollableAnchor from "react-scrollable-anchor";
import Tags from "./tags";
import TextBlock from "./text-block";
import Slides from "./slides";
import SliderInHeader from "./slider-in-header";
import ListInfo from "./list";
import Teacher from "./teacher-element";
import GridDates from "./grid-dates";
import GridProg from "./grid-programma";
import SpolerNew from "./spoler-new";
import Examples from "./examples";
import Together from "./together";
import Boxes from "./boxes";

const fontTitle = "PT Sans Narrow";
const font = "Roboto"; // "Alegreya Sans";
const fontCursive = {
  fontFamily: "Lora",
  fontStyle: "italic"
};
const sizeButton = "5rem";
const gold = "rgb(122,101,89)";
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
  imageHeadPicture: {
    maxWidth: "100%",
    verticalAlign: "middle"
  },
  box: {
    maxWidth: "100vw",
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  },
  programma: {
    borderTop: "1px solid rgb(240,240,240)"
  },
  imageDate: {
    margin: "0.25rem",
    maxWidth: 500
  },
  "@media (max-width: 959px)": {
    imageHead: {
      padding: "1rem 1rem"
    },
    imageHeadPicture: {
      width: 280
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
    },
    imageDate: {
      margin: 0,
      width: 280
    }
  }
};
const wStyles = theme => styles;

function Layout(props) {
  const { classes } = props;
  const contents = props.content;

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
            {contents.head.headAfterDescript ? (
              <h1 className={classes.small}>
                {contents.head.headAfterDescript}
              </h1>
            ) : null}
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
                  link="#programma"
                  text="программа"
                  style={{ fontFamily: font, width: sizeButton }}
                />
              </Grid>
              {contents.head.noVideo ? null : (
                <Grid item xs={4} md={4}>
                  <ButtonVideo
                    linkVideo={
                      contents.head.video ? contents.head.video : false
                    }
                    slider={
                      contents.head.video ? (
                        false
                      ) : (
                        <Slides videos={contents.videos} />
                      )
                    }
                    text="видео"
                    style={{ width: sizeButton }}
                  />
                </Grid>
              )}
            </Grid>
          </div>
        }
        right={
          contents.head.slider ? (
            <div className={classes.imageHead}>
              <SliderInHeader slides={contents.head.slides} />
            </div>
          ) : (
            <figure
              className={classes.imageHead}
              style={{ ...contents.head.styleImageBox }}
            >
              <img
                src={contents.head.imageSource}
                alt=""
                style={{
                  ...contents.head.styleImage
                }}
                className={classes.imageHeadPicture}
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
          )
        }
      />
      <Together>
        <TextBlock content={<p className={classes.p}>{contents.text1}</p>} />
        <Space inside />
        <Tags text={contents.tags1} />
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
              {contents.screen2.dates[1] ? (
                <DigitText
                  digit={contents.screen2.dates[1].d}
                  text={contents.screen2.dates[1].t}
                  comment={contents.screen2.dates[1].c}
                />
              ) : null}
            </React.Fragment>
          }
          video={
            contents.screen2.video ? (
              <Video link={contents.screen2.video} h={300} />
            ) : (
              <div
                style={{
                  padding: "0.5rem"
                }}
              >
                <img
                  src={contents.screen2.image.source}
                  alt={contents.screen2.image.comment}
                  className={classes.imageDate}
                />
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "0.8rem",
                    color: "rgb(80,80,80)",
                    textAlign: "right"
                  }}
                >
                  {contents.screen2.image.comment}
                </p>
              </div>
            )
          }
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
          image={contents.screen2.image ? true : false}
        />
      </Boxes>
      <Space />
      <ScrollableAnchor id="programma">
        <div style={{ height: 1 }} />
      </ScrollableAnchor>
      <GridProg
        programma={
          <Boxes one>
            <Programma
              fontHead={fontTitle}
              styleHead={{
                paddingTop: "1.5rem"
              }}
              head={contents.programma.head ? contents.programma.head : false}
              content={contents.programma.content || contents.programma}
            />
          </Boxes>
        }
        variants={
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
        }
        descript={""}
        // descript={<Tags text={contents.aboutEducation} />}
      />
      {contents.afterEducation ? (
        <Boxes outer>
          <ScrollableAnchor id="career">
            <div style={{ height: 1 }} />
          </ScrollableAnchor>
          <h2
            style={{
              ...styles.h2,
              textAlign: "center",
              paddingTop: 0,
              fontFamily: fontTitle
            }}
          >
            {contents.afterEducation.head}
          </h2>
          <div className={classes.box}>
            <Grid container alignItems="stretch" justify="center" spacing={2}>
              {contents.afterEducation.videos.map((el, k) => (
                <Grid item xs={12} md={4} key={k}>
                  <Video
                    link={el}
                    w={300}
                    h={300}
                    style={{
                      margin: "0 auto",
                      width: "max-content"
                    }}
                  />
                </Grid>
              ))}
              <Grid item xs={12} md={10}>
                <p className={classes.p} style={{ textAlign: "center" }}>
                  Подписывайтесь на Youtube канал ВШСДТ ТВ:
                  <br />
                  интервью с преподавателями, экспертами, выпускниками, открытые
                  лекции, обзоры трендов
                </p>
                <p className={classes.p} style={{ textAlign: "center" }}>
                  <a href="https://www.youtube.com/channel/UC8ByVFm0GkcauK5h_t2BTwQ">
                    Перейти на Youtube канал &gt;&gt;&gt;
                  </a>
                </p>
              </Grid>
            </Grid>
          </div>
        </Boxes>
      ) : null}
      <ScrollableAnchor id="teachers">
        <div style={{ height: 1 }}> </div>
      </ScrollableAnchor>
      <Together>
        <h2 className={classes.h2} style={{ fontFamily: fontTitle }}>
          Преподаватели
        </h2>
        {contents.teachers.map((el, key) => (
          <div key={key}>
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
        <Pay content={contents.pay} pay={contents.countPay} />
        <a href="#formats">
          <p
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "1rem",
              color: "rgb(110,110,110)",
              paddingTop: "1rem"
            }}
          >
            <sup>*</sup>
            Подробнее о форматах обучения &gt;&gt;&gt;
          </p>
        </a>
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
        <Boxes outer>
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
                <div className={classes.p}>{contents.text2.text}</div>
              </div>
            }
          />
        </Boxes>
      </Together>
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
                detail={
                  contents.aboutProfeshion.detail
                    ? contents.aboutProfeshion.detail.map((el, k) => (
                        <div className={classes.p} key={k}>
                          {el}
                        </div>
                      ))
                    : false
                }
              />
            </div>
          }
        />
      </Together>
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
      <ScrollableAnchor id="formats">
        <div style={{ height: 1 }}> </div>
      </ScrollableAnchor>
      <Boxes outer>
        <Formats
          head={contents.formats.head}
          content={contents.formats.content}
        />
      </Boxes>
      {contents.info ? (
        <Boxes outer>
          <h2 className={classes.h2} style={{ fontFamily: fontTitle }}>
            {contents.info.head}
          </h2>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: "1rem" }}>
                <Grid container>
                  <Grid item xs={2} md={1}>
                    {contents.info.iconDocs}
                  </Grid>
                  <Grid item xs={10} md={11}>
                    <a href="/educationdoc" target="_blank">
                      <span style={{ color: "rgb(100,100,100)" }}>
                        Порядок заключения договора и зачисления на обучение
                      </span>
                    </a>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: "1rem" }}>
                <Grid container>
                  <Grid item xs={2} md={1}>
                    {contents.info.iconMonitor}
                  </Grid>
                  <Grid item xs={10} md={11}>
                    <a href="/educationonline" target="_blank">
                      <span style={{ color: "rgb(100,100,100)" }}>
                        Особенности реализации программ дистанционного обучения
                      </span>
                    </a>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Boxes>
      ) : null}
      <Together>
        <ScrollableAnchor id="review">
          <div style={{ height: 1 }}> </div>
        </ScrollableAnchor>
        {contents.review ? (
          <Boxes middle>
            <Block title={contents.review.head} text={contents.review.text} />
          </Boxes>
        ) : null}
        {props.notExample ? null : (
          <Boxes middle>
            <Examples content={contents.examples} />
          </Boxes>
        )}
      </Together>
      {/* {contents.videosAfter ? (
        <Boxes outer>
          <div className={classes.box}>
            <Grid container alignItems="stretch" justify="center" spacing={2}>
              {contents.videosAfter.map((el, k) => (
                <Grid item xs={12} md={4} key={k}>
                  <Video
                    link={el}
                    w={300}
                    h={300}
                    style={{
                      margin: "0 auto",
                      width: "max-content"
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Boxes>
      ) : null}
      {props.notAbout ? null : (
        <Boxes outer>
          <h2 className={classes.h2} style={{ fontFamily: fontTitle }}>
            О школе
          </h2>
          <Slider slides={contents.reviewImgs} autoplay playSpeed={5000} />
        </Boxes>
      )} */}
      <Boxes outer>
        <Socnet target="fashion_styling_complete" noHead />
      </Boxes>
      <div style={styles.space} />
    </div>
  );
}

export default withStyles(wStyles)(Layout);

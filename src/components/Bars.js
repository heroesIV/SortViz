import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    margin: "10px",
  },
  sliderContainer: {
    padding: theme.spacing(1),
    margin: "auto",
    width: "100%",
  },
  sliderItem: {
    // padding: theme.spacing(2),
  },
  sliderTypoStyles: {
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  paperStyle: {
    padding: theme.spacing(2),
    maxHeight: "100%",
    overflow: "auto",
  },
  barsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "360px",
    // width: "90%",
    margin: "auto",
    // padding: theme.spacing(2),
  },
  bar: {
    margin: "2px",
    width: "20px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px 20px 0 0",
  },
  infoContainer: {
    height: "360px",
  },
}));

export default function Bars() {
  const [length, setLength, array, setArray, ogArray, setOgArray] = useContext(
    DataContext
  );
  const classes = useStyles();

  const makeArray = () => {
    const newArray = Array.from(Array(length), () =>
      Math.floor(Math.random() * 350)
    );

    setArray(newArray);
    setOgArray(newArray);
  };

  useEffect(() => {
    makeArray();
  }, [length]);

  return (
    <Grid container className={classes.sliderContainer} spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paperStyle}>
          <Grid className={classes.barsContainer}>
            {array.map((height, index) => {
              return (
                <Grid
                  item
                  className={`${classes.bar} bar`}
                  key={index}
                  style={{
                    height: `${height}px`,
                  }}
                ></Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paperStyle}>
          <Grid container className={classes.infoContainer}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              voluptates eligendi aliquam neque voluptas tempore. Aliquid omnis
              perspiciatis nesciunt quod aut pariatur, distinctio cum cumque,
              quas accusamus dolorum ipsam libero! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Adipisci consequatur impedit
              accusamus cumque dolorem accusantium quisquam suscipit sit iusto.
              Accusamus, explicabo, maiores commodi a ipsa voluptatem omnis
              adipisci aspernatur optio quo officiis velit repellendus neque,
              suscipit saepe veniam ex! Ullam, laboriosam. Doloremque incidunt
              iusto facilis sapiente iure quibusdam perspiciatis sed? Accusamus
              sed ut temporibus Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ad dolorem veniam debitis iste impedit tempora,
              delectus earum quas. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus quas quaerat quae rerum eveniet voluptas
              non ad amet praesentium laudantium? Sint sed doloremque, debitis
              corporis error quae, veniam voluptatem quis voluptatibus cum enim
              quos, culpa porro. Tempora quibusdam consectetur sed sint natus
              debitis voluptates voluptatibus enim vel laboriosam, a, ea harum
              non aliquam commodi sapiente! Fugit iure deleniti, magnam
              consectetur, tempore obcaecati error minima veniam porro placeat
              magni? Deserunt odit, deleniti exercitationem amet quod aut quam
              blanditiis incidunt nobis minima rerum nesciunt labore? Minus
              natus adipisci soluta numquam voluptate. Nemo exercitationem illo
              reprehenderit, doloremque obcaecati delectus asperiores animi,
              neque cumque omnis autem accusantium ipsam ratione doloribus
              officia alias. Voluptatibus nam quas dolor architecto natus rem
              aperiam repellendus impedit illum reprehenderit corrupti, laborum
              mollitia perferendis iure ad asperiores hic libero excepturi,
              nobis quam provident et voluptates! Fugiat, odit omnis autem quia
              ex nesciunt in ullam totam tempora dolore quibusdam error? Ratione
              cupiditate perspiciatis tenetur. Sequi enim neque sit aspernatur
              repellat voluptatem, expedita repudiandae quis commodi magnam,
              ipsa quas ex velit vero itaque quasi impedit! Eaque expedita quos
              nostrum magnam vero, ex tempore iusto quis reiciendis voluptatibus
              praesentium similique aliquid temporibus ipsam, nemo incidunt.
              Minus veniam sunt nam? Corporis illum saepe assumenda!
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

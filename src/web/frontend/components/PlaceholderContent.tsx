import { css } from '@emotion/core';
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import LinkedinIcon from '@material-ui/icons/Linkedin';

// include resume in webpack bundle
import '../assets/resume.pdf';

const breakpoints = [748, 842, 935, 1029, 1122];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const styles = {
  header: css({
    [mq[0]]: {
      fontSize: '4rem'
    },
    [mq[1]]: {
      fontSize: '4.5rem'
    },
    [mq[2]]: {
      fontSize: '5rem'
    },
    [mq[3]]: {
      fontSize: '5.5rem'
    },
    [mq[4]]: {
      fontSize: '6rem'
    },
    fontSize: '15vw',
    fontWeight: 400,
    textAlign: 'center'
  }),
  body: css({
    maxWidth: 850
  }),
  buttons: css({
    display: 'flex',
    flexDirection: 'row'
  }),
  content: css({
    fontSize: '14pt',
    fontWeight: 300,
    textAlign: 'center'
  })
};

const PlaceholderContent = () => {
  const [counter, setCounter] = useState(0);

  const contentButtons = () => {
    return (
      <div css={styles.buttons}>
        <Tooltip title="This Website's Github Repo">
          <Fab
            size="medium"
            href="https://github.com/lliang19/ltliang.com"
            target="_blank"
          >
            <CodeIcon />
          </Fab>
        </Tooltip>
        <div css={{ marginRight: 24 }} />
        <Tooltip title="My resumé">
          <Fab size="medium" href="resume" target="_blank">
            <DescriptionIcon />
          </Fab>
        </Tooltip>
        <div css={{ marginRight: 24 }} />
        <Tooltip title="Contact me!">
          <Fab size="medium" href="#" target="_blank">
            <EmailIcon />
          </Fab>
        </Tooltip>
        <div css={{ marginRight: 24 }} />
        <Tooltip title="My Linkedin">
          <Fab
            size="medium"
            href="https://www.linkedin.com/in/ltliang/"
            target="_blank"
          >
            <LinkedinIcon />
          </Fab>
        </Tooltip>
      </div>
    );
  };

  const contentFiller = () => {
    return (
      <>
        <Typography css={styles.header} variant="h1" component="h2">
          Welcome to my website!
        </Typography>
        <div css={{ marginBottom: 32 }} />
        <div css={styles.body}>
          <Typography css={styles.content} variant="body1" component="p">
            As you can probably tell, there's not much to this website (yet).
            I'm currently in the process of remastering my website using some of
            the technologies that I learned and utilized in my internship at{' '}
            <b>Lyft</b> this past Summer 2019. I can assure you, this website
            will be incrementally updated.
          </Typography>
          <div css={{ marginBottom: 32 }} />
          <Typography css={styles.content} variant="body1" component="p">
            In the meantime, check out these links for some of my work and
            social media!
          </Typography>
        </div>
        <div css={{ marginBottom: 32 }} />
        {contentButtons()}
      </>
    );
  };

  return <>{contentFiller()}</>;
};

export default PlaceholderContent;

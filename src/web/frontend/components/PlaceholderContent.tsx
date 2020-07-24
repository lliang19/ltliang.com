import { css } from '@emotion/core';
import React from 'react';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';

import LogoIcon from '../assets/logo.svg';

// include resume in webpack bundle
import '../assets/resume.pdf';

const breakpoints = [748, 842, 935, 1029, 1122];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const styles = {
  logo: css({
    width: 100,
    height: 100,
    position: 'absolute',
    top: 10,
    left: 10,
    transition: '0.25s'
  }),
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
    lineHeight: 1.6,
    textAlign: 'center'
  }),
  link: css({
    textDecoration: 'none',
    color: '#333333'
  }),
  contact: css({
    backgroundColor: '#e0e0e0',
    fontSize: '12pt',
    fontWeight: 400,
    textAlign: 'center'
  })
};

const PlaceholderContent = (): JSX.Element => {
  const contentButtons = (): JSX.Element => (
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
      <Tooltip title="Email me! (coming soon)">
        <Fab size="medium">
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

  const contentFiller = (): JSX.Element => (
    <>
      <LogoIcon css={styles.logo} />
      <Typography css={styles.header} variant="h1">
        Welcome to my website!
      </Typography>
      <div css={{ marginBottom: 32 }} />
      <div css={styles.body}>
        <Typography css={styles.content} variant="body1">
          My name is Lee, and I&apos;m a recent
          {' '}
          <b>UC San Diego</b>
          {' '}
          graduate with a degree in
          {' '}
          <b>Computer Science</b>
          {' '}
          and a minor in
          {' '}
          <b>Interaction Design</b>
          .
          {' '}
          I&apos;ve been exposed to various different aspects of Software Engineering, including
          {' '}
          <b>Front End Engineering and UI/UX Design and Engineering </b>
          {' '}
          at
          {' '}
          <b>
            <a
              href="https://www.lyft.com/" target="_blank" rel="noopener noreferrer"
              css={styles.link}
            >
              <u>Lyft</u>
            </a>
          </b>
          {' '}
          in the Summer of 2019, and now
          {' '}
          <b>Back End Engineering</b>
          {' '}
          at my current position as
          {' '}
          <b>Associate Software Engineer</b>
          {' '}
          at a local San Diego defense/government contracting company
          {' '}
          <b>
            <a
              href="https://www.ctic.us/" target="_blank" rel="noopener noreferrer"
              css={styles.link}
            >
              <u>Chesapeake Technology International (CTI)</u>
            </a>
          </b>
          .
        </Typography>
        <div css={{ marginBottom: 16 }} />
        <Typography css={styles.content} variant="body1">
          {/* eslint-disable-next-line */}
          As you can probably tell, there&apos;s not much to this website (yet). I&apos;m currently in the process of remastering my website using some of the technologies that I learned and utilized in my internship at Lyft, and finding time outside of work to continue updating this website with relavent content.
        </Typography>
        <div css={{ marginBottom: 32 }} />
        <Typography css={styles.content} variant="body1">
          In the meantime, check out these links for some of my work and
          social media!
        </Typography>
      </div>
      <div css={{ marginBottom: 32 }} />
      {contentButtons()}
    </>
  );

  const contactInfo = (): JSX.Element => (
    <>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <PhoneIcon />
        <div css={{ marginRight: 8 }} />
        (408) 930 - 5580
      </div>
      <div css={{ marginBottom: 8 }} />
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <AlternateEmailIcon />
        <div css={{ marginRight: 8 }} />
        ltliang1@gmail.com
      </div>
    </>
  );

  return (
    <>
      {contentFiller()}
      <div css={{ marginBottom: 48 }} />
      {contactInfo()}
    </>
  );
};

export default PlaceholderContent;

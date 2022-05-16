import Head from "next/head";
import client from "../lib/sanity";
import styled from "styled-components";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const { homepageData, siteHeaderData } = data;
  // console.log({ homepageData, siteHeaderData });
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-Sanity App || Steve Kibuika</title>
        <meta name="description" content="Created By Steve Kibuika" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv>
        <p>{siteHeaderData.title}</p>
        <a
          href={siteHeaderData.repoURL.current}
          target="_blank"
          rel="noreferrer"
        >
          Repo URL
        </a>
      </HeaderDiv>
      <ContentDiv>
        <h2>{homepageData.title}</h2>
        <p>{homepageData.subtitle}</p>
        <a
          as="a"
          href={siteHeaderData.repoURL.current}
          target="_blank"
          rel="noreferrer"
        >
          <button>Source Code</button>
        </a>
      </ContentDiv>
    </div>
  );
}

// site header query
const siteHeaderQuery = `*\[_type == "siteheader"\][0] {
  title,
  repoURL {
    current
  }
}`;

// home page query
const homepageQuery = `*\[_type == "homepage"\][0] {
  title,
  subtitle,
  "ctaUrl": cta {
    current
        },
  image {
    ...asset->
  }
}`;

export async function getStaticProps() {
  const homepageData = await client.fetch(homepageQuery);
  const siteHeaderData = await client.fetch(siteHeaderQuery);

  const data = { homepageData, siteHeaderData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

const HeaderDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 1em 5em;
  font-family: Poppins, sans-serif;

  > p {
    font-size: 1.2em;
    font-weight: 550;
    color: #2d2e2d;
  }

  > a {
    font-size: 1em;
    font-weight: 450;
    text-decoration: underline;
    color: #12361c;
  }

  @media (max-width: 768px) {
    padding: 1em 2.5em;
  }
`;

const ContentDiv = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 16em;
  font-family: Poppins, sans-serif;

  > h2 {
    font-size: 2em;
    font-weight: 790;
    font-family: Poppins, sans-serif;
  }

  > p {
    text-align: center;
    width: 50em;
    line-height: 1.3em;
    font-size: 1.1em;
    font-weight: 500;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.1em;
    }
  }

  > a > button {
    background-color: #437d53;
    height: 3.2em;
    width: 13em;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 750;
    font-size: 0.9em;
    cursor: pointer;
    margin-top: 3em;

    &:hover {
      background-color: #e4ebe5;
      color: #437d53;
      transition: ease-in-out 0.5s;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10em;

    > h2 {
      text-align: center;
      font-size: 1.8em;
    }
  }
`;

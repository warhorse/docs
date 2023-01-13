import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import ThemedImage from '@theme/ThemedImage';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import logo from "../../static/img/logo_black.png";
import logo_dark from "../../static/img/logo_white.png";
// import warhorsefront from "../../static/img/warhorse-front.png";

import { FiFeather } from "react-icons/fi";
import {
  AiOutlineFilter,
  AiOutlineMobile,
  AiOutlineDownload,
} from "react-icons/ai";
import { MdDynamicFeed, MdOutlineNotificationsActive } from "react-icons/md";
import { CgPlug } from "react-icons/cg";
import { BiRss } from "react-icons/bi";

const Center = ({ icon, text }) => (
  <div className="hero-icon-container">
    {icon}
    <h4>{text}</h4>
  </div>
);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--secondary",
        styles.heroBanner,
        styles.pattern
      )}
    >
      <div className="container">
        <ThemedImage
          alt='Nodes Setup'
          sources={{
            light: logo,
            dark: logo_dark,
          }}
            />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="hero-grid-container">
          <div className="hero-grid">
            <Center icon={<FiFeather size="24" />} text="Terraform & Ansible" />
            <Center icon={<MdDynamicFeed size="24" />} text="Cloud Agnostic" />
            <Center
              icon={<AiOutlineMobile size="24" />}
              text="Modular"
            />
            <Center icon={<AiOutlineFilter size="24" />} text="Single Yaml File" />
            <Center icon={<BiRss size="24" />} text="Open Source" />
            <Center
              icon={<AiOutlineDownload size="24" />}
              text="Built in Security"
            />
            <Center icon={<CgPlug size="24" />} text="Highly Customizable" />
            <Center
              icon={<MdOutlineNotificationsActive size="24" />}
              text="Notifications"
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.button
            )}
            to="/docs/introduction"
          >
            Introduction
          </Link>
          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            to="/docs/installation/linux"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* <img
        src={warhorsefront}
        alt="autobrr"
        className={clsx("shadow-md", styles.image)}
      /> */}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Infrastructure Automation for Security Assessments"
    >
      <HomepageHeader />
    </Layout>
  );
}
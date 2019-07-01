import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import ImageFormatted from '../components/ImageFormatted';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import links from '../constants/links';
import { Container } from '../components/Container/Container';
// import { Section } from '../components/Section/Section';
import { PageHeading } from '../components/PageHeading/PageHeading';
import { ArrowLink } from '../components/ArrowLink/ArrowLink';
import { Page } from '../components/Page/Page';
import { Connect } from '../components/Connect/Connect';
import { Text } from '../components/Text/Text';
// import { WeWantYouBanner } from '../components/WeWantYouBanner/WeWantYouBanner';

const officesLinks = {
  moscow:
    'https://www.google.com/maps/place/dialog/@55.7368062,37.5323798,18z/data=!3m1!4b1!4m13!1m7!3m6!1s0x0:0x0!2zNTXCsDQ0JzEyLjUiTiAzN8KwMzInMDAuNyJF!3b1!8m2!3d55.736806!4d37.533528!3m4!1s0x46b54a53aa3b42cd:0x3c26303a75a2c356!8m2!3d55.7368062!4d37.5334741',
  novosibirskNikolaeva:
    'https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85+%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9/@54.8580416,83.1106614,18z/data=!4m13!1m7!3m6!1s0x42dfc3f43cc9190d:0x3da699e7445b010e!2z0YPQuy4g0J3QuNC60L7Qu9Cw0LXQstCwLCAxMSwg0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7LiwgNjMwMDkw!3b1!8m2!3d54.8581713!4d83.1103964!3m4!1s0x0:0x70c9334b88f99469!8m2!3d54.8576537!4d83.1117064',
  novosibirskMost:
    'https://www.google.com/maps/place/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80+MOST/@55.023146,82.920614,15z/data=!4m5!3m4!1s0x0:0x6bef1adfc015b0e6!8m2!3d55.023146!4d82.920614',
};

export default ({
  pageContext: {
    intl: { language, originalPath },
  },
  data: {
    teamImage,
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  return (
    <Page className="about">
      <FormattedMetaTags
        titleId="meta_title_about"
        descriptionId="meta_description_about"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_about"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <Container>
        <PageHeading className="about__header_upper">
          <FormattedMessage id="about_more_than_messenger" />
        </PageHeading>
      </Container>

      <section className="about__promo">
        <Container>
          <div className="about__video">
            <FormattedMessage id="more_than_messenger">
              {(alt) => (
                <Image
                  fadeIn={false}
                  fluid={teamImage.childImageSharp.fluid}
                  alt={alt}
                />
              )}
            </FormattedMessage>
          </div>
        </Container>
      </section>

      <section className="about__text">
        <Container>
          <PageHeading className="about__header_middle">
            <FormattedMessage id="about_more_than_messenger" />
          </PageHeading>
          <div className="about__company_wrapper">
            <FormattedHTMLMessage id="about_company" />
            <FormattedHTMLMessage id="career.we_want_you" />
          </div>
        </Container>
      </section>

      {/* <WeWantYouBanner language={language} /> */}
      <Connect language={language} />

      <section className="about__features">
        <Container>
          <div className="about__features-list">
            <div className="about__features-item">
              <div className="about__features-icon">
                <ImageFormatted
                  src="/images/svg/about-mission.svg"
                  altLangId="mission"
                />
              </div>
              <div className="about__features-title">
                <FormattedMessage id="mission" />
              </div>
              <div className="about__features-description">
                <FormattedMessage id="mission_text" />
              </div>
            </div>
            <div className="about__features-item">
              <div className="about__features-icon">
                <ImageFormatted
                  src="/images/svg/about-worth.svg"
                  altLangId="values"
                />
              </div>
              <div className="about__features-title">
                <FormattedMessage id="values" />
              </div>
              <div className="about__features-description">
                <FormattedMessage id="values_text" />
              </div>
            </div>
            <div className="about__features-item">
              <div className="about__features-icon">
                <ImageFormatted
                  src="/images/svg/about-goal.svg"
                  altLangId="goal"
                />
              </div>
              <div className="about__features-title">
                <FormattedMessage id="goal" />
              </div>
              <div className="about__features-description">
                <FormattedMessage id="goal_text" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section className="about__licenses">
          <div className="about__licenses-title">
            <FormattedMessage id="patents_licenses" />
          </div>
          <div className="about__licenses-text">
            <FormattedMessage id="about_licenses_text" />
          </div>
          <div className="about__licenses-link-box">
            <ArrowLink
              underline
              to={`/${language}/patents/`}
              className="about__licenses-link"
            >
              <FormattedMessage id="link_more_licenses" />
            </ArrowLink>
          </div>
        </section>

        <section className="about__contacts box--prefooter">
          <div className="about__contacts-block">
            <div className="about__contacts-title">
              <FormattedMessage id="contacts" />
            </div>
            <div className="about__contacts-items">
              <div className="about__contacts-item about__contacts-item--email">
                <a
                  href={`mailto:${links.email.info}`}
                  className="link--default"
                >
                  {links.email.info}
                </a>
              </div>
              <div className="about__contacts-item about__contacts-item--phone">
                <a href="tel:+78007758202">+7 (800) 775-8202</a>
              </div>
            </div>
            <div className="about__contacts-offices">
              <div className="about__contacts-office">
                <div className="about__contacts-city">
                  <FormattedMessage id="moscow" />
                </div>
                <div className="about__contacts-address">
                  <FormattedMessage id="moscow_address" />
                </div>
                <div className="about__contacts-map-link">
                  <a
                    href={officesLinks.moscow}
                    className="link--default"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="on_map" />
                  </a>
                </div>
              </div>
              <div className="about__contacts-office">
                <div className="about__contacts-city">
                  <FormattedMessage id="novosibirsk" />
                </div>
                <div className="about__contacts-address">
                  <FormattedMessage id="novosibirsk_address_nikolaeva" />
                </div>
                <div className="about__contacts-map-link">
                  <a
                    href={officesLinks.novosibirskNikolaeva}
                    className="link--default"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="on_map" />
                  </a>
                </div>
              </div>
              <div className="about__contacts-office">
                <div className="about__contacts-city">
                  <FormattedMessage id="novosibirsk" />
                </div>
                <div className="about__contacts-address">
                  <FormattedMessage id="novosibirsk_address_most" />
                </div>
                <div className="about__contacts-map-link">
                  <a
                    href={officesLinks.novosibirskMost}
                    className="link--default"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="on_map" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Page>
  );
};

export const pageQuery = graphql`
  {
    teamImage: file(relativePath: { eq: "images/about/corporate.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1320) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

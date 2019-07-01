import React from 'react';
import { FormattedMessage } from 'react-intl';
import FormattedMetaTags from '../FormattedMetaTags';
import FormattedOpenGraph from '../FormattedOpenGraph';
import { graphql, Link } from 'gatsby';

import { Page } from '../Page/Page';
import { Container } from '../Container/Container';
import { PageHeading } from '../PageHeading/PageHeading';
import { Section } from '../Section/Section';
import { LinkButton } from '../Button/LinkButton';
import ApplyForJobForm from '../ApplyForJobForm';
import { RecommendEmployee } from '../RecommendEmployee/RecommendEmployee';
import './VacancyTemplate.css';

export default ({
  data: {
    vacancy,
    site: {
      siteMetadata: { siteUrl },
    },
  },
  pageContext: {
    slug,
    intl: { language },
  },
}) => {
  const { title, salary, description, city } = vacancy.frontmatter;

  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_vacancy"
        descriptionId="meta_description_vacancy"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_vacancy"
        url={siteUrl}
        path={`/${language}${slug}`}
      />

      <Container>
        <div className="vacancy__nav">
          <Link className="link--back" to={`/${language}/career/`}>
            <img src="/images/svg-icons/arrow-link.svg" alt="" />
            <span>
              <FormattedMessage id="job_back" />
            </span>
          </Link>
        </div>
        <Section className="vacancy_summary">
          <div className="vacancy_summary__wrapper">
            <div className="vacancy_summary__title">{title}</div>
            <div className="vacancy_summary__salary">{salary}</div>
            <div className="vacancy_summary__desc">{description}</div>
            <LinkButton href="#apply_for_job_form">
              <FormattedMessage id="job_apply_button" />
            </LinkButton>
          </div>
        </Section>
        <Section className="expectations_bonuses">
          <div dangerouslySetInnerHTML={{ __html: vacancy.html }} />
        </Section>
      </Container>
      <Container fluid>
        <RecommendEmployee />
      </Container>
      <Container>
        <Section className="apply">
          <div id="apply_for_job_form">
            <PageHeading>
              <FormattedMessage id="job_apply_vacancy_header" />
            </PageHeading>
            <div className="vacancy__apply_text">
              <FormattedMessage id="job_apply_vacancy_message" />
            </div>
            <ApplyForJobForm
              className="apply__form"
              cities={[city]}
              language={language}
            />
          </div>
        </Section>
      </Container>
    </Page>
  );
};

export const query = graphql`
  query($slug: String!) {
    vacancy: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        city
        title
        salary
        description
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

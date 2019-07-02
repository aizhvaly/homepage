import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './Partnership.css';

export function Partnership() {
  return (
    <Section className="partnership">
      <Heading level="2">
        <FormattedMessage id="Partnership_technological" />
      </Heading>

      <div className="column column--info">
        <div className="subtitle">
          <FormattedMessage id="Partnership_vendors" />
        </div>
      </div>
      <div className="column column--partners">
        <div className="partners">
          <a
            className="partner"
            href="https://www.basealt.ru/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImageFormatted
              imgClass="partner__icon"
              src="/images/partners/basealt_icon.png"
              altLangId="Partnership_bazalt"
            />
            <div className="partner__name">
              <FormattedMessage id="Partnership_bazalt" />
            </div>
          </a>
          <a
            className="partner"
            href="https://myoffice.ru/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImageFormatted
              imgClass="partner__icon"
              src="/images/partners/myoffice_icon.png"
              altLangId="Partnership_my_office"
            />
            <div className="partner__name">
              <FormattedMessage id="Partnership_my_office" />
            </div>
          </a>
          <a
            className="partner"
            href="https://sailfishos.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImageFormatted
              imgClass="partner__icon"
              src="/images/partners/avrora_icon.png"
              altLangId="Partnership_aurora"
            />
            <div className="partner__name">
              <FormattedMessage id="Partnership_aurora" />
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
}

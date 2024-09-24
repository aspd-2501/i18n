import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const messages = {
    'en': localeEnMessages,
    'es': localeEsMessages
  };

const locale = navigator.language.split(/[-_]/)[0];
  
ReactDOM.render(
  <IntlProvider  locale={locale} messages={messages[locale]}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);

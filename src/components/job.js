import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage, useIntl } from "react-intl";

const Job = (props) => {
  const intl = useIntl();

  const formattedSalary = (salary) => {
    if (salary >= 1) {
      const isPlural = salary > 1;
      return (
        <>
          <FormattedNumber value={salary} />{" "}
          {isPlural ? (
            <FormattedMessage id="Millions" defaultMessage="millions" />
          ) : (
            <FormattedMessage id="Million" defaultMessage="million" />
          )}
        </>
      );
    }
  return <FormattedMessage value={salary} />;
};


  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formattedSalary(props.offer.salary)}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber
        value={props.offer.views}
        locale="es-ES"
        style="decimal"
        />
        </td>
    </tr>
  );
};

export default Job;

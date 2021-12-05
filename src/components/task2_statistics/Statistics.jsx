import React from "react";
import PropTypes from "prop-types";
import {
  statisticsClass,
  titleClass,
  statListClass,
  itemClass,
  percentageClass,
  isHidden,
} from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  let header;
  if (title === undefined) {
    header = (
      <h2 className={titleClass} style={{ isHidden }}>
        {title}
      </h2>
    );
  } else {
    header = <h2 className={titleClass}>{title}</h2>;
  }
  const randomHexColor = () =>
    "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  return (
    <div>
      <section className={statisticsClass}>
        {header}

        <ul className={statListClass}>
          {stats.map(({ id, percentage, label }) => (
            <li
              key={id}
              className={itemClass}
              style={{ backgroundColor: `${randomHexColor()}` }}
            >
              <span className="label">{label}</span>
              <span className={percentageClass}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;

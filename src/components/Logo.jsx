import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Logo = (props) => {
  const { srcLogo, url = '#' } = props;
  return (
    <Link to={url}>
      <a className="flex items-center">
          <img src={`${srcLogo}`} className="h-9 h-lg-9" alt="Physica Finance" /> <span class="pl-2">Co Finance</span>
      </a>
    </Link>
  );
};

export default Logo;

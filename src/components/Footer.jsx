import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { Link } from 'react-router-dom';

const Footer = () => {
  const ecosystem = [
    {
      url: '/swap',
      name: 'Trade',
    },
    {
      url: '/lending',
      name: 'Lending Borrowing',
    },
    {
      url: '/liquidity',
      name: 'Pools',
    },
    {
      url: '/stake',
      name: 'Staking',
    },
    {
      url: 'https://Cofinance/whitepaper',
      name: 'Tokenomics',
    },
  ];

  const developers = [
    {
      url: 'https://github.com/Cofinance/',
      name: 'Contributing',
    },
    {
      url: 'https://github.com/Cofinance/',
      name: 'Github',
    },
    {
      url: 'https://discord.gg/Cofinance',
      name: 'Partnerships',
    },
  ];

  const supports = [
    {
      url: 'https://discord.com/invite/Cofinance',
      name: 'Contact',
    },
    {
      url: 'https://Cofinance/',
      name: 'Documentation',
    },
    {
      url: 'https://discord.com/invite/Cofinance',
      name: 'Troubleshooting',
    },
  ];

  const about = [
    {
      url: 'https://Cofinance',
      name: 'Term of Use & privacy',
    },
    {
      url: 'https:/Cofinance',
      name: 'CoFinance',
    },
    {
      url: 'https://medium.com/@Cofinance',
      name: 'Medium',
    },
  ];

  const icons = [
    {
      url: 'https://twitter.com/Cofinance',
      faIcon: <FaTwitter size={24} />,
    },
    {
      url: 'https://discord.com/invite/Cofinance',
      faIcon: <FaDiscord size={24} />,
    },
    {
      url: 'https://t.me/Cofinance',
      faIcon: <FaTelegramPlane size={24} />,
    },
  ];

  const renderLinks = (title, items) => (
    <nav className="flex flex-col" key={title}>
      <header className="text-blue-900 footer-title dark:text-gray-200">
        {title}
      </header>
      {items.map((item, index) => (
        <Link
          to={item.url}
          target="_blank"
          className="link link-hover"
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <footer className="p-10 px-5 md:px-10 lg:px-20 mx-auto bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/10 to-white dark:from-blue-800/90 dark:to-primary dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] text-blue-950 dark:text-neutral">
        <div className="flex flex-col gap-6">
          <div className="footer">
            <aside className="items-center max-w-xs grid-flow-col">
              <div className="flex flex-col">
                <div>
                  <img src="./logo.png" width={50} height={50} alt="" />
                  <p className="text-xl font-semibold">CoFinance</p>
                </div>
                <p className="py-2 text-sm font-medium text-blue-900/90 dark:text-gray-400">
                  Swap, earn, and build on the leading decentralized crypto trading protocol on Cross Finance.
                </p>
              </div>
            </aside>
            {renderLinks('Ecosystem', ecosystem)}
            {renderLinks('Developers', developers)}
            {renderLinks('Support', supports)}
            {renderLinks('About', about)}
          </div>
          <div className="footer">
            <aside className="items-center grid-flow-col">
              <p>
                Powered by <a href="https://comunitynode.my.id">Comunity Node</a> <br />
                <span className="text-sm text-blue-900/80 dark:text-gray-400">
                  Copyright ® 2023, CoFinance
                </span>
              </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="grid grid-flow-col gap-4">
                {icons.map((icon, index) => (
                  <Link to={icon.url} key={index} target="_blank">
                    {icon.faIcon}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

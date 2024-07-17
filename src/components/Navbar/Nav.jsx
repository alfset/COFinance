/* eslint-disable react/no-children-prop */
import NavItem from './NavItem';
import DropdownMenu from '../Dropdown';
import { FaSwimmingPool } from '@react-icons/all-files/fa/FaSwimmingPool';
import { FaWallet } from '@react-icons/all-files/fa/FaWallet';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const dropdownItems = [
    {
      icon: <FaSwimmingPool />,
      text: 'Pool',
      url: '/liquidity',
      target: '',
    },
    {
      icon: <FaWallet />,
      text: 'Staking',
      url: '/swap',
      target: '_blank',
    },
  ];
  const location = useLocation();
  // Access the current path from the location object
  const currentPath = location.pathname;
  console.log(currentPath);

  return (
    <ul className={`menu menu-horizontal gap-2`}>
      <NavItem
        url="/swap"
        textColor="text-neutral"
      >
        Trade
      </NavItem>
      <NavItem
        url="/swap"
        target="_blank"
        textColor="text-neutral"
      >
        Lending Borrowing
      </NavItem>
      <DropdownMenu children="Earn" width="w-52" items={dropdownItems} />
    </ul>
  );
};

export default Nav;

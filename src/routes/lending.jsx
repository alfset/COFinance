import { useState } from 'react';
import { BiLeftArrowAlt } from '@react-icons/all-files/bi/BiLeftArrowAlt';
import { BsGearFill } from '@react-icons/all-files/bs/BsGearFill';
import Button from '../components/Button';
import IconButton from '../components/Button/IconButton';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import ListItem from '../components/ListItem';
import tokenList from '../constant/tokenList';

const defaultSelectToken = 'Select a token';
const tokenModalId = 'select-token-modal';

const Lending = () => {
  const [token, setToken] = useState(null);
  const [amount, setAmount] = useState('');
  const [daysBorrowed, setDaysBorrowed] = useState('');
  const [interestFee, setInterestFee] = useState(0);

  const tokens = tokenList.map((x) => ({
    title: x.name,
    subtitle: x.ticker,
    imgUrl: x.img,
  }));

  const calculateInterestFee = (amount, days) => {
    // Example calculation: 0.01% interest per day
    return (amount * 0.0001 * days).toFixed(2);
  };

  const handleBorrow = () => {
    const fee = calculateInterestFee(amount, daysBorrowed);
    setInterestFee(fee);
    // Handle the borrow logic
  };

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const handleTokenSelection = (coin) => {
    setToken(coin);
    setModalOpen(false);
  };

  return (
    <section>
      <Modal
        id={tokenModalId}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Select a token"
        content={
          <ListItem
            items={tokens}
            onItemSelected={(coin) => handleTokenSelection(coin)}
            id={tokenModalId}
          />
        }
      />
      <main className="container w-auto max-w-2xl min-h-screen p-6 py-20 mx-auto bg-base-100">
        <div className="flex flex-col gap-6 px-4 py-6 mt-2 border rounded-xl border-black/30 dark:border-white/10">
          {/* App Bar */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1 float-left w-full">
              <IconButton
                icon={<BiLeftArrowAlt size={32} />}
                onClick={() => navigate('/liquidity')}
              />
            </div>
            <span className="flex-1 text-lg font-medium text-black dark:text-white">
              Lending and Borrowing
            </span>
            <div className="flex items-center gap-6">
              <a className="text-primary/80" href="#">
                clear all
              </a>
              <span>
                <BsGearFill size={18} />
              </span>
            </div>
          </div>
          <div className="p-0 m-0 divider divider-vertical" />
          {/* Token Selection */}
          <div className="flex flex-col w-full gap-4 text-sm font-medium">
            <span className="text-lg text-black dark:text-white">Select Token</span>
            <label
              className={`flex-col items-start flex-1 text-sm capitalize rounded-full btn select select-bordered focus:bg-base-300 ${
                token ? 'px-2' : 'bg-blue-500 text-white'
              }`}
              onClick={() => setModalOpen(true)}
            >
              {token ? (
                <div className="flex items-center w-full gap-4 p-0 m-0 text-xl">
                  <img src={token.imgUrl} className="w-8 h-full" alt="" />
                  <span className="h-full">{token.subtitle}</span>
                </div>
              ) : (
                <span className="flex items-center h-full text-lg">{defaultSelectToken}</span>
              )}
            </label>
          </div>
          {/* Amount Input */}
          <div className="form-group">
            <label htmlFor="amount" className="form-label text-lg text-black dark:text-white">Amount</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-input w-full p-2 border rounded"
            />
          </div>
          {/* Days Borrowed Card List */}
          <div className="form-group">
            <label className="form-label text-lg text-black dark:text-white">Days Borrowed</label>
            <div className="flex gap-4">
              {[30, 60, 90].map((days) => (
                <div
                  key={days}
                  className={`flex-1 p-4 text-center border rounded cursor-pointer ${
                    daysBorrowed === days ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  onClick={() => setDaysBorrowed(days)}
                >
                  {days} days
                </div>
              ))}
            </div>
          </div>
          {/* Interest Fee */}
          <div className="form-group">
            <label htmlFor="interestFee" className="form-label text-lg text-black dark:text-white">Interest Fee</label>
            <input
              id="interestFee"
              type="text"
              value={interestFee}
              readOnly
              className="form-input w-full p-2 border rounded bg-gray-100"
            />
          </div>
          {/* Borrow Button */}
          <Button
            onClick={handleBorrow}
            gradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-500/50"
            rounded="lg"
            other="w-full rounded-xl text-lg"
          >
            Borrow
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Lending;

import { useState } from 'react';
import { BsGear } from '@react-icons/all-files/bs/BsGear';
import Button from '../components/Button/index';
import CurrencyFormat from '../components/CurrencyFormat';
import CustomDropdown from '../components/Dropdown/CustomDropdown';
import { Link } from 'react-router-dom';

function Page() {
  const [amount, setAmount] = useState('');

  return (
    <section>
      <main className="container mx-auto min-h-screen w-auto max-w-lg py-10 bg-base-100">
        <div className="w-full shadow-2xl shadow-blue-500 rounded-xl py-2">
          <div className="px-2 self-start">
            <div className="flex justify-between items-center">
              <div className="grid grid-cols-2 gap-3 ml-3">
                <div>
                  <p className="text-lg font-semibold">Presale</p>
                </div>
              </div>
              <div>
                <CustomDropdown
                  padding="p-1"
                  position="dropdown-end"
                  icon={<BsGear />}
                  width="w-96 shadow-base-content"
                  component={
                    <div className="max-w-sm">
                      <div className="flex items-center space-x-3 px-3 py-3">
                        <img src="./logo-planq.png" className="w-10" alt="" />
                        <p className="font-medium text-lg">PlanQ Network</p>
                      </div>
                      <div className="flex items-center justify-between space-x-3 px-3">
                        <p className="font-medium text-sm">
                          When available, aggregates liquidity sources for
                          better prices and gas free swaps.
                          <Link to={'/'} className="ps-1 text-sm text-blue-700">
                            Learn More
                          </Link>
                        </p>
                        <input
                          type="checkbox"
                          className="toggle toggle-lg px-3"
                        />
                      </div>
                      <details className="collapse collapse-arrow border-t-2 border-base-300 my-3">
                        <summary className="collapse-title min-h-fit font-medium">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center justify-center">
                              <p className="flex items-center text-sm">
                                Max. slippage
                              </p>
                            </div>
                            <div>
                              <p className="text-sm flex gap-1 justify-center items-center">
                                Auto
                              </p>
                            </div>
                          </div>
                        </summary>
                        <div className="collapse-content">
                          <div className="flex items-center justify-between gap-2">
                            <div className="join">
                              <input
                                className="join-item btn btn-sm capitalize"
                                type="radio"
                                name="options"
                                aria-label="Auto"
                              />
                              <input
                                className="join-item btn btn-sm capitalize"
                                type="radio"
                                name="options"
                                aria-label="Custom"
                              />
                            </div>
                            <div>
                              <div className="relative rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pe-3">
                                  <span className="text-white sm:text-sm">
                                    %
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="price"
                                  id="price"
                                  className="input input-sm input-bordered"
                                  placeholder="0.5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                      <details className="collapse collapse-arrow border-t-2 border-base-300 my-3">
                        <summary className="collapse-title font-medium min-h-fit">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center justify-center">
                              <p className="flex items-center text-sm">
                                Transaction deadline
                              </p>
                            </div>
                            <div>
                              <p
                                className="text-sm flex gap-1 justify-center items-center"
                                id="deadline"
                              >
                                10m
                              </p>
                            </div>
                            </div>
                          </summary>
                        <div className="collapse-content">
                          <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pe-3">
                              <span className="text-white sm:text-sm">
                                minutes
                              </span>
                            </div>
                            <input
                              type="text"
                              name="price"
                              id="price"
                              className="input input-sm input-bordered w-full"
                              placeholder="10"
                            />
                          </div>
                        </div>
                      </details>
                    </div>
                  }
                />
              </div>
            </div>
            <div className="space-y-0">
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder="0"
                    onKeyUp={(e) => setAmount(e.target.value)}
                    className="input w-full rounded-lg bg-base-200 px-2"
                  />
                </div>
              </div>
              <label className="label px-2 mt-2">
                <span className="label-text text-xs text-gray-500" id="">
                  {amount !== '' ? <CurrencyFormat amount={amount} /> : ''}
                </span>
              </label>
            </div>
            <div className="py-2">
              <Button
                gradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-500/50"
                rounded="lg"
                other="w-full"
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Page;

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { MetavaultTradeRewardReader, MetavaultTradeRewardReaderInterface } from '../MetavaultTradeRewardReader';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_depositTokens',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_rewardTrackers',
        type: 'address[]',
      },
    ],
    name: 'getDepositBalances',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_rewardTrackers',
        type: 'address[]',
      },
    ],
    name: 'getStakingInfo',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_vesters',
        type: 'address[]',
      },
    ],
    name: 'getVestingInfoV2',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class MetavaultTradeRewardReader__factory {
  static readonly abi = _abi;
  static createInterface(): MetavaultTradeRewardReaderInterface {
    return new utils.Interface(_abi) as MetavaultTradeRewardReaderInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MetavaultTradeRewardReader {
    return new Contract(address, _abi, signerOrProvider) as MetavaultTradeRewardReader;
  }
}
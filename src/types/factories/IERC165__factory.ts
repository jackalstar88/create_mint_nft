/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { IERC165, IERC165Interface } from "../IERC165";
import { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IERC165__factory {
  static readonly abi = _abi;
  static createInterface(): IERC165Interface {
    return new utils.Interface(_abi) as IERC165Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC165 {
    return new Contract(address, _abi, signerOrProvider) as IERC165;
  }
}

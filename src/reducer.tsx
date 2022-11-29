import { createSlice } from "@reduxjs/toolkit";
// import networks from './config/networks.json'
import { RPCS, supportChainId } from "./config/global.const";

const initial: any = {
  minSidebar: false,
  noneSidebar: false,
  isDark: false
};

// const coins: CoinTypes = {}
// for (let k in networks) {
//     coins[networks[k].coin] = { [k]: { address: '-', decimals: networks[k].decimals } }
// }

const initialState: GlobalTypes = {
  loading: false,
  inited: false,
  pending: {},
  txs: {},
  ...initial,
};
//I should automatically create a flashcoins object.
//Current flashcoins is created statically

export default createSlice({
  name: "flashwallet",
  initialState,
  reducers: {
    update: (state: any, action) => {
      for (const k in action.payload) {
        if (state[k] === undefined) new Error("  undefined account item");
        state[k] = action.payload[k];
      }
    },
  },
});

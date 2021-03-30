import { connect } from "react-redux";
import { mainReducer } from "../../lib/store/mainReducer";
import {Address as AddressTemplate} from "./Address";

export const Address = connect(
  (state) => ({
    address: state.main.address
  }),
  (dispatch) => ({
    changeAddress: (address) => dispatch(mainReducer.changeAddress(address))
  })
)(AddressTemplate);
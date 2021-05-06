import { connect } from 'react-redux';
import {
  doSandboxTransactionFilter,
  loadBalance,
  loadCustomer,
  loadTransactions,
  setLoading
} from '../modules/sandbox';
import SandboxView from '../views/SandboxView';
import { StoreSchema } from "../../../store/createStore";

const mapDispatchToProps = {
  loadTransactions,
  loadBalance,
  setLoading,
  loadCustomer,
  doSandboxTransactionFilter
};

const mapStateToProps = (state: StoreSchema) => ({
  sandbox: state.sandbox
});

export default connect(mapStateToProps, mapDispatchToProps)(SandboxView);

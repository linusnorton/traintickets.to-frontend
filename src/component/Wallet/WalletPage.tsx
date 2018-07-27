import * as React  from "react";
import {Loader} from "../Index/Loader/Loader";
import autobind from "autobind-decorator";
import {Wallet, TokenDetails, TicketState} from "../../service/Wallet/Wallet";

@autobind
export class WalletPage extends React.Component<WalletProps, WalletState> {

  public state: WalletState = {
    loading: false,
    error: false
  };

  public async componentDidMount() {
    if (!this.state.loading && !this.state.tokens && !this.state.error) {
      this.setState({ loading: true, error: false });

      try {
        const tokens = await this.props.wallet.getWalletTokens();

        this.setState({ loading: false, error: false, tokens });
      }
      catch (err) {
        console.log(err);

        this.setState({ error: true, loading: false, tokens: undefined });
      }
    }
  }

  public render() {
    if (this.state.error) {
      return (<p>Error</p>);
    }
    else if (this.state.tokens && this.state.tokens.length === 0) {
      return (<p>There are no tickets in your wallet. Are you sure you unlocked your account?</p>);
    }
    else if (this.state.tokens) {
      return this.renderTokens(this.state.tokens);
    }

    return (<Loader text="Loading ticket wallet"/>);
  }

  private renderTokens(tokens: TokenDetails[]) {
    return tokens.map((token, index) => (
      <p key={index}>{token.description}: {token.fulfilmentURI.substr(6)} ({TicketState[token.state].toString()})</p>
    ));
  }
}

export interface WalletProps {
  wallet: Wallet;
}

interface WalletState {
  loading: boolean;
  error: boolean;
  tokens?: TokenDetails[];
}

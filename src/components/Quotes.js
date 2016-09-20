import React, { Component, PropTypes } from 'react';

export class Quotes extends Component {

  render() {
    const { isFetching, onQuoteClick, onSecretQuoteClick, isAuthenticated, quote, isSecretQuote } = this.props;

    return (
      <div>
        <div className="col-sm-3">
          <button onClick={onQuoteClick} className="btn btn-primary">
            {isFetching ? 'Fetching...' : 'Get Quotes'}
          </button>
        </div>

        { isAuthenticated &&
          <div className="col-sm-3">
            <button onClick={onSecretQuoteClick} className="btn btn-warning">
              {isFetching ? 'Fetching...' : 'Get Secret Quotes'}
            </button>
          </div>
        }

        <div className="col-sm-6">
          { quote && !isSecretQuote &&
            <div>
              <blockquote>{quote}</blockquote>
            </div>
          }

          { quote && isAuthenticated && isSecretQuote &&
            <div>
              <span className="label label-danger">Secret Quote</span>
              <hr/>
              <blockquote>
                {quote}
              </blockquote>
            </div>
          }
        </div>
      </div>
    );
  }
}

Quotes.propTypes = {
  onQuoteClick: PropTypes.func.isRequired,
  onSecretQuoteClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  quote: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired
 };

export default Quotes;
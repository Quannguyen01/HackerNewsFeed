import React, { Component , PropTypes } from 'react';

class NavigationFooter extends Component {
    render() {
        return (
            this.props.isLoading === true
            ? <div></div>
            : <div className="navigation-footer">
                {this.props.page !== 0
                    ? (<button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-button--accent"
                            onClick={(e) => this.props.loadPage(this.props.page-1, e)}>
                            <i className="material-icons">navigate_before</i>
                            </button>)
                    : (<div></div>)
                }
                <div>
                    Page {this.props.page + 1}
                </div>
                <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-button--accent"
                        onClick={(e) => this.props.loadPage(this.props.page+1, e)}>
                        <i className="material-icons">navigate_next</i>
                </button>
            </div>
        );
    }
}

NavigationFooter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    loadPage: PropTypes.func.isRequired
};

export default NavigationFooter;

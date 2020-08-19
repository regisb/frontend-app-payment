// NOTE: This is NOT a default export because we need the export contract of the payment methods
// in these sub-directories ( apple-pay, cybersource, paypal) to be the same across the board.
// Those other two have other exports, and checkout is not their default.
export { checkout, checkoutWithToken } from './service'; // eslint-disable-line import/prefer-default-export

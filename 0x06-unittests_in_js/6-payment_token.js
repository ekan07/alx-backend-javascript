/*
 * Async tests with done 
 * @author Yosef Samuel
 * @param {boolean} success
 * @return {object} - resolved promise object
 */
function getPaymentTokenFromAPI(success) {
  if (success === true)
    return Promise.resolve({ data: 'Successful response from the API' });
}

module.exports = getPaymentTokenFromAPI;

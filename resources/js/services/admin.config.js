/**
 * pega endereço no browser
 *
 * @type {Location | string | any}
 */
const location = window.location;

export default {
    // define host
    HOST: `${location.protocol}//${location.hostname}:${location.port}`,

    // define host api
    get API_URL() {
        return `${this.HOST}/api`;
    },

    // define host admin
    get ADMIN_URL() {
        return `${this.HOST}/admin`;
    }
}

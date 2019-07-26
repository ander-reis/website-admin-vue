import Vue from 'vue';
import moment from 'moment';

/**
 * Formata data dd-mm-YYYY para dd/mm/YYYY
 * moment.js
 */
Vue.filter('dateBr', function (value) {
    if (value && value.length >= 10) {
        value = moment(value, 'MM/DD/YYYY').format('DD/MM/YYYY');
    }
    return value;
});

import {
    getAction,
    deleteAction,
    putAction,
    postAction
} from '../http'

export default {

    getPermission(params = {}) {
        return getAction('/api/design/permission/getUserPermission', params);
    },

}
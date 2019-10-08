import * as actionTypes from './actionTypes'

export const questionTraversal = (id) => {
    return {
        type : actionTypes.QUESTION_TRAVERSAL,
        id : id
    }
}
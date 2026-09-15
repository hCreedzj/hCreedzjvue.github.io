import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        firstName: 'Константин',
        middleName: 'Дмитриевич',
        lastName: 'Музычук'
    }),
    getters: {
        fullName: state => (
            state.lastName + " " + state.firstName + " " + state.middleName
        ),
    },
    actions: {
        setFullName() {
            this.firstName = 'aaa',
            this.middleName = 'sss',
            this.lastName = 'ddd'
        }
    }
})
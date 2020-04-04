export interface SampleDataInterface {
    actions: Array<Action>
}


interface Action {
    name: string,
    initalState: object
}
export default function reduxes(actionTypes: Array<{ name: string }>): any {
    const actionArray = actionTypes.map((actionType: any) => {
      const initialState: any = actionType.initialState
        ? actionType.initialState
        : [];
      return {
        [actionType.name]: function Reducers(
          state: {} | [] = initialState,
          action: { type: string; payload: any }
        ): {} | [] {
          switch (action.type) {
            case actionType.name:
              if (!action.payload) {
                return {};
              }else if (actionType.pagination) {
                return [...initialState, ...action.payload];
              } else {
                return {...state, ...action.payload};
              }
            default:
              return { ...state };
          }
        }
      };
    });
    let actionObject = {};
    actionArray.forEach((item: {}): void => {
      actionObject = { ...actionObject, ...item };
    });
    return actionObject;
  }
  
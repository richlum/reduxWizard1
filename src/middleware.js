
export function logger ({getState,dispatch}) {
  return next => action => {

    let result;

      console.log('stateBEFORE', JSON.stringify(getState()));

    result = next(action)

      console.log('stateAFTER', JSON.stringify(getState()));

    return result;
  }
}

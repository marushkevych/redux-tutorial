
export default ({ dispatch, getState }) => next => action => {
  console.log('dispathcing', action)
  const result = next(action)
  console.log('next state', getState())
  return result
} 
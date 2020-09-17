export type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] }
}[keyof ParamList]

export * from './AppParamList'
export * from './AuthParamList'
export * from './PostParamList'
export * from './RootParamList'
export * from './TabParamList'

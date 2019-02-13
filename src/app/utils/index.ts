interface Action {
  START: string;
  SUCCESS: string;
  ERROR: string;
}

export function createAsyncActions(typeNsp: Action) {
  return {
    start: createAction(typeNsp.START),
    success: createAction(typeNsp.SUCCESS),
    error: createAction(typeNsp.ERROR),
  };
}

export function createAction(type) {
  return (payload, meta) => ({
    type,
    payload,
    meta,
  });
}

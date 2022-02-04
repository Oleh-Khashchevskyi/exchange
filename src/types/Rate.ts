export type Rate = {
  id: number,
  name: string,
  value: number,
};

export type StateType = {
  rates: Rate[],
  defaultRate: string,
  loading: boolean,
  error: string | null,
};

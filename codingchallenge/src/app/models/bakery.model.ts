export interface Baker {
  type: string;
  day: number;
  amount: number;
}

export interface Bakers {
  bakers: Baker[];
}

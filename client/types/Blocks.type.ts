export type Block = {
  dark: boolean;
  name: string;
};

type Blocks = {
  active: string;
  dark: boolean;
  data: Block[];
  mobile: boolean;
};

export default Blocks;

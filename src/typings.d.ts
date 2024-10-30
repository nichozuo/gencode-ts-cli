type ConfigType = {
  url: string;
  module: string;
  outPath: string;
  apis: {
    firstLine: string;
  };
};

type MyTreeNodeType = {
  [key: string]: MyTreeNode | null;
};

type MyNodeType = {
  params: {
    name: string;
    type: string;
    description: string;
    required: boolean;
  }[];
  required: string[];
};

type XEnumType = {
  [key: string]: {
    title: string;
    field: string;
    properties: {
      label: string;
      value: string;
      color: string;
      textColor: string;
    }[];
  };
};

declare module 'openapi-typescript' {
    export interface OpenAPI3 {
        tags?: { name: string }[];
        paths?: Record<string, Record<string, unknown>>;
        'x-enum'?: XEnumType[];
    }
}

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

interface XEnumType {
    name: string;
    title: string;
    items: {
        text: string;
        value: string;
        color: string;
    }[];
} 
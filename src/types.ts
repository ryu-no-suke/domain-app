
// 共通
export type Base = {
    memo: string;
}

export type Content = {
    contentCode: number;
}

// 個別
export type Domain = {
    itemCode: number
    base: Base;
    contents: Content[]
}

export type Domain2 = {
    itemCode: number;
    base: Base;
    contents: [];
}

// 共通
export type Base = {
    memo: string;
}

export type Content = {
    contentCode: number;
}

// formの観点を入れる
type InputType = {
    text: string;
    check: boolean;
    select: string[];
    c_t: c_t;

}

type c_t = {
    text: string,
    check: boolean
}



type ContentWithInputType = {
    content: Content;
    inputType: InputType["text"]
}

type ContentWithCheckBox = {
    content: Content;
    inputType: InputType["check"]
}

type ContentWithCheckAndText = {
    content: Content;
    inputType: InputType["c_t"]
}



// 個別
export type Domain2 = {
    itemCode: number;
    base: Base;
    contents: [
        ContentWithInputType,
        ContentWithCheckBox,
        ContentWithCheckAndText
    ];
}
// topから、
// domain.base.~で共通情報取得
// domain.contents.contentで項目名取得
// domain.contents.content.inputType.c_t.textで取得
const inputType1: InputType["text"] = "";
const inputType2: InputType["check"] = false;
const inputType3: InputType["c_t"] = { text: "", check: false };
const ct1: ContentWithInputType = { content: { contentCode: 1 }, inputType: inputType1 }
const ct2: ContentWithCheckBox = { content: { contentCode: 1 }, inputType: inputType2 }
const ct3: ContentWithCheckAndText = { content: { contentCode: 1 }, inputType: inputType3 }
const domain: Domain2 = { itemCode: 1, base: { memo: "基本メモ" }, contents: [ct1, ct2, ct3] }
console.log(domain.base.memo);
console.log(domain.contents[0].content); // 項目名
console.log(domain.contents[0].inputType);
console.log(domain.contents[2].inputType.text);
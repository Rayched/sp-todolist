### Project 패키지 구조 명세서

```text
/sp-todolist
└ /_components #컴포넌트 전체 모음
└ /_styles #global style only
```

### 색상 Data

``` js
const ColorInfos = [
    //Area 1
    { name: "slate/900", value: "#0F172A" },
    { name: "slate/800", value: "#1E293B" },
    { name: "slate/500", value: "#64748B" },
    { name: "slate/400", value: "#94A3B8" },
    { name: "slate/300", value: "#CBD5E1" },
    { name: "slate/200", value: "#E2E8F0" },
    { name: "slate/100", value: "#F1F5F9" },

    //Area 2
    { name: "violet/600", value: "#7C3AED" },
    { name: "violet/100", value: "#EDE9FE" },

    //Area 3
    { name: "rose/500", value: "#F43F5E" },
    { name: "lime/300", value: "#BEF264" },

    //Area 4
    { name: "amber/800", value: "#92400E" },
];
```
---

### font data

``` js
const fontInfo = [
    //size 단위 == px
    { name: "NanumSquare", type: "Bold", size: 20 },
    { name: "NanumSquare", type: "Bold", size: 18 },
    { name: "NanumSquare", type: "Bold", size: 16 },
    { name: "NanumSquare", type: "Bold", size: 16 },
    { name: "NanumSquare", type: "Regular", size: 16 },
];
```
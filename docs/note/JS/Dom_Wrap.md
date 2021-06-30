---
description: 最近要處理某個dom把他們都套入div時發現有點棘手，與朋友討論後發現有jquery有wrap()相關語法，特地寫起來筆記一下😅

---

# wrap()替換dom節點

最近要處理某個dom把他們都套入div時發現有點棘手，與朋友討論後發現有jquery有wrap()相關語法，特地寫起來筆記一下😅

## wrap()

在每個匹配的元素外層包上html元素

---

假設我們目前有

``` HTML
<p>foo</p>
```

要給這段p元素套上div時 就可以用wrap()

``` JS
$('p').wrap('<div class="new" />');
```

那最後的結果就會這樣

``` HTML
<div class="new">
    <p>foo</p>
</div>
```

如果想要自訂片段也可以用以下方式:

``` JS
$('p').wrap(function() {
  return '<div class="' + $(this).text() + '" />';
});
```

結果:

``` HTML
<div class="foo">
    <p>foo</p>
</div>
```

## wrapInner()

在每個匹配的元素內層寫入html元素

---

假設我們目前有

``` HTML
<div>foo</div>
```

要給這段div元素加入b時 就可以用wrapInner()

``` JS
$('div').wrapInner('<b/>');
```

那最後的結果就會這樣

``` HTML
<div>
    <b>foo</b>
</div>
```

也可以自訂:

``` JS
$('div').wrapInner(function() {
  return '<span class="' + $(this).text() + '" />';
});
```

結果:

``` HTML
<div>
    <span class="foo">foo</span>
</div>
```

## wrapAll()

在所有匹配的元素外層包上html元素

---

假設我們目前有

``` HTML
<p>foo</p>
<p>bar</p>
```

要在這兩段外面用個div包起來時，可以這樣寫:

``` JS
$('p').wrapAll('<div class="new" />');
```

那最後的結果就會這樣

``` HTML
<div class="new">
    <p>foo</p>
    <p>bar</p>
</div>
```

只是wrapAll就無法自訂片段了！！

## unwrap()

將匹配到的父集合刪除，保留自己跟兄弟元素在原來的位置

---

假設我們目前有

``` HTML
<div>
    <p>foo</p>
</div>
```

假設要刪除div並保留p段落的時候，可以這樣寫:

``` JS
$('p').unwrap();
```

那最後的結果就會這樣

``` HTML
<p>foo</p>
```

以上就是wrap相關使用技術了~

<Disqus_V2/>

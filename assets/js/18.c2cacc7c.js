(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{525:function(n,s,t){"use strict";t.r(s);var a=t(12),i=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"_1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1"}},[n._v("#")]),n._v(" 1")]),n._v(" "),t("div",{staticClass:"language-C# line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("public class Solution {\n    public int[] TwoSum(int[] nums, int target) {\n        Dictionary<int,int> map = new Dictionary<int,int>();\n        for(int i=0;i<nums.Length;i++){\n            if(map.ContainsKey(target - nums[i]))\n                return  new int[] { map[target - nums[i]], i };\n            else if(!map.ContainsKey(nums[i]))\n                map.Add(nums[i],i);            \n        }\n        return nums;\n    }\n}\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);
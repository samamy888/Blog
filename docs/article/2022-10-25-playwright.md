---
description: Playwright介紹與爬蟲教學
---

# Playwright介紹與爬蟲教學

本篇分為兩個部分，

第一部分介紹playwright與基本操作，

第二部分分享如何進行PTT爬蟲。

## Playwright介紹

Playwright 是微軟開發的 web 自動化測試工具，它有幾項特性：

*  跨平台
     * Windows
     * Linux
     * macOS 
*  跨瀏覽器
     * Chromium
     * WebKit 
     * Firefox
* 跨語言
    * NodeJs
    * Python
    * .NET
    * JAVA

接下來以下都會使用.NET進行操作演示

## 創建專案

1. 創建專案

    使用.NET CLI進行操作，

    可以參考[官方文件](https://playwright.dev/dotnet/docs/library)的Usage部分進行複製並更改一些地方，

    更改第十行，改為正在使用的.net版本

    ```bash{10}
    # 創建專案
    dotnet new console -n PlaywrightDemo
    cd PlaywrightDemo

    # 添加 Playwright 套件依賴
    dotnet add package Microsoft.Playwright
    # 建置專案
    dotnet build
    # 安裝 playwright 所需的瀏覽器資源，它默認不是吃自己的瀏覽器
    pwsh bin/Debug/net6.0/playwright.ps1 install
    ```
2. 撰寫程式碼
   
    開啟 **Program.cs** 並貼上以下程式碼

    ```csharp
    using Microsoft.Playwright;
    // 創建一個 Playwright 的 Instance
    using var playwright = await Playwright.CreateAsync();
    // 取得一個 Browser 的 Instance
    await using var browser = await playwright.Chromium.LaunchAsync();
    // 取得一個Page 的 Instance
    var page = await browser.NewPageAsync();
    // 前往 https://playwright.dev/dotnet 這個網頁
    await page.GotoAsync("https://playwright.dev/dotnet");
    //截圖當前畫面
    await page.ScreenshotAsync(new()
    {
        Path = "screenshot.png"
    });
    ```
3. 執行程式

    ```bash
    dotnet run
    ```
4. 觀看結果

    可以看到資料夾內有 **screenshot.png** 這張截圖就代表成功囉!


## 第二部分未完待續....


## 參考文獻
<https://blog.miniasp.com/post/2021/09/12/Writing-E2E-Testing-using-Playwright-for-NET>
<https://dotblogs.com.tw/supershowwei/2021/11/07/234421>
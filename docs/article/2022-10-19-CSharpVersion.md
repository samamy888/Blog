# C#9、C#10 版本新功能筆記

最近主管問到.net core 3.x 跟 .net 6 轉版本的話會有什麼影響，
特別來記錄這篇有用到的新功能。

## 預設架構對應的C#版本

參考[官方文件](https://learn.microsoft.com/zh-tw/dotnet/csharp/language-reference/configure-language-version) 表格
可以看到中間差了9跟10兩代，因此以下內容都會講解 C#9 跟 C#10 的新特性

|  目標架構   | version  | C# 語言版本預設值  |
|  ----  | ----  | ----  |
| .NET   | 6.x   | C# 10 |
| .NET Core  | 3.x | C# 8.0 |

## C#9

### Record

原本C#要創建 Immutable Class 要使用 **{ get; init; }** 才可以

```csharp
public class Person
{
    public string FirstName { get; init; } = default!;
    public string LastName { get; init; } = default!;
};
```

有了 Record 之後可以更快速完成

```csharp
public record Person(string FirstName, string LastName);
```

如果需要clone並更改某個值的時候，可以使用 **with** 運算式

```csharp{12,17,22}
public record Person(string FirstName, string LastName)
{
    public string[] PhoneNumbers { get; init; }
}

public static void Main()
{
    Person person1 = new("Nancy", "Davolio") { PhoneNumbers = new string[1] };
    Console.WriteLine(person1);
    // output: Person { FirstName = Nancy, LastName = Davolio, PhoneNumbers = System.String[] }

    Person person2 = person1 with { FirstName = "John" };
    Console.WriteLine(person2);
    // output: Person { FirstName = John, LastName = Davolio, PhoneNumbers = System.String[] }
    Console.WriteLine(person1 == person2); // output: False

    person2 = person1 with { PhoneNumbers = new string[1] };
    Console.WriteLine(person2);
    // output: Person { FirstName = Nancy, LastName = Davolio, PhoneNumbers = System.String[] }
    Console.WriteLine(person1 == person2); // output: False

    person2 = person1 with { };
    Console.WriteLine(person1 == person2); // output: True
}
```

### 最上層陳述式

舊版需要 namespace 與 class 等等。
```csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```
同樣作業，新版只需要兩行。
```csharp
using System;

Console.WriteLine("Hello World!");
```
大家可以去.net的playground玩玩

<https://dotnetfiddle.net/>

在一些小程式上特別方便，
~~感覺在學Python~~

### 模式比對增強功能

可以使用 is not 檢查 Null。

```csharp
if (e is not null)
{
    // ...
}
```

### 調整和完成功能

可以直接使用new()完成初始化，算是很好用的語法糖。

```csharp
private List<WeatherObservation> _observations = new();
```
## C#10

### global using

若創建.net 6 框架的專案時，**ImplicitUsings** 會默認開啟，

我們可以在 .csproj 裡面看到 **ImplicitUsings** 會是 **enable**
```{5}
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>
</Project>
```
### namespace 空間形式變更

原本的 namespace 會選定範圍
```csharp
namespace MyNamespace
{
    // ...
}
```
現在只需改用新形式，下列所有宣告都是宣告命名空間的成員
```csharp
namespace MyNamespace;
```
### Lambda 運算式改善

C# 9 及以前若要用Lambda則要寫定強行別變數

```csharp{3}
// C#9
using System;
Func<string> welcome = () => "Welcome to Lambda Improvements";
Console.WriteLine(welcome);
```

但若是到 C#10 則可以右後往前推斷變數類型 

```csharp{3}
// C#10
using System;
var welcome = () => "Welcome to Lambda Improvements";
Console.WriteLine(welcome);
```

以上分享到此結束，感謝收看😊😊

## 參考文獻

<https://learn.microsoft.com/zh-tw/dotnet/csharp/whats-new/csharp-9>
<https://learn.microsoft.com/zh-tw/dotnet/csharp/whats-new/csharp-10>
<https://rainmakerho.github.io/2020/12/31/NewIn-CSharp9-NET5/>
<https://www.huanlintalk.com/2022/02/csharp10-global-using.html>
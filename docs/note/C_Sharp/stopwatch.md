---
description: |
      如果要計算程式效能的時候，可以利用stopwatch去達到目的，
      可以取得的單位有:時、分、秒、毫秒
---
# 使用StopWatch偵測效能與執行時間

[官方文檔](https://docs.microsoft.com/zh-tw/dotnet/api/system.diagnostics.stopwatch?view=netcore-3.1)

如果要計算程式效能的時候，可以利用stopwatch去達到目的



## 官方範例程式碼:
```csharp
using System;
using System.Diagnostics;
using System.Threading;
class Program
{
    static void Main(string[] args)
    {
        Stopwatch stopWatch = new Stopwatch();
        stopWatch.Start();
        Thread.Sleep(10000);
        stopWatch.Stop();
        // Get the elapsed time as a TimeSpan value.
        TimeSpan ts = stopWatch.Elapsed;

        // Format and display the TimeSpan value.
        string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
            ts.Hours, ts.Minutes, ts.Seconds,
            ts.Milliseconds / 10);
        Console.WriteLine("RunTime " + elapsedTime);
    }
}

```
## 屬性


<table class="table">
<tr>
    <td> Elapsed</td>
    <td> 默認值，開啟取得目前執行個體所測量的已耗用時間總和。</td>
</tr>
<tr>
    <td> ElapsedMilliseconds</td>
    <td>  取得目前執行個體所測量的已耗用時間總和，以毫秒為單位。</td>
</tr>
<tr>
    <td> ElapsedTicks</td>
    <td>  取得目前執行個體所測量的已耗用時間總和，以計時器刻度為單位。</td>
</tr>
<tr>
    <td> IsRunning</td>
    <td>  取得值，指出 Stopwatch 計時器是否執行中。</td>
</tr>
</table>


**我比較常使用的方式是取得總時間秒數🙂**

## 取得總時間秒數
```csharp
using System;
using System.Diagnostics;
using System.Threading;
class Program
{
    static void Main(string[] args)
    {
        Stopwatch stopWatch = new Stopwatch();
        stopWatch.Start();//開始
        stopWatch.Reset();//歸零 可以不加
        //dosomething.....
        stopWatch.Stop();//結束
        TimeSpan ts = stopWatch.Elapsed;        // 取得 elapsed time 
        string TotalSeconds= stopWatch.Elapsed.TotalSeconds.ToString();        // 取得總秒數
        Console.WriteLine("Total seconds : " + TotalSeconds);
    }
}

```


<Disqus_V2/>

<style scoped>
.table {
  border: 1px solid black;
  background-color:#ffffff!important
}
.first{
    background-color:#414141;
    color:#ffffff;
}
.table td{
    width:50vh
}
</style>



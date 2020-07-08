---
description: |
      之前最怕遇到的就是選擇的參數有時候會帶null，
      那時候遇到這種的都改用字串寫法，如果變數一多就會變的很恐怖，
      後來發現有其他寫法，就在也離不開了
---
# SP變數帶null的where問題

之前最怕遇到的就是選擇的參數有時候會帶null

那時候遇到這種的都改用字串寫法

```sql

PROCEDURE [dbo].[Student_Get]
	@Class Varchar(1000) = NULL, --班級
AS
BEGIN
	SET NOCOUNT ON;
	Declare @strexec nvarchar(4000)
	set @strexec='Select * From TB_Student Where 1=1'	
	If(@Status Is Not Null)
	Begin
		set @strexec=@strexec+'And Class = '
		+ convert(varchar,@Class)
	End	
	exec(@strexec)
END

```

>真的很難維護，如果變數一多，就會變的很恐怖

後來發現爬文

[參考網站](https://stackoverflow.com/questions/4224991/checking-an-input-param-if-not-null-and-using-it-in-where-in-sql-server)

發現還能這樣寫~  

```sql
PROCEDURE [dbo].[Student_Get] 
	@Class Varchar(1000) = NULL, --班級
AS
BEGIN
	SET NOCOUNT ON;
	Select * From TB_Student
	where (@Class is null or @Class = Class)
END

```

就再也離不開這種寫法拉😅~~~

## 補充

遇到需要使用in的場合 就不能使用以下寫法了

```sql
PROCEDURE [dbo].[Student_Get] 
	@Class Varchar(1000) = NULL, --班級
AS
BEGIN
	SET NOCOUNT ON;
	Select * From TB_Student
	where (@Class is null or Class in (@Class) )
END
 
```

假設我丟 **'501,502'**  他連逗號也會變成字串
所以要改方式

經爬文發現 [這種寫法](https://stackoverflow.com/questions/17923186/sql-stored-procedure-in-clause-varchar-array)

把字串轉為xml 當成一個表去實做

```sql

DECLARE @categoryFilter VARCHAR(200) = 'Food,Clothes,Blood'

SELECT t.c.value('.', 'VARCHAR(50)')
FROM (
     SELECT ID = CAST ('<M>' + REPLACE(@categoryFilter, ',', '</M><M>') + '</M>' AS XML)
) r 
CROSS APPLY ID.nodes ('/M') t(c)

```

::: tip 結果:
<br/>
<img :src="$withBase('/demo_Sql_Null.png')" alt="foo"> 

:::



這樣就可以放心去in了~

筆記筆記

<disqus/> 
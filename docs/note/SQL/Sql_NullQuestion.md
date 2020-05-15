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
		set @strexec=@strexec+'And A.Class = '
		+ convert(varchar,@Class)
	End	
	exec(@strexec)
END

```
<br/>

>真的很難維護，如果變數一多，就會變的很恐怖

<br/>

後來發現爬文

<br/>

[參考網站](https://stackoverflow.com/questions/4224991/checking-an-input-param-if-not-null-and-using-it-in-where-in-sql-server)

<br/>

發現還能這樣寫~  

<br/>

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

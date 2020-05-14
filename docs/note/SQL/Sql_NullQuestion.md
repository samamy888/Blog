# SP變數帶null的where問題

之前最怕遇到的就是選擇的參數有時候會帶null

那時候遇到這種的都改用字串寫法

```sql

PROCEDURE [dbo].[REPORTSP_20_CSTools_UserCustomer_Get]
	@AppID Varchar(1000) = NULL, --AppID
	@DeviceID Bigint = NULL,--裝置ID
	@QuestionTypeID Bigint = NULL,--問題類別
	@DetailID Bigint = NULL,--細項
                .
                .
                .
AS
BEGIN
	SET NOCOUNT ON;
	Declare @strexec nvarchar(4000)
	set @strexec='Select CaseID, AppID, UID, ServerID, RoleID,  B.DeviceName ,C.QuestionTypeName,
    D.DetailName, Email, Phone, ReturnContent, Image1, Image2, Image3, QuestionDate, CreateDate,
     A.Editor, UpdateDate, A.Status, Owner,A.Language, NiceRank, MEMO 
	from [dbo].[TB_20_CSTools_UserCustomer] AS A
	Join [dbo].[TB_20_CSTools_Device] as B
	on A.DeviceID = b.DeviceID
	Join [dbo].[TB_20_CSTools_QuestionType] as C
	on A.QuestionTypeID = C.QuestionTypeID
	Join [dbo].[TB_20_CSTools_Detail] as D
	on A.DetailID = D.DetailID where 1=1 '	
	If(@Status Is Not Null)
	Begin
		set @strexec=@strexec+'And A.Status = '+ convert(varchar,@Status)
	End
	If(@AppID Is Not Null)
	Begin
		set @strexec=@strexec+' And A.AppID IN('+ @AppID+')'
	End
                .
                .
                .

	If(@UID Is Not Null)
	Begin
		set @strexec=@strexec+' And A.UID Like'''+ '%'+''+ convert(varchar,@UID)+''''
	End
	If(@LDate Is Not Null)
	Begin
		set @strexec=@strexec+' And A.UpdateDate >='''+ convert(varchar,@LDate,111)+'''And A.UpdateDate < '''+convert(varchar, DATEADD (day, 1 , @LDate ),111)+''''
	End
	If(@Owner	 Is Not Null)
	Begin
		set @strexec=@strexec+' And A.Owner ='''+ @Owner+''''
	End
	set @strexec=@strexec+' Order By A.CaseID desc'
	set @strexec=@strexec+' Offset '+ convert(varchar,@Offset) + ' Rows '
	set @strexec=@strexec+' Fetch Next 50 Rows Only '
	exec(@strexec)
	--select  (@strexec)
END

```
<br/>

>看到都吐血了😱😱😱

<br/>

後來發現爬文

<br/>

[參考網站](https://stackoverflow.com/questions/4224991/checking-an-input-param-if-not-null-and-using-it-in-where-in-sql-server)

<br/>

發現還能這樣寫~  

<br/>

```sql
PROCEDURE [dbo].[REPORTSP_20_CSTools_CustomeServiceCaseStatisticsV2_Get] 
	@AppID Varchar(1000) = NULL, --AppID
	@DeviceID Bigint = NULL,--裝置ID
	@QuestionTypeID Bigint = NULL,--問題類別
	@DetailID Bigint = NULL,--細項
	@SDate DateTime = NULL,--開始日期
	@EDate DateTime = NULL--結束日期
AS
BEGIN
	SET NOCOUNT ON;

	SELECT AppID,Status,NiceRank,Count(CaseID) as Count
    From [dbo].[TB_20_CSTools_UserCustomer]
	where (AppID in (@AppID) or @AppID is null)
	And (DeviceID = @DeviceID or @DeviceID is null)
	And (QuestionTypeID = @QuestionTypeID 
    or @QuestionTypeID is null)
	And (DetailID = @DetailID or @DetailID is null)
	And (CreateDate < @SDate or @SDate is null)
	And (CreateDate > @EDate or @EDate is null)
	group by AppID,NiceRank,Status
END

```

就再也離不開這種寫法拉😅~~~

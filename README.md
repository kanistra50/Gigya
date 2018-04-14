# Gigya

Gigya provides an API to manage a website policies for login and registration: 

accounts.setPolicies 
​http://developers.gigya.com/display/GD/accounts.setPolicies+REST 

accounts.getPolicies 
​http://developers.gigya.com/display/GD/accounts.getPolicies+REST 

Provide a UI that instruments the "accountOptions" parameter 
!! Предоставьте пользовательский интерфейс, который устанавливает параметр «accountOptions»

******************
Develop an Angular SPA that edits/views the "​accountOptions​" parameter of accounts.get/setPolicies APIs:
Разработайте Angular SPA, который редактирует/просматривает параметр accountOptions API-интерфейсов accounts.get/setPolicies:
- Boolean fields should be bound to checkboxes 
Булевы поля должны быть привязаны к флажкам
- Strings should be bound to textboxes 
Строки должны быть привязаны к текстовым полям
- loginIdentifierConflict should be a dropdown with the available options 
loginIdentifierConflict должен быть раскрывающимся списком доступных параметров
- Fields should be populated by the accountOptions response field (json) of accounts.getPolicies 
Поля должны заполняться полем ответа accountOptions (json) accounts.getPolicies
-???  Save button should call accounts.setPolicies with the new accountOptions json 
Кнопка «Сохранить» должна вызывать accounts.setPolicies с новым accountOptions json
- The response field errorMessage should be rendered if response.errorCode is not 0. 
Поле ответа errorMessage должно отображаться, если response.errorCode не равно 0
- The app should have a read-only mode where fields are disabled. 
  Readonly mode should be enabled when going to the path "/readonly" 
(e.g. ​http://localhost/readonly​) 
Приложение должно иметь режим только для чтения, где поля отключены. 
Режим Readonly должен быть включен при переходе на путь «/ readonly» 
(например, http: // localhost / readonly)
-  Implementation should not have any server-side components 
Реализация не должна иметь серверных компонентов
- Use a UI library of your choice And Add appropriate automated tests as you wish (unit, functional, integration) 
Используйте библиотеку пользовательского интерфейса по вашему выбору И добавьте соответствующие автоматические тесты, как вы пожелаете (блок, функциональность, интеграция)

***************
Requests Response is returned with jsonp. 
Angular 2 have built-in jsonp support:
Angular 2 - ​https://angular.io/docs/ts/latest/guide/server-communication.html​ (see JsonpModule) 

**************
Credentials 
UserKey: AJA3Cw9XcJZf 
UserSecret: 1J+YxAY47khnuXf4GKSggLpPFBbQv8Hq 
APIKey: 3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK 

**************
GetPolicies example 
https://accounts.gigya.com/accounts.getPolicies?userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4 GKSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcF 
Qe0PASK&format=jsonp&callback=myCallback 
 
*************
SetPolicies example 
https://accounts.gigya.com/accounts.setPolicies?userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4G KSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQ e0PASK&accountOptions=%7BsendWelcomeEmail%3Atrue%7D&format=jsonp&callback=myCallback 
 
 
 

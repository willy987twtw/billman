# billman
### 使用情境
可可自動分帳，使用情境為**出遊**時使用。出遊消費時使用此程式紀錄**付款人及需分款人、付款金額及品名**；在出遊結束後，可以藉由系統自動計算的帳款進行分帳，省去分帳時不要的麻煩。

### 程式說明
使用此程式時，用戶可建立多個群組，每個群組代表不同的出遊，群組間資料相互獨立；群組可設定不同的使用者(出遊同伴)，並紀錄不同的事件(消費)。因資料獨立，因此不必擔心搞混。


****
## 使用說明
1. 首次使用時，系統會先建立一個預設群組，以及預設使用者。
2. 在使用記錄功能前，先新增使用者(出遊同伴)。
3. 新增使用者後，即可開始記錄每筆消費明細，以及付款人、需分款人(們)。

### 功能介紹
* **群組**：此區域為您的所有群組，每個群組的資料都是獨立存在，互不影響；可新增/刪除/修改名稱。
* **使用者**：此區域為該群組中的所有使用者(出遊同伴)；可新增/刪除/修改名稱。
* **消費記錄**：此區域為該群組中所有的消費紀錄，其中紀錄金額、商品名稱、付款者、以及需分款者(們)；可新增/刪除。


### 其他功能
1. 資料儲存功能——資料均儲存於LocalStorage中，因此關閉再打開時，資料仍然存在，不必擔心資料流失。
2. 群組資料獨立功能——每個群組的資料都是獨立存在，互不影響；當按下其他群組時，會即時顯示其他群組的資料，不必透過更新。
3. 消費紀錄排序功能——消費紀錄會透過消費日期進行自動排序。
4. 消費紀錄置頂功能——當消費紀錄較多時，回到頂端較麻煩，因此設計置頂按鈕供置頂。
5. 刪除全機紀錄按鈕——若資料已不需要使用時，除了可刪除整個群組，也可使用刪除全機紀錄按鈕。
****


## 啟動方法
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```




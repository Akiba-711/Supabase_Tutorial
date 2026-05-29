# SUPABASEのCRUD操作課題

## 前提知識
CRUD : Create Read Update Delete の頭文字でデータ操作の基本操作のこと

### 1.必要パッケージファイルのimport
```ts
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config()
```

### 2.Supabaseへの接続
```ts
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)
```

`process 〇〇 `:"実行中のプロセスの環境変数を〇〇から取り出す"ためのNode.jsの機能

### 3.CRUDに関する操作

#### 3-1.全CRUD操作に関係する土台
```ts
const { data , error } = await supabase
    .from('table')

    //CRUD操作部

    .select()

    if(error){
        console.error('失敗:', error.message)
        return
    }
    console.log('成功:', data)
```
分解して解説します
```ts
const { data , error } = 
```
supabaseのお約束的な構文
結果を`data`と`error`の2セットで必ず返してね というコード
成功時は`error`、失敗時は`data`がnullになる

```ts
await
```
結果が帰って来るまで、ここで待つ処理
データベースに接続して操作するプログラムなので、先々進まないための処理
`await`を使う関数には`async`を付ける必要があるため、この先で出す関数が`async function...`になっている

```ts
.from('table')
```
`table`テーブルに対してこれから操作を行うよ という操作

```ts
.select()
```
操作した結果を返す操作

```ts
if(error){
        console.error('失敗:', error.message)
        return
    }
    console.log('成功:', data)
```
エラーが返ってきたらその内容を、成功したらそのデータを返す操作


#### 3-2.CREATE操作
```ts
.insert({ title , content })
```
名前が`title`、内容が`content`のデータを追加する操作

##### 3-2-a.省略記法
先ほどだした
```ts
.insert({ title , content })
```
の書き方、実は省略した書き方になっています。
本来は
```ts
.insert({ title(カラム) : title(変数) , content(カラム) : content(変数) })
```
のような書き方で、
「titleカラムに変数titleの値を、contentカラムに変数contentの値を入れる」
という意味
カラム名と変数名が同じなので、省略してもシステムが勝手に判断してくれるようになっています

#### 3-3.READ操作
```ts
.select('*')
```
全てのカラムを返す操作　(*はSQLで「全て」を意味する記号)

もし特定のカラムだけを返してほしいなら
```ts
.select('title , content')
```
という書き方になる。

引数なし`.select()`だと、直前に操作した行が対象になる


#### 3-4.UPDATE操作
```ts
.eq('id', id)
```
idカラムが変数idと等しい(eq→イコール)行だけ という絞り込み条件
これを忘れると絞り込み条件がなくなる→すべての行がUPDATEの対象になってしまうので、注意

```ts
.update({title})
```
titleカラムの内容を変数titleの内容に更新する処理(3-2-a.省略記法 参考)


#### 3-5.DELETE操作
```ts
.eq('id' , id)
```
(3-4.UPDATE 参考)

```ts
.delete()
```
行を削除する操作

#### 3-6.まとめ
ここまでの内容を元に、CREATE操作を行う関数を作ると以下のようになる
各コードの内容は3.に記しているので確認すること

```ts
async function createMemo(title: string, content: string) {
  const { data, error } = await supabase
    .from('memos')
    .insert({ title, content })
    .select()

  if (error) {
    console.error('CREATE失敗:', error.message)
    return
  }
  console.log('CREATE成功:', data)
}
```

## 課題
以下のサンプルコードを元に、以下の内容を実行するコードを書け

実行内容
・各自の名前(atuto,yuuki)のtableに対して操作を行う
・データの追加、更新、削除を行った後は必ずデータの表示(READ)を行う
1.`title = 1つ目` `content = Supabaseのテスト` のデータを追加　

2.`title = 2つ目` `content = CRUD操作のテスト` のデータを追加　

3.1つ目のデータを `content = TypeScriptのテスト`に更新(`title`はそのまま)　

4.2つ目のデータを削除　

5.1つ目のデータを削除　


### 注意
データの削除に失敗したコードを実行した場合、削除出来なかったデータがDBに残ってしまう。
その場合はSupabaseのプロジェクトページの左メニューからTable Editer 
自分の名前のtableを選び、残っているデータにチェックボックスを入れる→delete
で削除してから実行すること。

`id`は自動で割り振られる上、削除しても(たぶん)振り分けがリセットされないため、今回の課題では操作の指定の時に`id`を使う場合は手作業で合わせること

### サンプルコード
```ts
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config() //.envファイルを読み込む

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// ===== CREATE: データを追加 =====
async function createData(title: string, content: string) {
  
}

// ===== READ: データを取得 =====
async function readData() {
  
}

// ===== UPDATE: データを更新 =====
async function updateData(id: number, title: string) {
  
}

// ===== DELETE: データを削除 =====
async function deleteData(id: number) {
  
}

// ===== 実行 =====
async function main() {
  
}

main()
```

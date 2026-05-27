# Supabase_Tutorial

## セットアップ手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/Akiba-711/Supabase_Tutorial.git
cd Supabase_Tutorial
```

もしくは自分でリポジトリをクローン

### 2. 依存パッケージをインストール

```bash
npm install
```

(`(バッククォート)3つはコードブロックの開始/終了の意)

### 3. Supabaseプロジェクトに接続

1. [Supabase](https://supabase.com/) にアクセスしてアカウント作成
2. 秋葉に連絡し、Supabaseプロジェクト(以下、SBプロジェクト)に招待してもらう
3. 招待を受けた後、SBプロジェクトホーム画面中央上の Connect から、2:Add filesの.env.localを取得
4. 3で取得した.env.localの内容を、Supabase_Tutorial/.env(新規作成) に入力


### 4. 実行

```bash
npx tsx src/index.ts
```

「接続クライアント作成成功！」と表示されればセットアップ完了です。

## 使用技術

- TypeScript
- Supabase (`@supabase/supabase-js`)
- tsx (TypeScript実行ツール)
- dotenv (環境変数管理)

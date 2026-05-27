import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

// .envファイルを読み込み
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY!

// Supabaseクライアントを作成
const supabase = createClient(supabaseUrl, supabaseKey)

// 接続テスト
async function testConnection() {
  console.log('Supabase URL:', supabaseUrl)
  console.log('接続クライアント作成成功！')
}

testConnection()
# Zapier連携設定: Google フォーム → Gmail 自動送信

**作成日**: 2025-10-03
**目的**: 見学・体験申込フォームの回答を自動的にメール送信

## 設定情報

### Google フォーム
- **URL**: https://forms.gle/zSfu2abGqBSxQKde6
- **用途**: 戸山流居合道会 見学・体験申込

### 送信先メールアドレス
- **To**: toyamaryuhounbu@gmail.com

## Zapier 設定手順

### 1. Zapier アカウント準備
- URL: https://zapier.com/
- アカウント作成またはログイン
- 無料プラン: 月100タスクまで利用可能

### 2. 新規 Zap 作成
1. ダッシュボードから「Create Zap」をクリック
2. Zap に名前をつける（例: "戸山流見学申込フォーム通知"）

### 3. トリガー設定（Trigger）

**アプリ選択**: Google Forms
**イベント**: New Response in Spreadsheet
- Google フォームの回答は自動的にスプレッドシートに保存される
- このスプレッドシートの新規行をトリガーとして使用

**設定手順**:
1. "Google Forms" を検索して選択
2. トリガーイベント: "New Response in Spreadsheet" を選択
3. Google アカウントを接続
4. 対象フォームに紐づくスプレッドシートを選択
5. Worksheet: "Form Responses 1" を選択（デフォルト）
6. "Test trigger" で実際のデータを取得・確認

### 4. アクション設定（Action）

**アプリ選択**: Gmail
**イベント**: Send Email

**設定項目**:

#### To（送信先）
```
toyamaryuhounbu@gmail.com
```

#### Subject（件名）
```
【見学・体験申込】新規申込がありました
```

#### Body Type
- Plain Text または HTML を選択

#### Body（本文テンプレート例）

**Plain Text の場合**:
```
戸山流居合道会 見学・体験申込がありました。

========================================
申込日時: {{Timestamp}}
お名前: {{お名前}}
メールアドレス: {{メールアドレス}}
電話番号: {{電話番号}}
年齢: {{年齢}}
希望日時: {{希望日時}}
お問い合わせ内容: {{お問い合わせ内容}}
========================================

フォーム回答: https://forms.gle/zSfu2abGqBSxQKde6
スプレッドシート: [リンクをここに]

※このメールはZapierにより自動送信されています。
```

**HTML の場合**:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Noto Sans JP', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #264653; color: #E9C46A; padding: 20px; text-align: center; }
    .content { background: #f8f9fa; padding: 20px; border: 2px solid #264653; }
    .field { margin-bottom: 15px; padding: 10px; background: white; border-left: 4px solid #2A9D8F; }
    .label { font-weight: bold; color: #264653; }
    .value { margin-top: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>戸山流居合道会 見学・体験申込</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">申込日時</div>
        <div class="value">{{Timestamp}}</div>
      </div>
      <div class="field">
        <div class="label">お名前</div>
        <div class="value">{{お名前}}</div>
      </div>
      <div class="field">
        <div class="label">メールアドレス</div>
        <div class="value">{{メールアドレス}}</div>
      </div>
      <div class="field">
        <div class="label">電話番号</div>
        <div class="value">{{電話番号}}</div>
      </div>
      <div class="field">
        <div class="label">年齢</div>
        <div class="value">{{年齢}}</div>
      </div>
      <div class="field">
        <div class="label">希望日時</div>
        <div class="value">{{希望日時}}</div>
      </div>
      <div class="field">
        <div class="label">お問い合わせ内容</div>
        <div class="value">{{お問い合わせ内容}}</div>
      </div>
    </div>
    <p style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
      ※このメールはZapierにより自動送信されています。
    </p>
  </div>
</body>
</html>
```

### 5. データマッピング

フォームの質問項目に応じて、スプレッドシートの列を本文テンプレートにマッピング:

1. 件名・本文の `{{項目名}}` をクリック
2. トリガーステップで取得したスプレッドシートの列を選択
3. すべての項目をマッピング

**注意**: 
- フォームの質問内容とスプレッドシートの列名が一致していることを確認
- 日本語の列名も使用可能

### 6. テスト実行

1. "Test action" をクリック
2. テストメールが `toyamaryuhounbu@gmail.com` に送信される
3. メールの内容・フォーマットを確認
4. 問題があれば本文テンプレートを修正

### 7. Zap 有効化

1. すべての設定が完了したら「Publish」をクリック
2. Zap が有効になり、新規フォーム回答ごとに自動メール送信開始

### 8. 最終確認

1. 実際にフォームから申込テストを実施
2. メールが正しく届くか確認
3. データが正しくマッピングされているか確認

## トラブルシューティング

### メールが届かない場合
- Zapier の "Task History" で実行ログを確認
- Gmail アカウントの接続状態を確認
- 迷惑メールフォルダを確認

### データが正しく表示されない場合
- スプレッドシートの列名を確認
- データマッピングを再確認
- トリガーを再テストしてデータ構造を確認

### Zap が動作しない場合
- Zap のステータスが "On" になっているか確認
- 無料プランの月間タスク制限（100タスク）を超えていないか確認
- エラーログを確認

## 代替方法（Zapier 以外）

### Google Apps Script を使用
- 無料
- Google フォーム → Gmail 直接送信
- カスタマイズ性が高い
- プログラミング知識が必要

### Make (旧 Integromat)
- Zapier の代替サービス
- より複雑なワークフローに対応
- 無料プランあり

## 備考

- Zapier 無料プラン: 月100タスクまで
- 申込が月100件を超える場合は有料プラン検討
- フォームの質問項目を変更した場合は、Zap のデータマッピングも更新必要
- セキュリティのため、個人情報を含むメールは暗号化推奨

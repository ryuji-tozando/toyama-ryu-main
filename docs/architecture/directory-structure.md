# ディレクトリ構成・Vercel実装ガイド

**作成日**: 2025-10-03
**対象**: 戸山流居合道会ホームページプロジェクト

## プロジェクト構成概要

```
toyama-ryu-main/
├── docs/                    # プロジェクトドキュメント
│   ├── requirements/        # 要件定義書
│   ├── design/             # デザイン・UI/UX仕様
│   ├── architecture/       # システム設計書（このファイルを含む）
│   ├── meeting-notes/      # 議事録・打ち合わせメモ
│   └── assets/             # ドキュメント用画像・図表
│
├── public/                  # 静的アセット（ルートパスから配信）
│   ├── images/             # 画像ファイル
│   ├── fonts/              # カスタムフォント
│   └── favicon.ico         # ファビコン（予定）
│
├── src/                     # ソースコード
│   ├── components/         # Reactコンポーネント
│   │   ├── Navigation.tsx  # ナビゲーション
│   │   ├── Hero.tsx        # ヒーローセクション
│   │   ├── WelcomeSection.tsx
│   │   ├── About.tsx       # 道場紹介
│   │   ├── StyleGuide.tsx  # スタイルガイド
│   │   └── Footer.tsx      # フッター
│   ├── App.tsx             # メインアプリコンポーネント
│   ├── main.tsx            # エントリーポイント
│   └── index.css           # グローバルスタイル
│
├── vercel.json             # Vercelデプロイ設定
├── vite.config.ts          # Viteビルド設定
├── tailwind.config.js      # Tailwind CSS設定
├── tsconfig.json           # TypeScript設定
├── package.json            # 依存関係・スクリプト
└── CLAUDE.md               # Claude Code開発ガイド

```

## Vercel実装詳細

### デプロイ設定（vercel.json）

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 主要設定項目

1. **ビルド設定**
   - ビルドコマンド: `npm run build`
   - 出力ディレクトリ: `dist/`
   - フレームワーク検出: Vite

2. **ルーティング**
   - SPAルーティング: 全パスを `/index.html` にリライト
   - クライアントサイドルーティング対応

3. **セキュリティヘッダー**
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY`
   - `X-XSS-Protection: 1; mode=block`

4. **キャッシング戦略**
   - アセット（/assets/*）: 1年間キャッシュ + immutable
   - その他: デフォルト設定

### デプロイワークフロー

1. **自動デプロイ**
   - mainブランチへのpushで本番環境デプロイ
   - 他ブランチはプレビューデプロイ作成

2. **ビルドプロセス**
   ```bash
   npm install          # 依存関係インストール
   npm run build        # Viteビルド実行（→ dist/）
   # dist/の内容がVercelにデプロイ
   ```

3. **環境変数**
   - Supabase設定等は後続フェーズで追加予定
   - Vercelダッシュボードから環境変数設定

## 静的アセット管理

### public/ ディレクトリ

- **配置**: `public/` 直下のファイルはルートパスから配信
- **例**: `public/images/logo.png` → `https://example.com/images/logo.png`
- **用途**: 
  - ファビコン
  - OGP画像
  - ロゴ・アイコン
  - カスタムフォント

### ビルド時アセット（src/）

- `import` 文で参照する画像・アセット
- Viteがハッシュ付きファイル名で最適化
- `dist/assets/` に出力

## ドキュメント管理

### 命名規則

- 日付プレフィックス推奨: `2025-10-03_filename.md`
- Markdown形式
- 日本語ファイル名可（Git管理上問題なし）

### ドキュレクトリ別用途

- **requirements/**: PRD、機能要件、非機能要件
- **design/**: デザインカンプ、UIフロー、スタイルガイド
- **architecture/**: システム構成、API設計、データモデル
- **meeting-notes/**: 打ち合わせ議事録、決定事項
- **assets/**: 図表・画像（docs内で参照）

## 技術スタック

- **フロントエンド**: React 18 + TypeScript
- **ビルドツール**: Vite 5
- **スタイリング**: Tailwind CSS（カスタムToyamaパレット）
- **アイコン**: lucide-react
- **デプロイ**: Vercel
- **バックエンド**: Supabase（後続フェーズ）

## 次のステップ

1. 要件定義書を `docs/requirements/` に追加
2. デザイン仕様を `docs/design/` に追加
3. 実装フェーズでコンポーネント拡張
4. Vercelプロジェクト作成・接続
